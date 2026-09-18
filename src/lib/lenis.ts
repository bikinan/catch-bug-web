/**
 * Shared Lenis singleton module.
 *
 * Single source of truth for the Lenis instance. Components import
 * `getLenis()` to access it and listen for the `lenis:ready` window event
 * for async attachment (handles Astro/Vite parallel bundle execution order).
 */
import Lenis from 'lenis';

let _instance: Lenis | null = null;
let _rafId: number | null = null;

/** Returns the active Lenis instance, or null if not yet initialized. */
export function getLenis(): Lenis | null {
  return _instance;
}

/**
 * Custom requestAnimationFrame loop for Lenis.
 * Driven directly by browser refresh rate for smooth 60/120fps scrolling.
 */
function rafLoop(time: number): void {
  if (_instance) {
    _instance.raf(time);
    _rafId = requestAnimationFrame(rafLoop);
  }
}

/**
 * Initialize (or reinitialize) the Lenis instance.
 * Destroys any existing instance first to avoid duplicates on page navigation.
 * Fires `window:lenis:ready` after initialization.
 */
export function initLenis(): Lenis {
  if (_instance) {
    destroyLenis();
  }

  _instance = new Lenis({
    duration: 1.4,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: true, // Enable smooth inertia for touchpad & touch swipes
    anchors: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.8,
    respectReducedMotion: false, // Prevent OS settings from muting the animation
  });

  // Start the custom RAF loop
  _rafId = requestAnimationFrame(rafLoop);

  // Expose global reference on window.lenisInstance (window.lenis is used internally by Lenis for version metadata)
  (window as unknown as { lenisInstance: Lenis | null }).lenisInstance = _instance;

  // Signal to all components that Lenis is ready.
  window.dispatchEvent(new Event('lenis:ready'));

  return _instance;
}

/**
 * Destroy the Lenis instance (e.g. before Astro page swap).
 */
export function destroyLenis(): void {
  if (_rafId !== null) {
    cancelAnimationFrame(_rafId);
    _rafId = null;
  }
  if (_instance) {
    _instance.destroy();
    _instance = null;
  }
  (window as unknown as { lenisInstance: Lenis | null }).lenisInstance = null;
}
