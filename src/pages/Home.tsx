import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, TrendingUp, Target, Trophy, DollarSign, Users, History, Wallet } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Live Betting",
      description: "Place bets on ongoing matches and events",
      icon: TrendingUp,
      path: "/driving-services"
    },
    {
      title: "Popular Markets",
      description: "Explore trending betting markets and odds",
      icon: Target,
      path: "/permits"
    },
    {
      title: "My Bets",
      description: "Track your active and settled bets",
      icon: Trophy,
      path: "/vehicle-registration"
    },
    {
      title: "Wallet",
      description: "Manage your deposits and withdrawals",
      icon: DollarSign,
      path: "/road-tax"
    },
    {
      title: "Peer Betting",
      description: "Create and join betting pools with friends",
      icon: Users,
      path: "/report-issue"
    },
    {
      title: "Betting History",
      description: "View your complete betting history",
      icon: History,
      path: "/digital-id"
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
              <h1 className="text-2xl font-bold">Welcome to BETCONNECT!</h1>
              <p className="text-muted-foreground">Your P2P betting platform</p>
            </div>
            <Button size="icon" variant="ghost" onClick={() => navigate("/profile")}>
              <Wallet className="h-6 w-6" />
            </Button>
          </div>

          <div className="bg-gradient-to-r from-[#D946EF] to-[#F97316] p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold">Balance</h2>
            <p className="text-3xl font-bold mt-2">$1,250.00</p>
            <div className="flex gap-2 mt-4">
              <Button variant="secondary" size="sm" className="flex-1">Deposit</Button>
              <Button variant="secondary" size="sm" className="flex-1">Withdraw</Button>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search markets, events..." />
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(service.path)}
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