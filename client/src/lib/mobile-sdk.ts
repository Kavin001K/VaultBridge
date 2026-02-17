export interface MobileState {
    isMobile: boolean;
    isTablet: boolean;
    isTouch: boolean;
    isPWA: boolean;
    isIOS: boolean;
    isAndroid: boolean;
    orientation: 'portrait' | 'landscape';
    battery?: {
        level: number;
        charging: boolean;
    };
    network?: {
        type: string;
        effectiveType: string;
    };
}

class MobileSDKService {
    private state: MobileState;
    private listeners: Set<(state: MobileState) => void> = new Set();

    constructor() {
        this.state = this.getInitialState();
        this.initListeners();
    }

    private getInitialState(): MobileState {
        if (typeof window === 'undefined') {
            return {
                isMobile: false,
                isTablet: false,
                isTouch: false,
                isPWA: false,
                isIOS: false,
                isAndroid: false,
                orientation: 'portrait',
            };
        }

        const ua = navigator.userAgent;
        const width = window.innerWidth;

        return {
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
            isPWA: window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone === true,
            isIOS: /iPad|iPhone|iPod/.test(ua),
            isAndroid: /Android/.test(ua),
            orientation: window.innerHeight > window.innerWidth ? 'portrait' : 'landscape',
        };
    }

    private initListeners() {
        if (typeof window === 'undefined') return;

        // Resize & Orientation
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('orientationchange', this.handleResize);

        // Battery
        if ('getBattery' in navigator) {
            (navigator as any).getBattery().then((battery: any) => {
                this.updateBattery(battery);
                battery.addEventListener('levelchange', () => this.updateBattery(battery));
                battery.addEventListener('chargingchange', () => this.updateBattery(battery));
            });
        }

        // Network
        if ('connection' in navigator) {
            const conn = (navigator as any).connection;
            this.updateNetwork(conn);
            conn.addEventListener('change', () => this.updateNetwork(conn));
        }
    }

    private handleResize = () => {
        const width = window.innerWidth;
        const newState = {
            ...this.state,
            isMobile: width < 768,
            isTablet: width >= 768 && width < 1024,
            orientation: window.innerHeight > width ? 'portrait' : 'landscape' as 'portrait' | 'landscape'
        };
        this.updateState(newState);
    };

    private updateBattery(battery: any) {
        this.updateState({
            ...this.state,
            battery: {
                level: battery.level,
                charging: battery.charging
            }
        });
    }

    private updateNetwork(conn: any) {
        this.updateState({
            ...this.state,
            network: {
                type: conn.type,
                effectiveType: conn.effectiveType
            }
        });
    }

    private updateState(newState: MobileState) {
        this.state = newState;
        this.notifyListeners();
    }

    private notifyListeners() {
        this.listeners.forEach(listener => listener(this.state));
    }

    public subscribe(listener: (state: MobileState) => void) {
        this.listeners.add(listener);
        listener(this.state);
        return () => this.listeners.delete(listener);
    }

    public getState() {
        return this.state;
    }

    // --- Actions ---

    public vibrate(pattern: number | number[] = 10) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    public async share(data: ShareData) {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share(data);
                return true;
            } catch (err) {
                console.error('Share failed:', err);
                return false;
            }
        }
        return false;
    }
}

export const MobileSDK = new MobileSDKService();
