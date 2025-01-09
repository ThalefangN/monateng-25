import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, User, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Gaborone International Music Festival",
      description: "Experience the biggest music festival in Botswana featuring top local and international artists.",
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
      artists: ["Black Coffee", "Cassper Nyovest", "Vee Mampeezy"],
      venue: "National Stadium, Gaborone",
      date: "2024-06-15",
      time: "14:00",
      price: "P500"
    },
    {
      id: 2,
      title: "Francistown Arts Festival",
      description: "A celebration of arts, culture and music in the heart of Francistown.",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      artists: ["ATI", "Han C", "Charma Gal"],
      venue: "Francistown Sports Complex",
      date: "2024-07-20",
      time: "12:00",
      price: "P350"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">Upcoming Events</h1>
          <p className="text-muted-foreground">Discover amazing events happening in Botswana</p>

          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl overflow-hidden"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">{event.title}</h2>
                  <p className="text-muted-foreground">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      <p>Artists: {event.artists.join(", ")}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p>{event.venue}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <p>{new Date(event.date).toLocaleDateString()} at {event.time}</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                    onClick={() => navigate(`/tickets/${event.id}`)}
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Get Tickets
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;