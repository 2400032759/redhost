import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import MVP from "./pages/MVP";
import Portfolio from "./pages/Portfolio";
import Quotation from "./pages/Quotation";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BackgroundAudio from "@/components/BackgroundAudio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BackgroundAudio>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/mvp" element={<MVP />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/quotation" element={<Quotation />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </BackgroundAudio>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
