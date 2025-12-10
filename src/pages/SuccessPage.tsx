import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Shield, Search, Rocket, LayoutDashboard, ArrowRight } from "lucide-react";

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const SuccessPage = () => {
    const [searchParams] = useSearchParams();
    const paymentId = searchParams.get("payment_id") || "PENDING_VERIFICATION";
    // In a real app, we would fetch the email from state or local storage
    const founderEmail = "ceo@redhost.tech";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#041F2E] font-sans selection:bg-[#FF2A45]/30">
            <Navigation />

            <div className="container mx-auto px-4 py-32">
                <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-[#FF4D4D]/20 shadow-[0_0_80px_rgba(220,38,38,0.15)] relative overflow-hidden">

                    {/* Green Pulse Confirmation */}
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-500/50 via-green-400 to-green-500/50" />
                    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-32 h-32 bg-green-500/10 rounded-full blur-[60px] pointer-events-none" />

                    {/* Header */}
                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-flex items-center justify-center p-3 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                            <CheckCircle2 className="w-8 h-8 text-green-500 animate-pulse" />
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold font-orbitron mb-4 text-white leading-tight">
                            Payment Confirmed — <br className="md:hidden" /> Your MVP Build Slot is Reserved
                        </h1>
                        <p className="text-lg text-muted-foreground/90 font-sans max-w-2xl mx-auto">
                            Your payment has been processed securely and your project is now protected under NDA with RedHost.
                        </p>
                    </div>

                    {/* Founder Status */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 relative z-10">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Shield className="w-5 h-5 text-[#FF4D4D]" />
                                <span className="font-bold text-white text-sm">NDA Activated</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Your idea is safe and confidential</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Search className="w-5 h-5 text-[#FF4D4D]" />
                                <span className="font-bold text-white text-sm">Engineering Review</span>
                            </div>
                            <p className="text-xs text-muted-foreground">Senior engineers will analyze your intake within 0–12 hours</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <Rocket className="w-5 h-5 text-[#FF4D4D]" />
                                <span className="font-bold text-white text-sm">Onboarding Call Next</span>
                            </div>
                            <p className="text-xs text-muted-foreground">You’ll receive a WhatsApp/Email link within 24 hours</p>
                        </div>
                    </div>

                    {/* Payment Summary Card */}
                    <div className="bg-[#02131D] rounded-xl p-6 border border-white/10 mb-10 relative z-10">
                        <h3 className="text-white font-bold font-orbitron mb-4 text-sm uppercase tracking-wider opacity-80">Payment Summary</h3>
                        <div className="space-y-3 text-sm font-sans">
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Plan</span>
                                <span className="text-white font-medium">MVP Launchpad</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Amount Paid</span>
                                <span className="text-white font-medium">₹4,999 <span className="text-xs text-muted-foreground">(Testing: ₹1)</span></span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Payment ID</span>
                                <span className="text-white font-medium font-mono text-xs md:text-sm">{paymentId}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/5 pb-2">
                                <span className="text-muted-foreground">Status</span>
                                <span className="text-green-500 font-medium">Auto-Captured</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">Email</span>
                                <span className="text-white font-medium">{founderEmail}</span>
                            </div>
                        </div>
                    </div>

                    {/* What Happens Next? */}
                    <div className="text-left mb-10 relative z-10">
                        <h3 className="text-xl font-bold font-orbitron mb-6 flex items-center gap-2 text-white">
                            🧭 What Happens Next?
                        </h3>
                        <div className="space-y-8 pl-3 border-l border-white/10 ml-2">
                            {[
                                { title: "Engineering Review (0–12 hours)", desc: "We map feasibility, architecture & execution plan." },
                                { title: "Onboarding Call (Within 24 hours)", desc: "You’ll receive a WhatsApp & email link to book your session." },
                                { title: "MVP Build Sprint Begins (Day 1–7)", desc: "Our engineering team starts development immediately after alignment." },
                            ].map((step, i) => (
                                <div key={i} className="relative pl-8">
                                    <span className="absolute -left-[6.5px] top-2 w-3 h-3 rounded-full bg-[#FF4D4D] border-2 border-[#041F2E]" />
                                    <h4 className="font-bold text-white text-base mb-1">{step.title}</h4>
                                    <p className="text-muted-foreground font-sans text-sm">{step.desc}</p>
                                </div>
                            ))}

                            {/* Deliverables */}
                            <div className="relative pl-8 pt-2">
                                <span className="absolute -left-[6.5px] top-4 w-3 h-3 rounded-full bg-green-500 border-2 border-[#041F2E]" />
                                <h4 className="font-bold text-white text-base mb-3">Deliverables</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                    {[
                                        "Production-ready MVP", "Admin dashboard", "Authentication",
                                        "Payment gateway integration", "1-month hosting", "Pitch deck template"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                        <Button className="w-full sm:w-auto h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] text-white shadow-lg shadow-green-500/20 border-none font-bold font-sans transition-all duration-300 transform hover:-translate-y-0.5">
                            <WhatsAppIcon className="w-5 h-5 mr-2" /> Join Founder WhatsApp Channel →
                        </Button>
                        <Link to="/" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full h-12 border-white/20 text-white hover:bg-white/10 font-sans">
                                <LayoutDashboard className="w-5 h-5 mr-2" /> View Your Founder Dashboard →
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessPage;
