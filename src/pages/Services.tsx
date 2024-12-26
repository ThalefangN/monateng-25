import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Target, Trophy, DollarSign, Users, History, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Live Betting",
      description: "Real-time odds and instant bet placement",
      icon: TrendingUp,
      path: "/driving-services"
    },
    {
      title: "Popular Markets",
      description: "Most active betting markets and events",
      icon: Target,
      path: "/permits"
    },
    {
      title: "Tournament Pools",
      description: "Join or create betting pools for major events",
      icon: Trophy,
      path: "/vehicle-registration"
    },
    {
      title: "Payment Services",
      description: "Multiple payment options for deposits/withdrawals",
      icon: DollarSign,
      path: "/road-tax"
    },
    {
      title: "Social Betting",
      description: "Bet and compete with friends",
      icon: Users,
      path: "/report-issue"
    },
    {
      title: "Statistics & Analysis",
      description: "Detailed betting history and performance analytics",
      icon: History,
      path: "/digital-id"
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
            <h1 className="text-2xl font-bold">Betting Services</h1>
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