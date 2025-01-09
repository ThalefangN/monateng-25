import { motion } from "framer-motion";
import { Bell, Calendar, Ticket, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      title: "New Event Alert!",
      description: "Gaborone International Music Festival tickets are now available",
      icon: Calendar,
      type: "info",
      date: "2 hours ago"
    },
    {
      title: "Early Bird Tickets",
      description: "Get 20% off on early bird tickets for upcoming events",
      icon: Ticket,
      type: "success",
      date: "1 day ago"
    },
    {
      title: "New Venue Partner",
      description: "Welcome our new venue partner - Botswana National Stadium",
      icon: MapPin,
      type: "info",
      date: "2 days ago"
    },
    {
      title: "Community Update",
      description: "Join our growing community of event enthusiasts",
      icon: Users,
      type: "info",
      date: "3 days ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center justify-between"
        >
          <h1 className="text-2xl font-bold">M CONNECT Updates</h1>
          <Bell className="h-6 w-6 text-primary" />
        </motion.div>

        <div className="space-y-4">
          {notifications.map((notification, index) => (
            <motion.div
              key={notification.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="cursor-pointer hover:bg-accent transition-colors">
                <CardHeader className="flex flex-row items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    notification.type === 'info' ? 'bg-blue-100 text-blue-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    <notification.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg">{notification.title}</CardTitle>
                    <CardDescription>{notification.description}</CardDescription>
                    <p className="text-sm text-muted-foreground">{notification.date}</p>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Notifications;