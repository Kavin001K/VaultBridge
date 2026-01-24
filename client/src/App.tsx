import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import UploadPage from "@/pages/upload";
import AccessPage from "@/pages/access";
import DownloadPage from "@/pages/download";
import Success from "@/pages/success";
import NotFound from "@/pages/not-found";
import HowItWorksPage from "@/pages/how-it-works";
import TermsPage from "@/pages/terms";

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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
