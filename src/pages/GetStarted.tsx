import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Star, Ticket } from "lucide-react";

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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 md:p-8 lg:p-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4 col-span-full">
            <p className="text-sm font-medium">
              You are currently offline. Some features may be limited.
            </p>
          </div>
        )}

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
              MONATE CONNECT
            </h1>
            <p className="text-xl text-muted-foreground">
              Your Premier Event Booking Platform
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 text-foreground">
            <div className="text-center space-y-2 p-4 bg-card rounded-lg">
              <Calendar className="mx-auto h-8 w-8 text-primary" />
              <p className="text-sm">Event Planning</p>
            </div>
            <div className="text-center space-y-2 p-4 bg-card rounded-lg">
              <Users className="mx-auto h-8 w-8 text-primary" />
              <p className="text-sm">Community</p>
            </div>
            <div className="text-center space-y-2 p-4 bg-card rounded-lg">
              <Star className="mx-auto h-8 w-8 text-primary" />
              <p className="text-sm">Premium Events</p>
            </div>
            <div className="text-center space-y-2 p-4 bg-card rounded-lg">
              <Ticket className="mx-auto h-8 w-8 text-primary" />
              <p className="text-sm">Easy Booking</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              asChild 
              className={`w-full bg-primary hover:bg-primary/90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
              size="lg"
              onClick={handleAction}
            >
              <Link to="/signup">Start Booking Events</Link>
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
        </div>

        <div className="hidden md:block">
          <motion.div 
            className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl"
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
              alt="Monate Connect"
              className="object-cover w-full h-full"
            />
          </motion.div>
        </div>

        <div className="col-span-full space-y-4 bg-card/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-foreground text-center">Why Choose Monate Connect?</h2>
          <div className="grid md:grid-cols-4 gap-4 text-left">
            <div className="space-y-1">
              <p className="text-primary font-medium">24/7 Support</p>
              <p className="text-sm text-muted-foreground">Always here to help</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Secure Booking</p>
              <p className="text-sm text-muted-foreground">Safe transactions</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Premium Events</p>
              <p className="text-sm text-muted-foreground">Curated experiences</p>
            </div>
            <div className="space-y-1">
              <p className="text-primary font-medium">Community</p>
              <p className="text-sm text-muted-foreground">Connect with others</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;