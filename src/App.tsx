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
import OurProjects from "./pages/OurProjects";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";
import BackgroundAudio from "@/components/BackgroundAudio";

import MVPIntake from "./pages/MVPIntake";
import MVPPayment from "./pages/MVPPayment";
import SuccessPage from "./pages/SuccessPage";

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
            <Route path="/mvp-intake" element={<MVPIntake />} />
            <Route path="/mvp-payment" element={<MVPPayment />} />
            <Route path="/payment-success" element={<SuccessPage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/projects" element={<OurProjects />} />
            {/* legacy route: redirect to /projects */}
            <Route path="/our-projects" element={<Navigate to="/projects" replace />} />
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
