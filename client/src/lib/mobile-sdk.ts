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
    safeAreaInsets?: {
        top: number;
        bottom: number;
    };
}

class MobileSDKService {
    private state: MobileState;
    private listeners: Set<(state: MobileState) => void> = new Set();
    private deferredInstallPrompt: any = null;

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

        // PWA Install Prompt
        window.addEventListener('beforeinstallprompt', (e: any) => {
            e.preventDefault();
            this.deferredInstallPrompt = e;
        });

        // Update viewport height CSS variable for mobile browsers
        this.updateVH();
        window.addEventListener('resize', this.updateVH);
    }

    private updateVH = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

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

    /** Trigger haptic feedback (vibration) on supported devices */
    public vibrate(pattern: number | number[] = 10) {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(pattern);
        }
    }

    /** Use the native Web Share API */
    public async share(data: ShareData): Promise<boolean> {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share(data);
                return true;
            } catch (err) {
                // User cancelled — not an error
                if ((err as DOMException)?.name === 'AbortError') return false;
                console.error('Share failed:', err);
                return false;
            }
        }
        return false;
    }

    /** Check if the native share API is available */
    public canShare(): boolean {
        return typeof navigator !== 'undefined' && !!navigator.share;
    }

    /** Prompt PWA installation (only works after beforeinstallprompt event) */
    public async promptInstall(): Promise<boolean> {
        if (!this.deferredInstallPrompt) return false;
        try {
            this.deferredInstallPrompt.prompt();
            const { outcome } = await this.deferredInstallPrompt.userChoice;
            this.deferredInstallPrompt = null;
            return outcome === 'accepted';
        } catch {
            return false;
        }
    }

    /** Check if PWA install prompt is available */
    public canInstall(): boolean {
        return !!this.deferredInstallPrompt;
    }

    /** Copy text to clipboard with fallback for older browsers */
    public async copyToClipboard(text: string): Promise<boolean> {
        try {
            if (navigator.clipboard?.writeText) {
                await navigator.clipboard.writeText(text);
                return true;
            }
            // Fallback for older/restricted contexts
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            const success = document.execCommand('copy');
            document.body.removeChild(textarea);
            return success;
        } catch {
            return false;
        }
    }

    /** Check if the device has a slow network connection */
    public isSlowConnection(): boolean {
        if (this.state.network?.effectiveType) {
            return ['slow-2g', '2g'].includes(this.state.network.effectiveType);
        }
        return false;
    }

    /** Check if the device has low battery */
    public isLowBattery(): boolean {
        if (this.state.battery) {
            return this.state.battery.level < 0.15 && !this.state.battery.charging;
        }
        return false;
    }

    /** Prevent iOS elastic scroll on specific elements */
    public preventOverscroll(element: HTMLElement) {
        element.addEventListener('touchmove', (e) => {
            if (element.scrollHeight <= element.clientHeight) {
                e.preventDefault();
            }
        }, { passive: false });
    }
}

export const MobileSDK = new MobileSDKService();
