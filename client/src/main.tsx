import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// ─── Global error suppression in production ───
if (import.meta.env.PROD) {
  // Suppress raw error messages from reaching the user console
  const prevOnerror = window.onerror;
  window.onerror = (msg, url, line, col, error) => {
    if (prevOnerror) prevOnerror(msg, url, line, col, error);
    // Prevent default browser error dialog
    return true;
  };

  // Suppress unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    event.preventDefault();
    // Silently swallow in production — ErrorBoundary handles React errors
  });
}

// Initialize MobileSDK (sets up --vh, battery, network listeners)
import { MobileSDK } from "./lib/mobile-sdk";
if (typeof window !== 'undefined') {
    (window as any).__mobileSDK = MobileSDK;
}

// Suppress "Download the React DevTools" message
if (import.meta.env.DEV) {
    const originalInfo = console.info;
    console.info = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes("Download the React DevTools")) {
            return;
        }
        originalInfo(...args);
    };
}

// Service Worker Registration - DISABLED FOR DEVELOPMENT
// The SW with skipWaiting/clients.claim causes reload loops in dev mode.
// To re-enable for production, uncomment the block below.
/*
if ('serviceWorker' in navigator && import.meta.env.PROD) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => console.log('SW registered: ', registration))
            .catch(error => console.log('SW registration failed: ', error));
    });
}
*/

// Force unregister any existing service workers to stop reload loops
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
            registration.unregister().then(() => {
                console.log('SW unregistered successfully');
            });
        }
    });
}

createRoot(document.getElementById("root")!).render(<App />);
