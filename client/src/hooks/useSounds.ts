import { useCallback, useRef, useEffect } from 'react';

// Sound effect types available in the app
export type SoundType =
    | 'click'
    | 'success'
    | 'error'
    | 'unlock'
    | 'lock'
    | 'drop'
    | 'whoosh'
    | 'tick'
    | 'pop'
    | 'chime';

// Web Audio API based synthesized sounds - no external files needed!
const createAudioContext = () => {
    if (typeof window === 'undefined') return null;
    return new (window.AudioContext || (window as any).webkitAudioContext)();
};

// Sound synthesis configurations
const soundConfigs: Record<SoundType, (ctx: AudioContext, volume: number) => void> = {
    click: (ctx, volume) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.setValueAtTime(800, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(600, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.05);
    },

    success: (ctx, volume) => {
        const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 - major chord arpeggio
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.1);
            gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.1);
            gain.gain.linearRampToValueAtTime(volume * 0.2, ctx.currentTime + i * 0.1 + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.1 + 0.3);
            osc.start(ctx.currentTime + i * 0.1);
            osc.stop(ctx.currentTime + i * 0.1 + 0.3);
        });
    },

    error: (ctx, volume) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.linearRampToValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(volume * 0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
    },

    unlock: (ctx, volume) => {
        // Ascending unlock sound
        const frequencies = [300, 400, 500, 700];
        frequencies.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.08);
            gain.gain.setValueAtTime(volume * 0.15, ctx.currentTime + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.08 + 0.15);
            osc.start(ctx.currentTime + i * 0.08);
            osc.stop(ctx.currentTime + i * 0.08 + 0.15);
        });
    },

    lock: (ctx, volume) => {
        // Descending lock sound
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(600, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.2);
        gain.gain.setValueAtTime(volume * 0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.2);
    },

    drop: (ctx, volume) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(volume * 0.25, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.15);
    },

    whoosh: (ctx, volume) => {
        // White noise whoosh
        const bufferSize = ctx.sampleRate * 0.2;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);
        }
        const source = ctx.createBufferSource();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();
        source.buffer = buffer;
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1000, ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(3000, ctx.currentTime + 0.1);
        source.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        gain.gain.setValueAtTime(volume * 0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
        source.start(ctx.currentTime);
    },

    tick: (ctx, volume) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1000, ctx.currentTime);
        gain.gain.setValueAtTime(volume * 0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.02);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.02);
    },

    pop: (ctx, volume) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(400, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(150, ctx.currentTime + 0.08);
        gain.gain.setValueAtTime(volume * 0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.08);
    },

    chime: (ctx, volume) => {
        // Beautiful chime sound with harmonics
        const fundamentals = [880, 1100, 1320]; // A5 with harmonics
        fundamentals.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            const vol = volume * (0.2 / (i + 1));
            gain.gain.setValueAtTime(vol, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
            osc.start(ctx.currentTime);
            osc.stop(ctx.currentTime + 0.5);
        });
    },
};

// Check if user prefers reduced motion
const prefersReducedMotion = () => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Get stored sound preference
const getSoundEnabled = (): boolean => {
    if (typeof window === 'undefined') return true;
    const stored = localStorage.getItem('vaultbridge-sounds');
    return stored === null ? true : stored === 'true';
};

// Store sound preference
const setSoundEnabled = (enabled: boolean) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('vaultbridge-sounds', String(enabled));
    }
};

export function useSounds() {
    const audioContextRef = useRef<AudioContext | null>(null);
    const enabledRef = useRef<boolean>(getSoundEnabled());

    // Initialize audio context on first user interaction
    useEffect(() => {
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = createAudioContext();
            }
        };

        // Resume audio context on user interaction (required by browsers)
        const handleInteraction = () => {
            if (audioContextRef.current?.state === 'suspended') {
                audioContextRef.current.resume();
            }
            initAudio();
        };

        window.addEventListener('click', handleInteraction, { once: true });
        window.addEventListener('touchstart', handleInteraction, { once: true });
        window.addEventListener('keydown', handleInteraction, { once: true });

        return () => {
            window.removeEventListener('click', handleInteraction);
            window.removeEventListener('touchstart', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, []);

    const play = useCallback((sound: SoundType, volume: number = 1) => {
        // Don't play if disabled, reduced motion, or no context
        if (!enabledRef.current || prefersReducedMotion()) return;

        if (!audioContextRef.current) {
            audioContextRef.current = createAudioContext();
        }

        const ctx = audioContextRef.current;
        if (!ctx) return;

        // Resume if suspended
        if (ctx.state === 'suspended') {
            ctx.resume();
        }

        try {
            soundConfigs[sound](ctx, Math.min(1, Math.max(0, volume)));
        } catch (e) {
            console.warn('Sound playback failed:', e);
        }
    }, []);

    const setEnabled = useCallback((enabled: boolean) => {
        enabledRef.current = enabled;
        setSoundEnabled(enabled);
    }, []);

    const isEnabled = useCallback(() => enabledRef.current, []);

    const toggle = useCallback(() => {
        const newValue = !enabledRef.current;
        setEnabled(newValue);
        return newValue;
    }, [setEnabled]);

    return {
        play,
        setEnabled,
        isEnabled,
        toggle,
    };
}
