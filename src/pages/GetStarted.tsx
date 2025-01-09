import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Star, Shield } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl space-y-8 text-center"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm font-medium">
              You are currently offline. Some features may be limited.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-500 text-transparent bg-clip-text">
            MONATE CONNECT
          </h1>
          <p className="text-xl text-muted-foreground">
            Your Premier Event Booking & Management Platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl"
            animate={{
              boxShadow: ["0 0 0 0px hsl(var(--primary))", "0 0 0 4px hsl(var(--primary))"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-purple-500/30 z-10" />
            <img
              src="/lovable-uploads/3b3e62fd-4a43-43c0-b403-4de37b5a3f36.png"
              alt="Monate Connect"
              className="object-cover w-full h-full"
            />
          </motion.div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6 text-foreground">
              <div className="text-center space-y-3 p-6 rounded-xl bg-secondary/10">
                <Calendar className="mx-auto h-10 w-10 text-primary" />
                <h3 className="font-semibold">Event Planning</h3>
                <p className="text-sm text-muted-foreground">Seamless booking and management</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-xl bg-secondary/10">
                <Users className="mx-auto h-10 w-10 text-primary" />
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">Connect with attendees</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-xl bg-secondary/10">
                <Star className="mx-auto h-10 w-10 text-primary" />
                <h3 className="font-semibold">Premium Events</h3>
                <p className="text-sm text-muted-foreground">Curated experiences</p>
              </div>
              <div className="text-center space-y-3 p-6 rounded-xl bg-secondary/10">
                <Shield className="mx-auto h-10 w-10 text-primary" />
                <h3 className="font-semibold">Secure Booking</h3>
                <p className="text-sm text-muted-foreground">Safe and reliable</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button 
                asChild 
                className={`w-full text-lg py-6 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
                size="lg"
                onClick={handleAction}
              >
                <Link to="/signup">Start Booking Events</Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                className={`w-full text-lg py-6 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
                size="lg"
                onClick={handleAction}
              >
                <Link to="/signin">Sign In to Your Account</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12 bg-secondary/10 p-8 rounded-xl backdrop-blur-sm">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Why Choose Monate Connect?</h2>
            <p className="text-muted-foreground">Your all-in-one event booking solution</p>
          </div>
          <div className="space-y-4 md:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <p className="text-primary font-medium">Easy Booking</p>
                <p className="text-sm text-muted-foreground">Simple and quick process</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">Secure Payments</p>
                <p className="text-sm text-muted-foreground">Safe transactions</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">Event Management</p>
                <p className="text-sm text-muted-foreground">Full control over your events</p>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-medium">24/7 Support</p>
                <p className="text-sm text-muted-foreground">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;