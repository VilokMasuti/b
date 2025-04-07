import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
const queryClient = new QueryClient();


import { TooltipProvider } from "../src/components/ui/tooltip.tsx";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <Toaster />
    <App />
    </TooltipProvider>
    </QueryClientProvider>
  </StrictMode>,
)
