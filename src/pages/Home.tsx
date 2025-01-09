import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, Brain, Heart, Smile, Moon, Sun, MessageCircle, History, User } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Talk to Naledi",
      description: "Start a conversation with your AI companion",
      icon: Brain,
      path: "/chat"
    },
    {
      title: "Mood Check",
      description: "Track and understand your daily emotions",
      icon: Heart,
      path: "/mood"
    },
    {
      title: "Meditation",
      description: "Guided sessions for peace and mindfulness",
      icon: Moon,
      path: "/meditation"
    },
    {
      title: "Daily Journal",
      description: "Record your thoughts and feelings",
      icon: Sun,
      path: "/journal"
    },
    {
      title: "Support Groups",
      description: "Connect with others on similar journeys",
      icon: MessageCircle,
      path: "/groups"
    },
    {
      title: "Progress",
      description: "View your wellness journey timeline",
      icon: History,
      path: "/progress"
    },
  ];

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
              <h1 className="text-2xl font-bold">Welcome to Naledi AI</h1>
              <p className="text-muted-foreground">Your mental wellness companion</p>
            </div>
            <Button size="icon" variant="ghost" onClick={() => navigate("/profile")}>
              <User className="h-6 w-6" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-[#D946EF] to-[#F97316] p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-4">
              <Smile className="h-8 w-8" />
              <div className="flex-1">
                <h2 className="text-xl font-bold">How are you feeling?</h2>
                <p className="text-sm opacity-90">Check in with yourself</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="secondary" size="sm" className="flex-1">Track Mood</Button>
              <Button variant="secondary" size="sm" className="flex-1">Start Chat</Button>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search wellness resources..." />
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
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;