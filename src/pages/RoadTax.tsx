import { motion } from "framer-motion";
import { ArrowLeft, Calculator, Calendar, Receipt } from "lucide-react";
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

const RoadTax = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const taxServices = [
    {
      title: "Calculate Road Tax",
      description: "Calculate your vehicle's road tax amount",
      icon: Calculator,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Road Tax Calculator</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Type</label>
              <select className="w-full p-2 border rounded">
                <option>Select vehicle type</option>
                <option>Private Car</option>
                <option>Commercial Vehicle</option>
                <option>Motorcycle</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Engine Capacity (cc)</label>
              <input type="number" className="w-full p-2 border rounded" />
            </div>
            <Button className="w-full">Calculate Tax</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Pay Road Tax",
      description: "Make your road tax payment online",
      icon: Receipt,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Road Tax Payment</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Vehicle Registration Number</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Payment Amount</label>
              <input type="number" className="w-full p-2 border rounded" readOnly value={0} />
            </div>
            <Button className="w-full">Proceed to Payment</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Tax History",
      description: "View your past road tax payments",
      icon: Calendar,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Payment History</h3>
          <div className="space-y-2">
            <div className="p-3 border rounded">
              <p className="font-medium">Payment #12345</p>
              <p className="text-sm text-gray-600">Date: 01/01/2024</p>
              <p className="text-sm text-gray-600">Amount: $150</p>
            </div>
            <div className="p-3 border rounded">
              <p className="font-medium">Payment #12344</p>
              <p className="text-sm text-gray-600">Date: 01/01/2023</p>
              <p className="text-sm text-gray-600">Amount: $150</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleTaxServiceClick = () => {
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
          <h1 className="text-2xl font-bold">Road Tax Payments</h1>
        </motion.div>

        <div className="bg-[#1EAEDB]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Tax Payment Guide</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Tax rates vary by vehicle type and weight</li>
            <li>Annual or quarterly payment options</li>
            <li>Late payment penalties apply</li>
            <li>Keep proof of payment for verification</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {taxServices.map((service, index) => (
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
                    onClick={handleTaxServiceClick}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-2 rounded-full bg-[#1EAEDB]/10">
                        <service.icon className="h-6 w-6 text-[#1EAEDB]" />
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

export default RoadTax;