import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, MapPin, PartyPopper } from "lucide-react";

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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-3xl flex flex-col md:flex-row gap-8"
      >
        <div className="flex-1 space-y-8">
          {!isOnline && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
              <p className="text-sm font-medium">
                You are currently offline. Some features may be limited.
              </p>
            </div>
          )}

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
              MONATE CONNECT
            </h1>
            <p className="text-white/80 text-xl">
              Your Premier Event Booking Platform
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 text-white">
            <div className="text-center space-y-2">
              <Calendar className="mx-auto h-8 w-8 text-[#D946EF]" />
              <p className="text-sm">Easy Booking</p>
            </div>
            <div className="text-center space-y-2">
              <Users className="mx-auto h-8 w-8 text-[#F97316]" />
              <p className="text-sm">Event Management</p>
            </div>
            <div className="text-center space-y-2">
              <MapPin className="mx-auto h-8 w-8 text-[#8B5CF6]" />
              <p className="text-sm">Venue Selection</p>
            </div>
            <div className="text-center space-y-2">
              <PartyPopper className="mx-auto h-8 w-8 text-[#D946EF]" />
              <p className="text-sm">Event Planning</p>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              asChild 
              className={`w-full bg-gradient-to-r from-[#D946EF] to-[#F97316] hover:opacity-90 transition-opacity ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
              size="lg"
              onClick={handleAction}
            >
              <Link to="/signup">Start Booking Events</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              className={`w-full border-[#D946EF] text-white hover:bg-[#D946EF]/10 ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
              size="lg"
              onClick={handleAction}
            >
              <Link to="/signin">Welcome Back</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 space-y-8 bg-black/20 p-6 rounded-xl backdrop-blur-sm">
          <h2 className="text-2xl font-semibold text-white">Why Choose Monate Connect?</h2>
          <div className="grid gap-6 text-left">
            <div className="space-y-2">
              <p className="text-[#D946EF] font-medium">Seamless Booking Experience</p>
              <p className="text-sm text-white/60">Book your events with just a few clicks</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#F97316] font-medium">Professional Event Management</p>
              <p className="text-sm text-white/60">Expert support for your events</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#D946EF] font-medium">Diverse Venue Selection</p>
              <p className="text-sm text-white/60">Find the perfect venue for your event</p>
            </div>
            <div className="space-y-2">
              <p className="text-[#F97316] font-medium">Comprehensive Planning Tools</p>
              <p className="text-sm text-white/60">Everything you need to plan successful events</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default GetStarted;