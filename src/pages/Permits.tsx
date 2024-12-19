import { motion } from "framer-motion";
import { ArrowLeft, FileText, CreditCard, Clock } from "lucide-react";
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

const Permits = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const permitTypes = [
    {
      title: "Commercial Permits",
      description: "Apply for business transportation permits",
      icon: FileText,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Commercial Permit Application</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Business Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Permit Type</label>
              <select className="w-full p-2 border rounded">
                <option>Select permit type</option>
                <option>Transport Goods</option>
                <option>Passenger Transport</option>
              </select>
            </div>
            <Button className="w-full">Apply Now</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Special Permits",
      description: "Abnormal load and special event permits",
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Special Permit Request</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Event/Load Details</label>
              <textarea className="w-full p-2 border rounded" rows={3}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date Required</label>
              <input type="date" className="w-full p-2 border rounded" />
            </div>
            <Button className="w-full">Submit Request</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Temporary Permits",
      description: "Short-term and visitor permits",
      icon: Clock,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Temporary Permit Application</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <select className="w-full p-2 border rounded">
                <option>Select duration</option>
                <option>1 Day</option>
                <option>1 Week</option>
                <option>1 Month</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Purpose</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <Button className="w-full">Get Permit</Button>
          </form>
        </div>
      ),
    },
  ];

  const handlePermitClick = () => {
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
          <h1 className="text-2xl font-bold">Permit & License Payments</h1>
        </motion.div>

        <div className="bg-[#7E69AB]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Payment Information</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Online payments available 24/7</li>
            <li>Multiple payment methods accepted</li>
            <li>Instant digital receipt provided</li>
            <li>Secure payment processing</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {permitTypes.map((permit, index) => (
            <motion.div
              key={permit.title}
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
                    onClick={handlePermitClick}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-2 rounded-full bg-[#7E69AB]/10">
                        <permit.icon className="h-6 w-6 text-[#7E69AB]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{permit.title}</CardTitle>
                        <CardDescription>{permit.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{permit.title}</DialogTitle>
                    <DialogDescription>
                      {permit.content}
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

export default Permits;