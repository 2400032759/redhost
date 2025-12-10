import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Lock, Shield, Zap, Rocket, CheckCircle2, Terminal } from "lucide-react";
import { toast } from "sonner";

declare global {
    interface Window {
        Razorpay: any;
    }
}

const MVPPayment = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const initiateRazorpay = async () => {
        setLoading(true);

        try {
            // 1. Call Backend to Create Order
            let orderData = null;
            try {
                const res = await fetch("/api/create-order", { method: "POST" });
                const data = await res.json();
                if (res.ok && data.success) {
                    orderData = data.order;
                }
            } catch (err) {
                console.warn("Backend API not reachable. Using Client-Side Fallback.");
            }

            const options: any = {
                key: import.meta.env.VITE_RAZORPAY_KEY_ID,
                amount: orderData ? orderData.amount : 100, // Fallback amount (₹1.00)
                currency: "INR",
                name: "RedHost Technologies",
                description: "MVP Launchpad Slot",
                theme: { color: "#D92626" },
                handler: function (response: any) {
                    navigate(`/payment-success?payment_id=${response.razorpay_payment_id}`);
                },
                prefill: {
                    name: "Kakkireni Vishwas",
                    email: "ceo@redhost.tech",
                    contact: ""
                }
            };

            if (orderData) {
                options.order_id = orderData.id;
            }

            const rzp = new window.Razorpay(options);
            rzp.on('payment.failed', function (response: any) {
                toast.error("Payment Failed: " + response.error.description);
            });
            rzp.open();

        } catch (error) {
            console.error(error);
            toast.error("Unable to initiate payment. Backend API might be missing.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#041F2E] font-sans selection:bg-[#FF2A45]/30">
            <Navigation />

            <div className="container mx-auto px-4 py-24 md:py-32">

                {/* Trust Pills Row */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up">
                    {[
                        { icon: Lock, text: "NDA-Protected" },
                        { icon: Shield, text: "Secure Payment (Razorpay)" },
                        { icon: Zap, text: "Instant Slot Confirmation" },
                        { icon: Rocket, text: "MVP Delivered in 7–14 Days" },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-muted-foreground font-medium">
                            <item.icon className="w-3.5 h-3.5 text-[#FF4D4D]" />
                            {item.text}
                        </div>
                    ))}
                </div>

                {/* Title */}
                <div className="text-center mb-12 animate-fade-in-up delay-100">
                    <h1 className="text-3xl md:text-5xl font-bold font-orbitron mb-4 text-white">
                        Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">MVP Launchpad Slot</span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-sans">
                        Early-adopter pricing is available for a limited number of founders.
                    </p>
                </div>

                {/* Payment Card */}
                <div className="max-w-md mx-auto relative group animate-fade-in-up delay-200">
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#D92626] to-[#B30000] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="glass-card bg-[#041F2E] p-8 rounded-2xl border border-white/10 relative">

                        {/* Header */}
                        <div className="text-center border-b border-white/10 pb-6 mb-6">
                            <h2 className="text-xl font-bold font-orbitron text-white mb-2">MVP Launchpad</h2>
                            <div className="inline-block px-3 py-1 bg-[#FF4D4D]/10 rounded-full border border-[#FF4D4D]/20 text-xs text-[#FF4D4D] font-bold tracking-wider">
                                EARLY ADOPTER PRICING
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="flex items-end justify-between mb-8">
                            <div className="text-left">
                                <p className="text-sm text-muted-foreground line-through">Original Price</p>
                                <p className="text-xl text-muted-foreground">₹15,000</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-[#FF4D4D] font-bold mb-1">Today's Price</p>
                                <p className="text-4xl font-bold font-orbitron text-white">₹4,999</p>
                            </div>
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 mb-8">
                            <p className="text-sm font-bold text-white mb-2">What's Included:</p>
                            {[
                                "Production-ready MVP",
                                "Modern tech stack (Next.js / React / AI)",
                                "Admin panel & auth",
                                "Payment gateway integration",
                                "1-month hosting",
                                "Investor pitch deck template"
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                                    <CheckCircle2 className="w-4 h-4 text-[#FF4D4D] flex-shrink-0" />
                                    {feat}
                                </div>
                            ))}
                        </div>

                        {/* Security Note */}
                        <div className="flex items-center justify-center gap-2 bg-white/5 p-3 rounded-lg mb-8 border border-white/5">
                            <Lock className="w-4 h-4 text-[#FF4D4D]" />
                            <span className="text-xs font-medium text-muted-foreground">100% secured & NDA-protected session</span>
                        </div>

                        {/* Button */}
                        <Button
                            onClick={initiateRazorpay}
                            disabled={loading}
                            className="w-full h-14 bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-neon border-none font-orbitron text-lg"
                        >
                            {loading ? "Processing..." : "Proceed to Payment →"}
                        </Button>
                        <p className="text-center text-[10px] text-muted-foreground mt-3">
                            You will be redirected to Razorpay secure checkout.
                        </p>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default MVPPayment;
