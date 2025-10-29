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
import { Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
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
      email: "",
      phone: "",
      plan: "",
      projectType: "",
      message: "",
    },
  });

  const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xvgvkzvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        toast.success("Quote request submitted successfully!");
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
    <div className="min-h-screen relative">
  <Navigation scrollToTopOnGetStarted />

      {/* ✅ Success Animation */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-md z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-card neon-border text-center rounded-2xl p-8 shadow-neon max-w-sm"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4, type: 'spring' }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
              >
                <CheckCircle2 className="mx-auto text-primary w-16 h-16 mb-4 animate-pulse" />
              </motion.div>
              <h2 className="text-2xl font-orbitron mb-2 neon-text">Thank you!</h2>
              <p className="text-muted-foreground font-rajdhani">
                Quote submitted successfully.<br />Our team will contact you within 24 hours.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Hero Section */}
      <section className="py-8 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-1/4 h-1/4 circuit-pattern opacity-10 scale-[0.7]" style={{ backgroundSize: '400px 400px' }} />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            <div className="inline-block p-4 glass-card rounded-full mb-4 animate-float">
              <Send className="h-12 w-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold font-orbitron mb-4">
              Get Your Website Live - <span className="neon-text">Let’s Build Your Online Presence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Tell us what you need below - our team will plan, design and quote your project within 24 hours.
            </p>
            <motion.div
              className="flex justify-center mt-10"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <button
                onClick={handleScrollToForm}
                className="relative px-8 py-5 rounded-xl glass-card neon-border shadow-neon font-rajdhani text-lg text-primary-foreground bg-background/80 hover:brightness-110 transition-all duration-300 cursor-pointer"
                style={{ outline: 'none', border: 'none' }}
              >
                <span className="block font-semibold text-lg">
                  Get Instant Quote ↓
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ✅ Form Section */}
      <section ref={formRef} className="py-20 bg-muted/30 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto glass-card p-8 rounded-lg shadow-neon-strong border-primary/30 animate-fade-in-up">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Full Name */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-rajdhani text-lg">Full Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Vishwas Gupta"
                          {...field}
                          className="neon-border bg-background/50 font-rajdhani"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-rajdhani text-lg">Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="vishwas@redhost.tech"
                            {...field}
                            className="neon-border bg-background/50 font-rajdhani"
                          />
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
                        <FormLabel className="font-rajdhani text-lg">Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="+91 98765 43210"
                            {...field}
                            className="neon-border bg-background/50 font-rajdhani"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Plan & Project Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-rajdhani text-lg">Select Plan *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="neon-border bg-background/50 font-rajdhani">
                              <SelectValue placeholder="Choose a plan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="glass-card">
                            <SelectItem value="standard">Standard - ₹5,999</SelectItem>
                            <SelectItem value="gold">Gold - ₹7,999</SelectItem>
                            <SelectItem value="platinum">Platinum - ₹14,999</SelectItem>
                            <SelectItem value="mvp">MVP Builder - ₹4,999*</SelectItem>
                            <SelectItem value="portfolio">Portfolio - ₹1,499*</SelectItem>
                            <SelectItem value="custom">Custom Plan</SelectItem>
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
                        <FormLabel className="font-rajdhani text-lg">Project Type *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="neon-border bg-background/50 font-rajdhani">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="glass-card">
                            <SelectItem value="business">Business Website</SelectItem>
                            <SelectItem value="ecommerce">E-commerce</SelectItem>
                            <SelectItem value="portfolio">Portfolio</SelectItem>
                            <SelectItem value="blog">Blog</SelectItem>
                            <SelectItem value="landing">Landing Page</SelectItem>
                            <SelectItem value="mvp">MVP/Startup</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Message */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-rajdhani text-lg">Project Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project, requirements, and any specific features you need..."
                          className="min-h-[150px] neon-border bg-background/50 font-rajdhani"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  className="w-full animate-neon-pulse"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Get Your Free Quote"}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </Form>

            <p className="text-sm text-muted-foreground text-center mt-6 font-rajdhani">
              We'll review your request and get back to you within 24 hours with a detailed quote.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Quotation;
