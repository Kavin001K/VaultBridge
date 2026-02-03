import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useSEO } from "@/components/SEO";

// Lazy Load Pages
const Home = lazy(() => import("@/pages/home"));
const UploadPage = lazy(() => import("@/pages/upload"));
const AccessPage = lazy(() => import("@/pages/access"));
const DownloadPage = lazy(() => import("@/pages/download"));
const SuccessPage = lazy(() => import("@/pages/success"));
const NotFound = lazy(() => import("@/pages/not-found"));
const HowItWorks = lazy(() => import("@/pages/how-it-works"));
const Terms = lazy(() => import("@/pages/terms"));
const Privacy = lazy(() => import("@/pages/privacy"));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90 text-primary">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
}

function Router() {
  // Dynamic SEO based on current route
  useSEO();

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/upload" component={UploadPage} />
      <Route path="/access" component={AccessPage} />
      <Route path="/download/:id" component={DownloadPage} />
      <Route path="/success/:id" component={SuccessPage} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ErrorBoundary>
          <Suspense fallback={<LoadingFallback />}>
            <Router />
          </Suspense>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

