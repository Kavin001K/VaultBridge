import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertCircle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log to console for debugging (stripped in production builds)
        if (import.meta.env.DEV) {
            console.error("Uncaught error:", error, errorInfo);
        }
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;

            const isDev = import.meta.env.DEV;
            const message = isDev && this.state.error
                ? this.state.error.message
                : "Please refresh the page to continue.";

            return (
                <div className="min-h-screen w-full flex items-center justify-center bg-background p-4 safe-bottom">
                    <div className="max-w-sm w-full surface-card p-6 sm:p-8 text-center">
                        <div className="w-14 h-14 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-4">
                            <AlertCircle className="w-7 h-7 text-red-400" />
                        </div>
                        <h2 className="text-lg font-semibold text-white mb-1">Something went wrong</h2>
                        <p className="text-sm text-zinc-400 mb-5">{message}</p>

                        <button
                            onClick={() => { window.location.href = "/"; }}
                            className="btn-primary w-full py-2.5 text-sm rounded-xl"
                        >
                            <RefreshCw className="w-4 h-4" />
                            Reload
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
