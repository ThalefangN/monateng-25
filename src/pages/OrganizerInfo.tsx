import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OrganizerInfo = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/organizer/verify");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold">Event Organizer Information</h1>
          <p className="text-muted-foreground mt-2">
            Tell us about yourself and your event organization
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Enter your full name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company">Company/Organization Name</Label>
              <Input id="company" placeholder="Enter your company name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Business Email</Label>
              <Input id="email" type="email" placeholder="Enter your business email" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Enter your contact number" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eventTypes">Types of Events</Label>
              <Textarea 
                id="eventTypes" 
                placeholder="What types of events do you organize? (e.g., Concerts, Corporate Events, Weddings)"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">Experience</Label>
              <Textarea 
                id="experience" 
                placeholder="Tell us about your event organizing experience"
                required
              />
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
            size="lg"
          >
            Continue to Verification
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default OrganizerInfo;