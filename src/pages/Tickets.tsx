import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Ticket, CreditCard, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Tickets = () => {
  const [showPayment, setShowPayment] = useState(false);
  const { toast } = useToast();

  const tickets = [
    {
      id: 1,
      type: "VIP",
      description: "Access to VIP area, meet & greet with artists, complimentary drinks",
      price: "P1500",
      icon: "🌟"
    },
    {
      id: 2,
      type: "Regular",
      description: "General admission, access to all main performances",
      price: "P500",
      icon: "🎫"
    },
    {
      id: 3,
      type: "Early Bird",
      description: "Limited early bird tickets at a special price",
      price: "P350",
      icon: "🐦"
    }
  ];

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment Successful! 🎉",
      description: "Your tickets have been booked. Check your email for confirmation.",
      variant: "default",
    });
    setShowPayment(false);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-3xl font-bold">Select Tickets</h1>
          
          {!showPayment ? (
            <div className="grid gap-6 md:grid-cols-2">
              {tickets.map((ticket) => (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card p-6 rounded-xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl">{ticket.icon}</span>
                    <span className="text-2xl font-bold text-primary">{ticket.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{ticket.type}</h3>
                  <p className="text-muted-foreground">{ticket.description}</p>
                  <Button 
                    className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                    onClick={() => setShowPayment(true)}
                  >
                    <Ticket className="mr-2 h-4 w-4" />
                    Pay Now
                  </Button>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto space-y-8"
            >
              <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl text-white space-y-4">
                <CreditCard className="h-12 w-12" />
                <div className="space-y-2">
                  <p className="text-lg font-mono">**** **** **** 1234</p>
                  <p className="text-sm font-mono">12/25</p>
                </div>
              </div>

              <form onSubmit={handlePayment} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" required />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                >
                  Complete Payment
                </Button>
              </form>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Tickets;