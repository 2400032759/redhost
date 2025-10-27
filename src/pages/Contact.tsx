import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { Mail, MapPin, Phone, Send, Linkedin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
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
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    console.log("Contact form submitted:", values);
    toast.success("Message sent successfully! We'll get back to you soon.");
    form.reset();
  };

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <section className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 font-orbitron">
              Get In <span className="neon-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-rajdhani">
              Have questions? We're here to help. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4 shadow-glow">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-orbitron">Our Office</h3>
                <p className="text-muted-foreground font-rajdhani">
                  Hyderabad, Telangana<br />
                  India
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4 shadow-glow">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-orbitron">Phone</h3>
                <p className="text-muted-foreground font-rajdhani">
                  +91 90594 7128<br />
                  Mon-Sat: 7am - 11pm IST<br/>
                  Sunday: 11am - 5pm IST
                </p>
              </div>

              <div className="glass-card p-6 rounded-lg hover:shadow-neon transition-all duration-300">
                <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-4 shadow-glow">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2 font-orbitron">Email</h3>
                <p className="text-muted-foreground font-rajdhani">
                  ceo@redhost.tech<br />
                  contact@redhost.tech
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-card p-8 rounded-lg shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Vishwas Gupta" {...field} />
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
                          <FormLabel>Your Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="vishwas@redhost.tech" {...field} />
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
                        <FormLabel>Subject *</FormLabel>
                        <FormControl>
                          <Input placeholder="How can we help you?" {...field} />
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
                        <FormLabel>Message *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your inquiry..."
                            className="min-h-[200px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    Send Message
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our <span className="bg-gradient-primary bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind Redhost
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Team Member 1 */}
            <div className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 text-center animate-fade-in-up">
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">KV</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Kakkireni Vishwas</h3>
              <p className="text-muted-foreground mb-4">Founder & CEO</p>
              <a 
                href="https://www.linkedin.com/in/vishwaskakkireni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span><b>Connect on LinkedIn</b></span>
              </a>
            </div>

            {/* Team Member 2 */}
            <div className="bg-card p-8 rounded-lg shadow-elegant hover:shadow-glow transition-all duration-300 text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-primary-foreground">AM</span>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-accent">Alluri Sai Surya Manoj</h3>
              <p className="text-muted-foreground mb-4">Co-Founder & COO</p>
              <a 
                href="https://www.linkedin.com/in/alluri-sai-surya-manoj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span><b>Connect on LinkedIn</b></span>
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