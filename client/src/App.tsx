import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazy, Suspense, useState, useEffect } from "react";
import { Loader2 } from "lucide-react";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { useSEO } from "@/components/SEO";
import { generateSEOPages } from "@shared/seo-generator";
import { motion, AnimatePresence } from "framer-motion";

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
const BlogsPage = lazy(() => import("@/pages/blogs"));
const BlogPostPage = lazy(() => import("@/pages/blog-post"));

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
      <Route path="/v/:id" component={DownloadPage} />
      <Route path="/success/:id" component={SuccessPage} />
      <Route path="/how-it-works" component={HowItWorks} />
      <Route path="/get-it-mailed" component={GetItMailed} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/security" component={Security} />
      <Route path="/privacy-manifesto" component={PrivacyManifesto} />
      <Route path="/roadmap" component={Roadmap} />
      <Route path="/blog" component={BlogsPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />

      {/* Programmatically Generated SEO Routes */}
      {Object.keys(generateSEOPages()).map((slug) => (
        <Route key={slug} path={slug} component={SEOLandingPage} />
      ))}

      <Route component={NotFound} />
    </Switch>
  );
}

function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    // Keep splash screen visible for at least 1.8s for premium feel,
    // plus giving react time to initialize components
    const timer = setTimeout(onFinish, 1800);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] bg-[#09090b] flex flex-col items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_60%)] pointer-events-none" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 10 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center relative z-10"
      >
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(16, 185, 129, 0.2)",
              "0 0 0 20px rgba(16, 185, 129, 0)",
              "0 0 0 0 rgba(16, 185, 129, 0)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.1)] relative overflow-hidden"
        >
          {/* Shimmer effect inside logo container */}
          <motion.div
            animate={{ left: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg]"
          />
          <img src="/icon-192x192.png" alt="VaultBridge" className="w-12 h-12 sm:w-16 sm:h-16 object-contain relative z-10" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 text-2xl sm:text-3xl font-bold tracking-tight text-white font-['Inter',system-ui,sans-serif]"
        >
          VAULT<span className="text-primary">BRIDGE</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-2 text-zinc-500 text-sm tracking-widest uppercase font-medium"
        >
          Secure File Sharing
        </motion.p>

        {/* Dynamic Loading Bar */}
        <div className="mt-8 w-40 h-1 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1/2 h-full bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ErrorBoundary>
          <AnimatePresence mode="wait">
            {showSplash ? (
              <SplashScreen key="splash" onFinish={() => setShowSplash(false)} />
            ) : (
              <motion.div
                key="app"
                initial={{ opacity: 0, filter: "blur(5px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="min-h-screen bg-black text-white"
              >
                <Suspense fallback={<LoadingFallback />}>
                  <Router />
                </Suspense>
              </motion.div>
            )}
          </AnimatePresence>
        </ErrorBoundary>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
