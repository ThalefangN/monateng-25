import { motion } from "framer-motion";
import { Brain, Heart, Smile, Moon, MessageCircle, Shield, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Mental Health Chat",
      description: "Talk to our AI about your feelings and thoughts",
      icon: Brain,
      path: "/chat"
    },
    {
      title: "Mood Tracking",
      description: "Track and understand your daily emotions",
      icon: Heart,
      path: "/mood"
    },
    {
      title: "Guided Meditation",
      description: "Find peace with AI-guided meditation sessions",
      icon: Moon,
      path: "/meditation"
    },
    {
      title: "Support Groups",
      description: "Connect with others on similar journeys",
      icon: MessageCircle,
      path: "/groups"
    },
    {
      title: "Crisis Support",
      description: "24/7 emergency mental health assistance",
      icon: Shield,
      path: "/crisis"
    },
    {
      title: "Wellness Tips",
      description: "Daily mental health and wellness advice",
      icon: Smile,
      path: "/tips"
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
            <h1 className="text-2xl font-bold">Mental Health Services</h1>
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