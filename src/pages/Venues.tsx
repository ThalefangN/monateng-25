import { motion } from "framer-motion";
import { MapPin, Building2, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Venues = () => {
  const venues = [
    {
      id: 1,
      name: "National Stadium",
      location: "Gaborone",
      capacity: "22,000",
      description: "Botswana's largest multi-purpose stadium",
      image: "https://images.unsplash.com/photo-1577223625816-7546f13df25d"
    },
    {
      id: 2,
      name: "Francistown Sports Complex",
      location: "Francistown",
      capacity: "15,000",
      description: "Modern sports and events complex",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819"
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
          <h1 className="text-3xl font-bold">Discover Venues</h1>
          <p className="text-muted-foreground">Find the perfect venue for your event</p>

          <div className="grid gap-6 md:grid-cols-2">
            {venues.map((venue) => (
              <motion.div
                key={venue.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-xl overflow-hidden"
              >
                <img
                  src={venue.image}
                  alt={venue.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <h2 className="text-2xl font-bold">{venue.name}</h2>
                  <p className="text-muted-foreground">{venue.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <p>{venue.location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-primary" />
                      <p>Capacity: {venue.capacity}</p>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Venue
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

export default Venues;