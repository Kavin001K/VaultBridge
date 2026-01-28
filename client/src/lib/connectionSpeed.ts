/**
 * Connection Speed Measurement for VaultBridge
 * =============================================
 * 
 * Measures network connection speed and quality to optimize
 * chunk sizes and provide accurate upload time estimates.
 * 
 * Methods:
 * 1. Navigator.connection API (preferred, if available)
 * 2. Timing-based measurement using API endpoint
 * 3. Fallback to conservative defaults
 * 
 * @version 1.0.0
 */

// ============================================================================
// TYPES
// ============================================================================

export interface ConnectionInfo {
    /** Estimated download speed in Mbps */
    speedMbps: number;
    /** Connection type (wifi, cellular, ethernet, unknown) */
    type: 'wifi' | 'cellular' | 'ethernet' | 'unknown';
    /** Effective connection type (slow-2g, 2g, 3g, 4g) */
    effectiveType: 'slow-2g' | '2g' | '3g' | '4g' | 'unknown';
    /** Whether the measurement is considered reliable */
    isReliable: boolean;
    /** Round-trip time in milliseconds (if measured) */
    rtt?: number;
    /** Whether connection is metered (cellular data) */
    isMetered?: boolean;
    /** Measurement method used */
    method: 'navigator' | 'timing' | 'fallback';
}

// Extend Navigator interface to include connection API
interface NetworkInformation {
    downlink?: number;
    effectiveType?: 'slow-2g' | '2g' | '3g' | '4g';
    rtt?: number;
    type?: string;
    saveData?: boolean;
    addEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
    removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions) => void;
}

interface NavigatorWithConnection extends Navigator {
    connection?: NetworkInformation;
    mozConnection?: NetworkInformation;
    webkitConnection?: NetworkInformation;
}

// ============================================================================
// MAIN FUNCTIONS
// ============================================================================

/**
 * Measure current network connection speed and quality
 * 
 * @returns Promise<ConnectionInfo> - Connection information
 * 
 * @example
 * ```typescript
 * const connection = await measureConnectionSpeed();
 * console.log(`Speed: ${connection.speedMbps} Mbps`);
 * console.log(`Type: ${connection.type}`);
 * ```
 */
export async function measureConnectionSpeed(): Promise<ConnectionInfo> {
    // Try Navigator.connection API first (most accurate when available)
    const navigatorInfo = getNavigatorConnection();
    if (navigatorInfo && navigatorInfo.speedMbps > 0) {
        return navigatorInfo;
    }

    // Fall back to timing-based measurement
    try {
        const timingInfo = await measureWithTiming();
        return timingInfo;
    } catch (e) {
        console.warn('[ConnectionSpeed] Timing measurement failed:', e);
    }

    // Ultimate fallback
    return {
        speedMbps: 10, // Assume decent connection
        type: 'unknown',
        effectiveType: '4g',
        isReliable: false,
        method: 'fallback'
    };
}

/**
 * Get connection info from Navigator.connection API
 */
function getNavigatorConnection(): ConnectionInfo | null {
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    if (!connection) {
        return null;
    }

    const speedMbps = connection.downlink || 0;
    const effectiveType = connection.effectiveType || 'unknown';
    const rtt = connection.rtt;
    const connType = connection.type || 'unknown';

    // Determine connection type
    let type: ConnectionInfo['type'] = 'unknown';
    if (connType === 'wifi') type = 'wifi';
    else if (connType === 'cellular') type = 'cellular';
    else if (connType === 'ethernet') type = 'ethernet';

    // Check if metered (data saving mode or cellular)
    const isMetered = connection.saveData || type === 'cellular';

    return {
        speedMbps,
        type,
        effectiveType: effectiveType as ConnectionInfo['effectiveType'],
        isReliable: speedMbps > 0,
        rtt,
        isMetered,
        method: 'navigator'
    };
}

/**
 * Measure connection speed using timing-based approach
 * Makes a small request to the API and measures response time
 */
async function measureWithTiming(): Promise<ConnectionInfo> {
    const testUrl = '/api/health';
    const measurements: number[] = [];

    // Take 3 measurements for more accuracy
    for (let i = 0; i < 3; i++) {
        const startTime = performance.now();

        try {
            const response = await fetch(testUrl, {
                method: 'GET',
                cache: 'no-store',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            if (response.ok) {
                const endTime = performance.now();
                measurements.push(endTime - startTime);
            }
        } catch (e) {
            // Ignore failed attempts
        }

        // Small delay between measurements
        if (i < 2) {
            await new Promise(r => setTimeout(r, 100));
        }
    }

    if (measurements.length === 0) {
        throw new Error('All measurements failed');
    }

    // Calculate average RTT
    const avgRtt = measurements.reduce((a, b) => a + b, 0) / measurements.length;

    // Estimate speed based on RTT (rough heuristic)
    // Lower RTT generally correlates with better connection
    let speedMbps: number;
    let effectiveType: ConnectionInfo['effectiveType'];

    if (avgRtt < 50) {
        // Very fast (< 50ms RTT)
        speedMbps = 100;
        effectiveType = '4g';
    } else if (avgRtt < 100) {
        // Fast (50-100ms RTT)
        speedMbps = 50;
        effectiveType = '4g';
    } else if (avgRtt < 200) {
        // Medium (100-200ms RTT)
        speedMbps = 20;
        effectiveType = '4g';
    } else if (avgRtt < 400) {
        // Slow (200-400ms RTT)
        speedMbps = 10;
        effectiveType = '3g';
    } else if (avgRtt < 800) {
        // Very slow (400-800ms RTT)
        speedMbps = 5;
        effectiveType = '3g';
    } else {
        // Extremely slow
        speedMbps = 2;
        effectiveType = '2g';
    }

    return {
        speedMbps,
        type: 'unknown',
        effectiveType,
        isReliable: measurements.length >= 2,
        rtt: Math.round(avgRtt),
        method: 'timing'
    };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Check if connection is considered "good" for large uploads
 */
export function isGoodConnection(info: ConnectionInfo): boolean {
    return info.speedMbps >= 10 && info.isReliable && !info.isMetered;
}

/**
 * Get human-readable connection quality
 */
export function getConnectionQuality(info: ConnectionInfo): string {
    if (info.speedMbps >= 50) return 'Excellent';
    if (info.speedMbps >= 20) return 'Good';
    if (info.speedMbps >= 10) return 'Fair';
    if (info.speedMbps >= 5) return 'Slow';
    return 'Very Slow';
}

/**
 * Get connection icon/emoji based on quality
 */
export function getConnectionIcon(info: ConnectionInfo): string {
    if (info.speedMbps >= 50) return '📶';
    if (info.speedMbps >= 20) return '📶';
    if (info.speedMbps >= 10) return '📶';
    if (info.speedMbps >= 5) return '📉';
    return '⚠️';
}

/**
 * Monitor connection changes (when supported)
 * @param callback - Function to call when connection changes
 * @returns Cleanup function
 */
export function onConnectionChange(callback: (info: ConnectionInfo) => void): () => void {
    const nav = navigator as NavigatorWithConnection;
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection;

    if (!connection) {
        // Not supported, return no-op cleanup
        return () => { };
    }

    const handler = async () => {
        const info = await measureConnectionSpeed();
        callback(info);
    };

    connection.addEventListener?.('change', handler);

    return () => {
        connection.removeEventListener?.('change', handler);
    };
}
