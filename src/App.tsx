import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import GetStarted from "./pages/GetStarted";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import OTPVerification from "./pages/OTPVerification";
import Home from "./pages/Home";
import Services from "./pages/Services";
import LiveBetting from "./pages/LiveBetting";
import PopularMarkets from "./pages/PopularMarkets";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import OrganizerInfo from "./pages/OrganizerInfo";
import OrganizerVerification from "./pages/OrganizerVerification";
import Events from "./pages/Events";

const App = () => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        retry: 1,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/get-started" replace />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/verify" element={<OTPVerification />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Events />} /> {/* Added Events route */}
            <Route path="/live-betting" element={<LiveBetting />} />
            <Route path="/popular-markets" element={<PopularMarkets />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/organizer/info" element={<OrganizerInfo />} />
            <Route path="/organizer/verify" element={<OrganizerVerification />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
