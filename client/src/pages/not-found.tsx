import { Link } from "wouter";
import { AlertTriangle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground">
      <div className="max-w-md text-center p-8 bg-card border border-border rounded-2xl shadow-2xl">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6 text-destructive">
          <AlertTriangle className="w-10 h-10" />
        </div>
        <h1 className="text-4xl font-bold mb-4 font-mono">404</h1>
        <p className="text-muted-foreground mb-8">
          This vault does not exist or has been securely wiped from our servers.
        </p>
        <Link href="/" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
          Return Home
        </Link>
      </div>
    </div>
  );
}
