import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, Calendar, Ticket, MapPin, Users, ClipboardCheck, Building2, ChevronRight, User } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const services = [
    {
      title: "Browse Events",
      description: "Browse and book upcoming events",
      icon: Calendar,
      path: "/events"
    },
    {
      title: "Ticket Management",
      description: "View and manage your event tickets",
      icon: Ticket,
      path: "/tickets"
    },
    {
      title: "Venue Discovery",
      description: "Find perfect venues for your events",
      icon: MapPin,
      path: "/venues"
    },
    {
      title: "Event Planning",
      description: "Tools and resources for event planning",
      icon: ClipboardCheck,
      path: "/planning"
    },
    {
      title: "Community Events",
      description: "Connect with event enthusiasts",
      icon: Users,
      path: "/community"
    }
  ];

  const handleCreateEvent = () => {
    toast({
      title: "Not Registered as Event Organizer",
      description: "Please scroll to the bottom of the page to request verification as an event organizer.",
      variant: "destructive",
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome to M CONNECT</h1>
              <p className="text-muted-foreground">Your premier event booking platform</p>
            </div>
            <Button size="icon" variant="ghost" onClick={() => navigate("/profile")}>
              <User className="h-6 w-6" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-[#D946EF] to-[#F97316] p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="h-8 w-8" />
              <div className="flex-1">
                <h2 className="text-xl font-bold">Discover Events</h2>
                <p className="text-sm opacity-90">Find and book amazing events</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="secondary" size="sm" className="flex-1" onClick={() => navigate("/events")}>
                Browse Events
              </Button>
              <Button 
                variant="secondary" 
                size="sm" 
                className="flex-1 opacity-50 cursor-not-allowed"
                onClick={handleCreateEvent}
              >
                Create Event
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search events, venues, or organizers..." />
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: services.length * 0.1 }}
          >
            <div className="bg-accent/50 p-6 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Are you an Event Organizer?</h3>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">Get verified and start hosting events on M CONNECT</p>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={() => navigate("/organizer/info")}
                >
                  Get Information
                </Button>
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                  onClick={() => navigate("/organizer/verify")}
                >
                  Get Verified
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;