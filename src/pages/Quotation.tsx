import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Send, CheckCircle2, ShieldCheck, Clock, Zap, MessageSquare, PhoneCall } from "lucide-react";
import { Testimonials } from "@/components/Testimonials";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  company: z.string().min(2, { message: "Company name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  plan: z.string().min(1, { message: "Please select a plan" }),
  projectType: z.string().min(1, { message: "Please select a project type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Quotation = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef<HTMLDivElement | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      plan: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xvgvkzvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Strategy call request submitted successfully!");
        form.reset();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Network issue. Try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30 relative">
      <Navigation />

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card neon-border text-center rounded-2xl p-8 shadow-neon max-w-sm mx-4"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <CheckCircle2 className="mx-auto text-primary w-20 h-20 mb-6 animate-pulse" />
              <h2 className="text-3xl font-orbitron mb-2 text-white">Received!</h2>
              <p className="text-muted-foreground font-sans text-lg">
                We'll analyze your requirements and reach out to schedule your call within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content Split Layout */}
      <div className="pt-20 md:pt-24 pb-12 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-1/2 bg-primary/5 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start animate-fade-in">

            {/* Left Column: Context & Value */}
            <div className="space-y-6 lg:sticky lg:top-24">
              <div className="inline-block px-4 py-1 rounded-full border border-primary/30 bg-primary/10">
                <span className="text-primary font-orbitron tracking-widest text-[10px] md:text-xs uppercase">Free Strategy</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold font-orbitron leading-tight">
                Book Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">Free Strategy Call.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-sans leading-relaxed max-w-lg">
                Ready to transform your digital presence? Fill out the form, and our team will prepare a tailored growth plan for you.
              </p>

              {/* Features: Compact on mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 md:gap-4 pt-2 md:pt-4">
                <div className="flex flex-col md:flex-row gap-3 items-center md:items-start p-3 md:p-4 rounded-xl bg-card/30 border border-border/50 text-center md:text-left">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-orbitron text-sm md:text-base mb-0.5">30-Min Call</h3>
                    <p className="hidden md:block text-sm text-muted-foreground font-sans">Actionable insights.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-center md:items-start p-3 md:p-4 rounded-xl bg-card/30 border border-border/50 text-center md:text-left">
                  <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-orbitron text-sm md:text-base mb-0.5">No Pressure</h3>
                    <p className="hidden md:block text-sm text-muted-foreground font-sans">Just value.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-center md:items-start p-3 md:p-4 rounded-xl bg-card/30 border border-border/50 text-center md:text-left">
                  <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-orbitron text-sm md:text-base mb-0.5">Rapid Scale</h3>
                    <p className="hidden md:block text-sm text-muted-foreground font-sans">Built for growth.</p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-3 items-center md:items-start p-3 md:p-4 rounded-xl bg-card/30 border border-border/50 text-center md:text-left">
                  <MessageSquare className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                  <div>
                    <h3 className="font-bold font-orbitron text-sm md:text-base mb-0.5">Free Consult</h3>
                    <p className="hidden md:block text-sm text-muted-foreground font-sans">Strategy included.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: The Form - Preserved Desktop, Optimized Mobile */}
            <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)]">
              <h2 className="text-xl md:text-2xl font-bold font-orbitron mb-6 flex items-center gap-3">
                <PhoneCall className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                Book Strategy Call
              </h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Company Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your Company" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@company.com" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="+91 ..." {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <FormField
                      control={form.control}
                      name="plan"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Interested Service</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base">
                                <SelectValue placeholder="Select Service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="standard">Web Design (Standard)</SelectItem>
                              <SelectItem value="gold">Web Design (Gold)</SelectItem>
                              <SelectItem value="platinum">Web Design (Platinum)</SelectItem>
                              <SelectItem value="mvp">MVP Development</SelectItem>
                              <SelectItem value="app">Mobile App</SelectItem>
                              <SelectItem value="growth">Growth Strategy</SelectItem>
                              <SelectItem value="custom">Custom Requirement</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="projectType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-sans">Business Type</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-background/50 border-input/50 focus:border-primary/50 h-10 md:h-12 text-base">
                                <SelectValue placeholder="Select Type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="business">Corporate / Business</SelectItem>
                              <SelectItem value="ecommerce">E-Commerce</SelectItem>
                              <SelectItem value="startup">Startup / SaaS</SelectItem>
                              <SelectItem value="consulting">Consulting / Agency</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-sans">What should we discuss?</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Briefly describe your goals..."
                            className="min-h-[120px] bg-background/50 border-input/50 focus:border-primary/50 resize-none text-base p-3 md:p-4"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full h-12 md:h-14 text-lg font-orbitron shadow-neon hover:shadow-neon-strong transition-all duration-300 rounded-xl bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] text-white border-none" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="animate-pulse">Scheduling...</span>
                    ) : (
                      <>
                        Book Strategy Call <PhoneCall className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <section className="py-12 bg-background/50 relative border-t border-border/50">
        <div className="container mx-auto px-4 mb-8 text-center">
          <h3 className="text-xl font-orbitron opacity-70">Trusted by Industry Leaders</h3>
        </div>
        <div className="container mx-auto px-4">
          <Testimonials />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quotation;
