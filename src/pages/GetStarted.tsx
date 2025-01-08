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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
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
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            NALEDI AI
          </h1>
          <p className="text-muted-foreground">
            Your Personal Mental Health & Wellness Companion
          </p>
        </div>
        
        <motion.div 
          className="relative h-64 w-full rounded-2xl overflow-hidden shadow-xl"
          animate={{
            boxShadow: ["0 0 0 0px rgba(124, 58, 237, 0.1)", "0 0 0 4px rgba(124, 58, 237, 0.1)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <div className="absolute inset-0 bg-primary/10 z-10" />
          <img
            src="/lovable-uploads/3b3e62fd-4a43-43c0-b403-4de37b5a3f36.png"
            alt="Naledi AI Logo"
            className="object-contain w-full h-full bg-white p-8"
          />
        </motion.div>

        <div className="grid grid-cols-3 gap-4 text-foreground">
          <div className="text-center space-y-2">
            <Brain className="mx-auto h-8 w-8 text-primary" />
            <p className="text-sm">AI Support</p>
          </div>
          <div className="text-center space-y-2">
            <Heart className="mx-auto h-8 w-8 text-primary" />
            <p className="text-sm">Mental Wellness</p>
          </div>
          <div className="text-center space-y-2">
            <Shield className="mx-auto h-8 w-8 text-primary" />
            <p className="text-sm">Privacy First</p>
          </div>
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className={`w-full bg-primary hover:bg-primary/90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signup">Start Your Journey</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className={`w-full border-primary text-primary hover:bg-primary/10 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signin">Welcome Back</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          Your mental health journey begins here
        </p>

        <div className="space-y-4 bg-card/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-foreground">Why Choose Naledi AI?</h2>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div className="space-y-1">
              <p className="text-primary font-medium">24/7 Support</p>
              <p className="text-sm text-muted-foreground">Always here for you</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Private</p>
              <p className="text-sm text-muted-foreground">Secure chats</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">AI-Powered</p>
              <p className="text-sm text-muted-foreground">Smart assistance</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Personalized</p>
              <p className="text-sm text-muted-foreground">Tailored for you</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;