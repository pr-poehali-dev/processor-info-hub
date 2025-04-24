
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/processors" element={<NotFound />} />
          <Route path="/processors/intel" element={<NotFound />} />
          <Route path="/processors/amd" element={<NotFound />} />
          <Route path="/processors/others" element={<NotFound />} />
          <Route path="/compare" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />
          <Route path="/articles" element={<NotFound />} />
          <Route path="/knowledge" element={<NotFound />} />
          <Route path="/market" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
