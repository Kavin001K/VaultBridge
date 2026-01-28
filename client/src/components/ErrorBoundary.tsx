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
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) return this.props.fallback;

            return (
                <div className="min-h-screen w-full flex items-center justify-center bg-zinc-950 p-4">
                    <div className="max-w-md w-full bg-zinc-900 border border-red-900/50 rounded-2xl p-8 text-center shadow-2xl">
                        <div className="w-16 h-16 bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <AlertCircle className="w-8 h-8 text-red-500" />
                        </div>
                        <h2 className="text-2xl font-bold mb-2">Something went wrong</h2>
                        <p className="text-zinc-400 mb-6 text-sm">
                            We encountered an unexpected error. The application state has been captured.
                        </p>

                        <div className="p-4 bg-black/40 rounded-lg text-left mb-6 overflow-hidden">
                            <code className="text-xs text-red-300 font-mono break-words line-clamp-3">
                                {this.state.error?.message}
                            </code>
                        </div>

                        <Button
                            onClick={() => {
                                this.setState({ hasError: false });
                                window.location.href = "/";
                            }}
                            className="w-full bg-red-600 hover:bg-red-700 text-white"
                        >
                            <RefreshCw className="w-4 h-4 mr-2" />
                            Reload Application
                        </Button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
