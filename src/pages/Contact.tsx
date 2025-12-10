import { useState } from "react";
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
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Linkedin, Clock, Globe } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
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
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Network error. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-[#FF2A45]/30 relative">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-primary font-orbitron tracking-widest text-xs uppercase">Hyderabad's #1 Agency</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-6 leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4D4D] to-[#B30000]">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground font-sans max-w-2xl mx-auto">
            Whether you have a question about features, pricing, or need a demo, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

            {/* Contact Info Side */}
            <div className="space-y-6 lg:col-span-1 animate-fade-in-up">
              {/* Office Card */}
              <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-2">Our Office</h3>
                <p className="text-muted-foreground font-sans">
                  Madhapur, Hyderabad<br />Telangana, India
                </p>
              </div>

              {/* Phone Card */}
              <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-2">Phone</h3>
                <p className="text-muted-foreground font-sans mb-2">
                  <a href="tel:+91905947128" className="hover:text-primary transition-colors">+91 90594 7128</a>
                </p>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground/80 bg-background/50 p-3 rounded">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 shrink-0" />
                    <span>Mon-Sat: 7:00 AM - 11:30 PM IST</span>
                  </div>
                  <div className="flex items-center gap-2 pl-6">
                    <span>Sun: 11:00 AM - 5:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="glass-card p-6 rounded-2xl border border-primary/20 hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-orbitron mb-2">Email</h3>
                <p className="text-muted-foreground font-sans space-y-1">
                  <a href="mailto:ceo@redhost.tech" className="block hover:text-primary transition-colors">ceo@redhost.tech</a>
                  <a href="mailto:contact@redhost.tech" className="block hover:text-primary transition-colors">contact@redhost.tech</a>
                </p>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-2 animate-fade-in-up delay-100">
              <div className="glass-card p-8 md:p-10 rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(var(--primary-rgb),0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />

                <h2 className="text-2xl font-bold font-orbitron mb-6 flex items-center gap-3">
                  <Send className="h-6 w-6 text-primary" />
                  Send a Message
                </h2>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-rajdhani">Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="font-rajdhani">Your Email</FormLabel>
                            <FormControl>
                              <Input placeholder="john@example.com" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-12" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-rajdhani">Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry / Support" {...field} className="bg-background/50 border-input/50 focus:border-primary/50 h-12" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-rajdhani">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="How can we help you today?"
                              className="min-h-[150px] bg-background/50 border-input/50 focus:border-primary/50 resize-none p-4"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" size="lg" className="w-full md:w-auto h-12 px-8 text-lg font-orbitron bg-gradient-to-r from-[#D92626] to-[#B30000] hover:from-[#FF4D4D] hover:to-[#CC0000] shadow-neon hover:shadow-neon-strong transition-all duration-300 border-none" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                      {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative border-t border-border/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-12">
            Meet The <span className="text-primary">Visionary</span>
          </h2>

          <div className="max-w-md mx-auto">
            <div className="glass-card p-8 rounded-3xl border border-primary/30 hover:shadow-[0_0_50px_rgba(var(--primary-rgb),0.15)] transition-all duration-500 group relative">
              {/* Image Container - Larger & Square for clarity */}
              <div className="w-64 h-64 mx-auto mb-8 p-1 bg-gradient-to-tr from-primary via-[#FF4D4D] to-primary rounded-2xl shadow-2xl">
                <div className="w-full h-full rounded-xl overflow-hidden border-2 border-black relative bg-black">
                  <img
                    src="https://image2url.com/images/1761627464421-354c2d68-7d79-4ed1-8316-29814b68a60e.jpg"
                    alt="Vishwas Gupta"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <h3 className="text-3xl font-bold font-orbitron mb-2">Kakkireni Vishwas</h3>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
                <p className="text-primary font-sans font-bold tracking-wide uppercase text-sm">Founder & CEO</p>
              </div>

              <p className="text-muted-foreground font-sans mb-8 text-lg leading-relaxed">
                "We don't just write code; we engineer digital legacies. I personally guarantee the excellence of every project we ship."
              </p>

              <a
                href="https://www.linkedin.com/in/vishwaskakkireni"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#0077b5] hover:bg-[#006396] text-white font-sans font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <Linkedin className="h-5 w-5" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;