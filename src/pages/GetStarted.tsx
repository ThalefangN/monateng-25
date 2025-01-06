import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";
import { Brain, Heart, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#D3E4FD] flex flex-col items-center justify-center p-4">
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
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-transparent bg-clip-text">
            NALEDI AI
          </h1>
          <p className="text-gray-600">
            Your Personalized Mental Health & Wellness Companion
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl bg-white/30 backdrop-blur-sm p-6">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E5DEFF]/30 to-[#D3E4FD]/30 z-10" />
          <div className="relative z-20 h-full flex flex-col justify-center space-y-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center space-y-2">
                <Brain className="h-8 w-8 text-[#6366F1]" />
                <p className="text-sm font-medium text-gray-700">AI-Powered Support</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Heart className="h-8 w-8 text-[#8B5CF6]" />
                <p className="text-sm font-medium text-gray-700">Mental Wellness</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Shield className="h-8 w-8 text-[#6366F1]" />
                <p className="text-sm font-medium text-gray-700">Private & Secure</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className={`w-full bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] hover:opacity-90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signup">Create Account</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className={`w-full border-[#6366F1] text-[#6366F1] hover:bg-[#6366F1]/10 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>

        <p className="text-sm text-gray-600">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>

        <div className="space-y-4 bg-white/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-800">Why Choose Naledi AI?</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="space-y-1">
              <p className="text-[#6366F1] font-medium">Private</p>
              <p className="text-sm text-gray-600">End-to-end encryption</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#8B5CF6] font-medium">24/7 Support</p>
              <p className="text-sm text-gray-600">Always here for you</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#6366F1] font-medium">AI-Powered</p>
              <p className="text-sm text-gray-600">Personalized care</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#8B5CF6] font-medium">Inclusive</p>
              <p className="text-sm text-gray-600">Cultural awareness</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;