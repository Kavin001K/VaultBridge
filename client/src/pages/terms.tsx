import { Link } from "wouter";
import { ArrowLeft, ShieldCheck, FileText, Ban } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
    return (
        <div className="min-h-screen relative overflow-hidden flex flex-col">
            {/* Background Effects */}
            <div className="fixed inset-0 grid-bg opacity-30" />

            {/* Header */}
            <header className="relative z-10 px-6 py-8">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-3 cursor-pointer">
                            <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30">
                                <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <h1 className="text-xl font-bold font-mono tracking-tight">
                                VAULT<span className="text-primary">BRIDGE</span>
                            </h1>
                        </div>
                    </Link>
                    <Link href="/">
                        <Button variant="ghost" className="gap-2">
                            <ArrowLeft className="w-4 h-4" />
                            Back Home
                        </Button>
                    </Link>
                </div>
            </header>

            <main className="relative z-10 flex-1 max-w-3xl mx-auto px-6 py-12">
                <div className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground">Last Updated: January 2025</p>
                </div>

                <div className="space-y-12 prose prose-invert max-w-none">
                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <ShieldCheck className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl font-bold m-0">1. Service Description</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            VaultBridge provides a secure, ephemeral file transfer service. We employ client-side encryption, meaning files are encrypted on your device before they reach our servers. We do not have the technical ability to view, decrypt, or access the contents of your files.
                        </p>
                    </section>

                    <section>
                        <div className="flex items-center gap-3 mb-4">
                            <Ban className="w-6 h-6 text-rose-400" />
                            <h2 className="text-2xl font-bold m-0">2. Prohibited Content</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            You agree not to upload, share, or transfer any of the following:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                            <li>Malware, viruses, or malicious software.</li>
                            <li>Child sexual abuse material (CSAM) or any illegal content.</li>
                            <li>Copyrighted material that you do not have the right to share.</li>
                            <li>Content that promotes violence, terrorism, or harassment.</li>
                        </ul>
                        <p className="text-muted-foreground mt-4 text-sm p-4 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                            Violation of these terms will result in immediate termination of access and reporting to relevant authorities if legally required.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">3. Data Retention</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            VaultBridge is an ephemeral service. Files are automatically deleted from our servers when:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-2">
                            <li>The expiration timer set by the uploader is reached (max 7 days).</li>
                            <li>The download limit set by the uploader is reached.</li>
                            <li>The user manually triggers deletion.</li>
                        </ul>
                        <p className="text-muted-foreground mt-2">
                            Once deleted, data is unrecoverable. We do not keep backups of user files.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4">4. Liability Disclaimer</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The service is provided "as is". Ace-Groups is not liable for any data loss, corruption, or damages arising from the use of this service. Users are responsible for maintaining their own backups of important data.
                        </p>
                    </section>
                </div>
            </main>

            <footer className="relative z-10 py-8 text-center border-t border-white/5 mt-12">
                <p className="text-xs text-muted-foreground/60">
                    © 2025 Ace-Groups. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
