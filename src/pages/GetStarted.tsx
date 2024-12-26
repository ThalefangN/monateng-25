import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] flex flex-col items-center justify-center p-4">
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
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
            BETCONNECT
          </h1>
          <p className="text-white/80">
            Your Ultimate Peer-to-Peer Betting Platform
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/30 to-[#D946EF]/30 z-10" />
          <img
            src="/lovable-uploads/photo-1488590528505-98d2b5aba04b"
            alt="BETCONNECT Banner"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className={`w-full bg-gradient-to-r from-[#D946EF] to-[#F97316] hover:opacity-90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signup">Create Account</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className={`w-full border-[#D946EF] text-white hover:bg-[#D946EF]/10 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>

        <p className="text-sm text-white/60">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>

        <div className="space-y-4 bg-black/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-white">Why Choose BETCONNECT?</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="space-y-1">
              <p className="text-[#D946EF] font-medium">Secure</p>
              <p className="text-sm text-white/60">Advanced encryption</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#F97316] font-medium">Fast</p>
              <p className="text-sm text-white/60">Instant payouts</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#D946EF] font-medium">P2P</p>
              <p className="text-sm text-white/60">Direct betting</p>
            </div>
            <div className="space-y-1">
              <p className="text-[#F97316] font-medium">24/7</p>
              <p className="text-sm text-white/60">Always available</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;