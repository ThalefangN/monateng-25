import { motion } from "framer-motion";
import { ArrowLeft, Car, FileText, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

const DrivingServices = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const services = [
    {
      title: "Learner's License",
      description: "Apply for a new learner's license or book a test",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Apply for Learner's License</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ID Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <Button className="w-full">Submit Application</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Driver's License",
      description: "Apply for, renew, or replace your driver's license",
      icon: Car,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Driver's License Services</h3>
          <div className="space-y-2">
            <Button variant="outline" className="w-full">Apply for New License</Button>
            <Button variant="outline" className="w-full">Renew License</Button>
            <Button variant="outline" className="w-full">Replace Lost License</Button>
          </div>
        </div>
      ),
    },
    {
      title: "Test Booking",
      description: "Schedule your driving test at available testing centers",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Book Driving Test</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Preferred Date</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Testing Center</label>
              <select className="w-full p-2 border rounded">
                <option>Select a center</option>
                <option>Center A</option>
                <option>Center B</option>
              </select>
            </div>
            <Button className="w-full">Book Test</Button>
          </form>
        </div>
      ),
    },
  ];

  const handleServiceClick = () => {
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to access this service.",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Driving License Services</h1>
        </motion.div>

        <div className="bg-[#9b87f5]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Important Information</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Valid identification document required for all services</li>
            <li>Medical certificate needed for new license applications</li>
            <li>Proof of residence not older than 3 months</li>
            <li>Payment methods: Cash, Credit/Debit cards accepted</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className={`cursor-pointer hover:bg-accent transition-colors ${
                      !isOnline ? "opacity-50" : ""
                    }`}
                    onClick={handleServiceClick}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-2 rounded-full bg-[#9b87f5]/10">
                        <service.icon className="h-6 w-6 text-[#9b87f5]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{service.title}</DialogTitle>
                    <DialogDescription>
                      {service.content}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default DrivingServices;