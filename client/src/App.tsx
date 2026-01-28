import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Lazy Load Pages
const Home = lazy(() => import("@/pages/home"));
const UploadPage = lazy(() => import("@/pages/upload"));
const AccessPage = lazy(() => import("@/pages/access"));
const DownloadPage = lazy(() => import("@/pages/download"));
const Success = lazy(() => import("@/pages/success"));
const NotFound = lazy(() => import("@/pages/not-found"));
const HowItWorksPage = lazy(() => import("@/pages/how-it-works"));
const TermsPage = lazy(() => import("@/pages/terms"));

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black/90 text-primary">
      <Loader2 className="w-10 h-10 animate-spin" />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/upload" component={UploadPage} />
      <Route path="/access" component={AccessPage} />
      <Route path="/v/:id" component={DownloadPage} />
      <Route path="/success/:id" component={Success} />
      <Route path="/how-it-works" component={HowItWorksPage} />
      <Route path="/terms" component={TermsPage} />
      {/* Fallback to 404 */}
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
