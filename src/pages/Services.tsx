import { motion } from "framer-motion";
import { TrendingUp, Target, Trophy, DollarSign, Users, History, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Papadi tsa Jaanong",
      description: "Live Betting - Place bets on ongoing matches",
      icon: TrendingUp,
      path: "/live-betting"
    },
    {
      title: "Metshameko e e Tumileng",
      description: "Popular Markets - Explore trending betting markets",
      icon: Target,
      path: "/popular-markets"
    },
    {
      title: "Dipapadi tsa Me",
      description: "My Bets - Track your active and settled bets",
      icon: Trophy,
      path: "/my-bets"
    },
    {
      title: "Madi a Me",
      description: "Wallet - Manage your deposits and withdrawals (BWP)",
      icon: DollarSign,
      path: "/wallet"
    },
    {
      title: "Papadi le Ditsala",
      description: "Peer Betting - Create and join betting pools with friends",
      icon: Users,
      path: "/peer-betting"
    },
    {
      title: "Ditso tsa Dipapadi",
      description: "Betting History - View your complete betting history",
      icon: History,
      path: "/betting-history"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Ditirelo</h1>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:bg-accent transition-colors"
                  onClick={() => navigate(service.path)}
                >
                  <CardHeader className="flex flex-row items-center justify-between p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-full bg-primary/10">
                        <service.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Services;