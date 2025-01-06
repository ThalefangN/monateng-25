import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Brain, Heart, Sparkles, Sun, Moon, MessageCircle, Activity, Bell, Settings } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const currentHour = new Date().getHours();
  const greeting = currentHour < 12 ? "Morning" : currentHour < 18 ? "Afternoon" : "Evening";
  
  const features = [
    {
      title: "Talk to Naledi",
      description: "Start a conversation with your AI companion",
      icon: MessageCircle,
      path: "/chat"
    },
    {
      title: "Daily Check-in",
      description: "Track your mood and mental well-being",
      icon: Activity,
      path: "/check-in"
    },
    {
      title: "Meditation",
      description: "Guided sessions for peace of mind",
      icon: Brain,
      path: "/meditation"
    },
    {
      title: "Journal",
      description: "Write down your thoughts and feelings",
      icon: Heart,
      path: "/journal"
    },
    {
      title: "Emergency Support",
      description: "Get immediate help when needed",
      icon: Sparkles,
      path: "/emergency"
    },
    {
      title: "Community",
      description: "Connect with others on similar journeys",
      icon: Heart,
      path: "/community"
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#9b87f5] pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-[#222222]">Good {greeting}, Kabo!</h1>
              <p className="text-[#222222]/60">How are you feeling today?</p>
            </div>
            <Button size="icon" variant="ghost" onClick={() => navigate("/notifications")}>
              <Bell className="h-6 w-6 text-[#6E59A5]" />
            </Button>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl text-[#222222]">
            <div className="flex items-center space-x-4 mb-4">
              {currentHour < 18 ? (
                <Sun className="h-8 w-8 text-[#F97316]" />
              ) : (
                <Moon className="h-8 w-8 text-[#6E59A5]" />
              )}
              <div>
                <h2 className="text-lg font-semibold">Daily Quote</h2>
                <p className="text-[#222222]/60 text-sm">"Small steps lead to big changes"</p>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm" className="flex-1 border-[#7E69AB]/30 hover:bg-[#7E69AB]/10">
                Start Session
              </Button>
              <Button variant="outline" size="sm" className="flex-1 border-[#7E69AB]/30 hover:bg-[#7E69AB]/10">
                Quick Check-in
              </Button>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-[#222222]/60" />
          <Input className="pl-10 bg-white/50 border-[#7E69AB]/30" placeholder="Type a message to Naledi..." />
        </div>

        <div className="grid gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4 hover:bg-white/30 transition-colors cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <feature.icon className="h-8 w-8 text-[#6E59A5]" />
              <div>
                <h3 className="font-semibold text-[#222222]">{feature.title}</h3>
                <p className="text-sm text-[#222222]/60">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;