import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Lock, Shield, Brain, Cog, Rocket, Globe, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    phone: z.string().min(10, { message: "Valid phone number required" }),
    role: z.string().min(1, { message: "Please select your role" }),
    projectName: z.string().optional(),
    description: z.string().min(10, { message: "Please describe your idea" }),
    ndaStatus: z.string().min(1, { message: "Please select NDA preference" }),
    techRequirements: z.array(z.string()).refine((value) => value.length > 0, {
        message: "Select at least one component",
    }),
    launchTimeline: z.string().min(1, { message: "Please select timeline" }),
    currentStage: z.string().min(1, { message: "Please select current stage" }),
    budget: z.string().min(1, { message: "Please select budget range" }),
});

const MVPIntake = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Kakkireni Vishwas",
            email: "ceo@redhost.tech",
            phone: "",
            role: "",
            projectName: "",
            description: "",
            ndaStatus: "",
            techRequirements: [],
            launchTimeline: "",
            currentStage: "",
            budget: "",
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setIsSubmitting(true);
        try {
            // Formspree or similar backend
            const response = await fetch("https://formspree.io/f/xvgvkzvk", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...values, source: "MVP Intake Form" }),
            });

            if (response.ok) {
                toast.success("Intake form submitted securely.");
                form.reset();
                setShowSuccess(true);
            } else {
                toast.error("Submission failed. Please try again.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Network error. Please try again.");
        }
        setIsSubmitting(false);
    };

    const techOptions = [
        "Web Application",
        "Mobile App",
        "Admin Dashboard",
        "Authentication System",
        "Payment Gateway",
        "AI/ML Features",
        "Real-time Features (chat, booking, tracking)",
        "API Integrations",
        "Custom Backend",
        "Cloud Deployment & DevOps",
        "Analytics / Reporting Panels",
    ];

    return (
        <div className="min-h-screen bg-[#041F2E] font-sans selection:bg-[#FF2A45]/30">
            <Navigation />

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-[100]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="glass-card p-8 rounded-2xl max-w-md text-center border border-[#FF4D4D]/20 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
                            <Shield className="w-16 h-16 text-[#FF4D4D] mx-auto mb-4 animate-pulse" />
                            <h2 className="text-2xl font-bold font-orbitron mb-4 text-white">Application Received</h2>
                            <p className="text-muted-foreground font-sans mb-8">
                                Your project is now under NDA protection. Our senior engineering consultants will review your intake and send your feasibility & execution roadmap within 24 hours.
                            </p>

                            <div className="space-y-3">
                                <Button
                                    onClick={() => {
                                        navigate("/mvp-payment");
                                    }}
                                    className="w-full h-12 bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-neon border-none font-orbitron"
                                >
                                    Proceed to Secure Your Slot - ₹4,999
                                </Button>
                                <Button
                                    onClick={() => setShowSuccess(false)}
                                    variant="ghost"
                                    className="w-full h-12 text-muted-foreground hover:text-white hover:bg-white/5 font-sans"
                                >
                                    Close
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12 animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF4D4D]/10 border border-[#FF4D4D]/20 mb-6">
                            <Lock className="w-3 h-3 text-[#FF4D4D]" />
                            <span className="text-xs font-bold text-[#FF4D4D] font-orbitron tracking-wider uppercase">NDA Protected Session</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold font-orbitron mb-6 leading-tight">
                            Founder Intake <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">RedHost Innovation Desk</span>
                        </h1>
                        <p className="text-lg text-muted-foreground/80 font-sans max-w-2xl mx-auto mb-5">
                            This detailed intake allows our engineering team to understand your feasibility and execution strategy before we discuss pricing.
                        </p>

                        {/* Benefits Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left bg-white/5 p-6 rounded-2xl border border-white/10 mb-12">
                            {[
                                { icon: Shield, text: "Enterprise-grade engineering" },
                                { icon: Brain, text: "Strategy + Execution under one roof" },
                                { icon: Cog, text: "Built using global standards (Next.js / AI)" },
                                { icon: Rocket, text: "Delivered in 7–14 days with precision" },
                                { icon: Globe, text: "Trusted globally by founders & teams" },
                                { icon: Lock, text: "NDA-Protected - Your idea is safe with us", highlight: true },
                            ].map((item, i) => (
                                <div key={i} className={`flex items-center gap-3 ${item.highlight ? 'text-[#FF4D4D]' : 'text-muted-foreground'}`}>
                                    <item.icon className="w-5 h-5 flex-shrink-0" />
                                    <span className="font-sans text-sm md:text-base font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="glass-card p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden animate-fade-in-up delay-100">
                        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#D92626] to-[#B30000]" />

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">

                                {/* Section 1 */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold font-orbitron border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className="text-[#FF4D4D]/70">01.</span> Founder Details
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="name" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Full Name</FormLabel>
                                                <FormControl><Input placeholder="Kakkireni Vishwas" {...field} className="bg-background/50 border-white/10 h-12" /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Business Email</FormLabel>
                                                <FormControl><Input placeholder="ceo@redhost.tech" {...field} className="bg-background/50 border-white/10 h-12" /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="phone" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>WhatsApp / Mobile</FormLabel>
                                                <FormControl><Input placeholder="+91 999 999 9999" {...field} className="bg-background/50 border-white/10 h-12" /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="role" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Your Role</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-background/50 border-white/10 h-12">
                                                            <SelectValue placeholder="Select Role" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="founder">Founder / CEO</SelectItem>
                                                        <SelectItem value="cto">CTO / Technical Partner</SelectItem>
                                                        <SelectItem value="pm">Product Manager</SelectItem>
                                                        <SelectItem value="solo">Solo Entrepreneur</SelectItem>
                                                        <SelectItem value="student">Student Entrepreneur</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>

                                {/* Section 2 */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold font-orbitron border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className="text-[#FF4D4D]/70">02.</span> Project Overview
                                    </h3>
                                    <div className="space-y-6">
                                        <FormField control={form.control} name="projectName" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Project / Startup Name (Optional)</FormLabel>
                                                <FormControl><Input placeholder="Project X" {...field} className="bg-background/50 border-white/10 h-12" /></FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="description" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>What are you trying to build?</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Example: A booking system, EdTech LMS, AI automation tool, marketplace MVP…" className="bg-background/50 border-white/10 min-h-[120px]" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="ndaStatus" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Is your idea under NDA?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-background/50 border-white/10 h-12">
                                                            <SelectValue placeholder="Select Privacy Level" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="yes_strict">Yes, please treat all details confidentially</SelectItem>
                                                        <SelectItem value="no_general">No, general information is fine</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>

                                {/* Section 3 */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold font-orbitron border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className="text-[#FF4D4D]/70">03.</span> Technical Requirements
                                    </h3>
                                    <FormField
                                        control={form.control}
                                        name="techRequirements"
                                        render={() => (
                                            <FormItem>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    {techOptions.map((item) => (
                                                        <FormField
                                                            key={item}
                                                            control={form.control}
                                                            name="techRequirements"
                                                            render={({ field }) => {
                                                                return (
                                                                    <FormItem
                                                                        key={item}
                                                                        className="flex flex-row items-center space-x-3 space-y-0 p-4 rounded-xl border border-white/5 bg-white/5 hover:border-[#FF4D4D]/30 transition-colors cursor-pointer"
                                                                    >
                                                                        <FormControl>
                                                                            <Checkbox
                                                                                checked={field.value?.includes(item)}
                                                                                onCheckedChange={(checked) => {
                                                                                    return checked
                                                                                        ? field.onChange([...field.value, item])
                                                                                        : field.onChange(
                                                                                            field.value?.filter(
                                                                                                (value) => value !== item
                                                                                            )
                                                                                        );
                                                                                }}
                                                                                className="border-white/20 data-[state=checked]:bg-[#FF4D4D] data-[state=checked]:text-white"
                                                                            />
                                                                        </FormControl>
                                                                        <FormLabel className="font-normal cursor-pointer w-full text-base">
                                                                            {item}
                                                                        </FormLabel>
                                                                    </FormItem>
                                                                );
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Section 4 */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold font-orbitron border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className="text-[#FF4D4D]/70">04.</span> Timeline & Readiness
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="launchTimeline" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>How soon are you planning to launch?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-background/50 border-white/10 h-12">
                                                            <SelectValue placeholder="Select Timeline" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="asap">ASAP (7-14 Days)</SelectItem>
                                                        <SelectItem value="1_month">Within 1 Month</SelectItem>
                                                        <SelectItem value="3_months">Within 3 Months</SelectItem>
                                                        <SelectItem value="planning">Just Planning</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="currentStage" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>What stage are you currently in?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-background/50 border-white/10 h-12">
                                                            <SelectValue placeholder="Current Stage" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="idea">Idea Stage</SelectItem>
                                                        <SelectItem value="wireframes">Wireframes Ready</SelectItem>
                                                        <SelectItem value="prototype">Prototype Ready</SelectItem>
                                                        <SelectItem value="rebuild">Existing product needing rebuild</SelectItem>
                                                        <SelectItem value="scale">Scaling an active product</SelectItem>
                                                        <SelectItem value="strategy">Need strategic direction</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>

                                {/* Section 5 */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold font-orbitron border-b border-white/10 pb-2 flex items-center gap-2">
                                        <span className="text-[#FF4D4D]/70">05.</span> Budget Alignment
                                    </h3>
                                    <FormField control={form.control} name="budget" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>What budget range are you comfortable with?</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-background/50 border-white/10 h-12">
                                                        <SelectValue placeholder="Select Budget Range" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="5k_10k">₹5,000 - ₹10,000</SelectItem>
                                                    <SelectItem value="10k_25k">₹10,000 – ₹25,000</SelectItem>
                                                    <SelectItem value="25k_50k">₹25,000 – ₹50,000</SelectItem>
                                                    <SelectItem value="50k_plus">₹50,000+</SelectItem>
                                                    <SelectItem value="unsure">Not sure yet</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )} />
                                </div>

                                <div className="pt-6">
                                    <Button type="submit" size="lg" className="w-full h-14 text-xl font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white shadow-neon border-none" disabled={isSubmitting}>
                                        {isSubmitting ? "Securing Spot..." : "Secure My Early-Adopter Spot"}
                                    </Button>
                                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground gap-2 border-t border-white/5 pt-4">
                                        <div className="flex items-center gap-2">
                                            <Lock className="w-3 h-3" />
                                            <span>NDA Protection Active - Your idea and data remain confidential.</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <CheckCircle2 className="w-3 h-3" />
                                            <span>Early-adopter slots are limited.</span>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </Form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MVPIntake;
