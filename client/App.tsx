import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SiteLayout from "@/components/layouts/SiteLayout";

const queryClient = new QueryClient();

const App = () => {
  // For custom domain (khalidibnfkih.dev), BASE_URL is '/' and basename should be undefined
  // For GitHub Pages repo path, BASE_URL would be '/MyPortfolio/' and basename should be '/MyPortfolio'
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={basename}>
          <SiteLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SiteLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
