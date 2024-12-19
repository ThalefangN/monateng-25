import { motion } from "framer-motion";
import { ArrowLeft, Car, FileCheck, RefreshCw } from "lucide-react";
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

const VehicleRegistration = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const registrationServices = [
    {
      title: "New Registration",
      description: "Register your vehicle for the first time",
      icon: Car,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">New Vehicle Registration</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Make & Model</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input type="number" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">VIN Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <Button className="w-full">Register Vehicle</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Transfer of Ownership",
      description: "Transfer vehicle ownership to another person",
      icon: FileCheck,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Transfer Ownership</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Current Owner Details</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Full Name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">New Owner Details</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Full Name" />
            </div>
            <Button className="w-full">Process Transfer</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Renewal Registration",
      description: "Renew your existing vehicle registration",
      icon: RefreshCw,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Registration Renewal</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Registration Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Renewal Period</label>
              <select className="w-full p-2 border rounded">
                <option>1 Year</option>
                <option>2 Years</option>
              </select>
            </div>
            <Button className="w-full">Renew Registration</Button>
          </form>
        </div>
      ),
    },
  ];

  const handleRegistrationClick = () => {
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
          <h1 className="text-2xl font-bold">Vehicle Registration</h1>
        </motion.div>

        <div className="bg-[#D3E4FD] rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Required Documents</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Proof of identity (National ID/Passport)</li>
            <li>Proof of residence</li>
            <li>Vehicle inspection certificate</li>
            <li>Insurance documentation</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {registrationServices.map((service, index) => (
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
                    onClick={handleRegistrationClick}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-2 rounded-full bg-[#D3E4FD]">
                        <service.icon className="h-6 w-6 text-[#0EA5E9]" />
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

export default VehicleRegistration;