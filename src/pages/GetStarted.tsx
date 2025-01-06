import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";
import { Brain, Heart, Sparkles } from "lucide-react";

const GetStarted = () => {
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const handleAction = () => {
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to proceed.",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#9b87f5] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm font-medium">
              You are currently offline. Some features may be limited.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-16 h-16 mx-auto text-[#6E59A5]" />
          </motion.div>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#7E69AB] to-[#6E59A5] text-transparent bg-clip-text">
            NALEDI AI
          </h1>
          <p className="text-[#222222]/80">
            Your Personal Mental Health Companion
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#D6BCFA]/30 to-[#9b87f5]/30 z-10" />
          <div className="relative z-20 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <Heart className="w-8 h-8 text-[#D946EF]" />
              <h3 className="text-xl font-semibold text-white">Mental Wellness Support</h3>
              <p className="text-white/80">24/7 AI-powered companion for your emotional well-being</p>
            </div>
            <Sparkles className="w-8 h-8 text-[#F97316]" />
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className={`w-full bg-gradient-to-r from-[#7E69AB] to-[#6E59A5] hover:opacity-90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signup">Create Account</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className={`w-full border-[#7E69AB] text-[#222222] hover:bg-[#7E69AB]/10 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>

        <p className="text-sm text-[#222222]/60">
          Your mental health journey begins here
        </p>

        <div className="space-y-4 bg-white/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-[#222222]">Why Choose Naledi AI?</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="space-y-1">
              <p className="text-[#7E69AB] font-medium">24/7 Support</p>
              <p className="text-sm text-[#222222]/60">Always here for you</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6E59A5] font-medium">Private</p>
              <p className="text-sm text-[#222222]/60">Secure chats</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#7E69AB] font-medium">AI-Powered</p>
              <p className="text-sm text-[#222222]/60">Smart assistance</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6E59A5] font-medium">Personalized</p>
              <p className="text-sm text-[#222222]/60">Tailored support</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;