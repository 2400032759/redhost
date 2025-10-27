import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Send } from "lucide-react";

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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    console.log("Form submitted:", values);
    toast.success("Quote request submitted successfully! We'll get back to you within 24 hours.");
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-orbitron">
              Get Your Custom Quote in <span className="neon-text">Japanese Precision</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Fill out the form below and we'll send you a personalized quote within 24 hours
            </p>
          </div>

          <div className="max-w-2xl mx-auto glass-card p-8 rounded-lg shadow-neon-strong border-primary/30 animate-fade-in-up">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
