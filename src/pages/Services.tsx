import { motion } from "framer-motion";
import { Calendar, Ticket, MapPin, Users, Building2, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: "Event Discovery",
      description: "Find and explore exciting events happening in Botswana",
      icon: Calendar,
      path: "/events"
    },
    {
      title: "Ticket Management",
      description: "Purchase and manage your event tickets",
      icon: Ticket,
      path: "/tickets"
    },
    {
      title: "Venue Discovery",
      description: "Explore event venues across Botswana",
      icon: MapPin,
      path: "/venues"
    },
    {
      title: "Event Community",
      description: "Connect with other event enthusiasts",
      icon: Users,
      path: "/community"
    },
    {
      title: "Event Organizer Portal",
      description: "Tools and resources for event organizers",
      icon: Building2,
      path: "/organizer/info"
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
            <h1 className="text-2xl font-bold">M CONNECT Services</h1>
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
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <div className="p-2 rounded-full bg-primary/10">
                      <service.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </div>
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