import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useSEO } from "@/components/SEO";

import ClipboardPage from "@/pages/clipboard";

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
const GetItMailed = lazy(() => import("@/pages/get-it-mailed"));
const Security = lazy(() => import("@/pages/security"));
const PrivacyManifesto = lazy(() => import("@/pages/privacy-manifesto"));
const Roadmap = lazy(() => import("@/pages/roadmap"));
const SEOLandingPage = lazy(() => import("@/pages/seo-landing"));

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
  const [location] = useLocation();

  useEffect(() => {
    console.log("[Router Debug] Current location:", location);
  }, [location]);

  // MANUAL OVERRIDE: Force render /clipboard to bypass Switch matching issues
  if (location === "/clipboard" || location === "/clipboard/") {
    return <ClipboardPage />;
  }

  return (
    <Switch>
      <Route path="/clipboard">
        <ClipboardPage />
      </Route>
      <Route path="/" component={Home} />
      <Route path="/upload" component={UploadPage} />
      <Route path="/access" component={AccessPage} />
      <Route path="/download/:id" component={DownloadPage} />
      <Route path="/success/:id" component={SuccessPage} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/get-it-mailed" component={GetItMailed} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/security" component={Security} />
      <Route path="/privacy-manifesto" component={PrivacyManifesto} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/secure-file-sharing-free" component={SEOLandingPage} />
      <Route path="/encrypted-file-transfer" component={SEOLandingPage} />
      <Route path="/private-file-sharing" component={SEOLandingPage} />
      <Route path="/anonymous-file-sharing" component={SEOLandingPage} />
      <Route path="/free-encrypted-upload" component={SEOLandingPage} />
      <Route path="/send-files-securely" component={SEOLandingPage} />
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
