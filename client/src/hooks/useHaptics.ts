import { useEffect, useCallback } from 'react';

/**
 * A highly optimized, global hook that seamlessly adds haptic feedback
 * across all clicks, taps, and scrolls in the application if physical
 * vibration hardware is available and permitted by the browser.
 */
// Granular control over vibration intensity (in milliseconds)
const HAPTIC = {
    light: 10,
    medium: 30,
    heavy: 50,
};

export function useHaptics() {
    const isHapticAvailable = typeof window !== 'undefined' && 'vibrate' in navigator;

    const triggerHaptic = useCallback((pattern: number | number[]) => {
        if (!isHapticAvailable) return;
        try {
            navigator.vibrate(pattern);
        } catch (e) {
            // Ignore security/permission errors for haptics
        }
    }, [isHapticAvailable]);

    useEffect(() => {
        if (!isHapticAvailable) return;

        // --- 1. CLICK & TAP HAPTICS ---
        const handleClick = (e: MouseEvent | TouchEvent) => {
            // Ensure we only vibrate for interactive elements
            const target = e.target as HTMLElement;

            // Look up the DOM tree to see if we clicked a button, link, or interactive element
            const interactiveNode = target.closest('button, a, input, select, textarea, [role="button"], [tabindex="0"]');

            if (interactiveNode) {
                // Tag interactive elements with medium haptic pop
                triggerHaptic(HAPTIC.medium);
            } else {
                // Light tap for general interface clicks to make the app feel tactile
                triggerHaptic(HAPTIC.light);
            }
        };

        // Use capturing phase to ensure we catch it before React synthetic events stop propagation
        window.addEventListener('pointerup', handleClick as any, { capture: true, passive: true });


        // --- 2. SCROLL HAPTICS ---
        // We must heavily throttle scroll haptics so it feels like a subtle mechanical dial
        // rather than an aggressive buzzing that drains battery or gets throttled by the OS.
        let scrollTimeout: any;
        let lastScrollY = window.scrollY;
        let accumulatedScroll = 0;

        // How many pixels of scroll required before generating a tick
        const SCROLL_THRESHOLD = 300;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const delta = Math.abs(currentScrollY - lastScrollY);
            accumulatedScroll += delta;
            lastScrollY = currentScrollY;

            if (accumulatedScroll > SCROLL_THRESHOLD) {
                // We crossed the physical mechanical threshold, fire a tiny light tick
                triggerHaptic(HAPTIC.light);
                accumulatedScroll = 0; // reset
            }

            // Clear the reset timer
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // If the user stops scrolling for 150ms, reset the accumulator so small
            // detached scrolls don't eventually trigger a random tick later.
            scrollTimeout = setTimeout(() => {
                accumulatedScroll = 0;
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('pointerup', handleClick as any, { capture: true });
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout) clearTimeout(scrollTimeout);
        };
    }, [isHapticAvailable, triggerHaptic]);

    return { triggerHaptic, HAPTIC };
}
