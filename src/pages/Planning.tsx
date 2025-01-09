import { motion } from "framer-motion";
import { ClipboardCheck, Calendar, Users, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";

const Planning = () => {
  const planningSteps = [
    {
      title: "Choose Your Date",
      description: "Select the perfect date for your event",
      icon: Calendar,
      action: "Pick Date"
    },
    {
      title: "Select Venue",
      description: "Find and book the ideal venue",
      icon: MapPin,
      action: "Browse Venues"
    },
    {
      title: "Manage Attendees",
      description: "Plan your guest list and seating",
      icon: Users,
      action: "Add Guests"
    },
    {
      title: "Ticket Setup",
      description: "Configure ticket types and pricing",
      icon: Ticket,
      action: "Setup Tickets"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">Event Planning</h1>
          <p className="text-muted-foreground">Your step-by-step guide to planning the perfect event</p>

          <div className="grid gap-6 md:grid-cols-2">
            {planningSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-xl space-y-4"
                >
                  <Icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                  >
                    {step.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Planning;