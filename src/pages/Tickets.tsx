import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { Ticket, CreditCard, Check, Download, Search } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<null | {
    type: string;
    price: string;
    description: string;
  }>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

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
    setShowSuccess(true);
    toast({
      title: "Payment Successful! 🎉",
      description: "Your tickets have been booked. Check your email for confirmation.",
    });
  };

  const handleDownloadTicket = () => {
    toast({
      title: "Ticket Downloaded",
      description: "Your digital ticket has been downloaded successfully.",
    });
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
          
          {!showPayment && !showSuccess ? (
            <div className="space-y-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input 
                  placeholder="Search events..." 
                  className="pl-10"
                />
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                {tickets.map((ticket) => (
                  <motion.div
                    key={ticket.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card p-6 rounded-xl space-y-4 border border-border"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-4xl">{ticket.icon}</span>
                      <span className="text-2xl font-bold text-primary">{ticket.price}</span>
                    </div>
                    <h3 className="text-xl font-semibold">{ticket.type}</h3>
                    <p className="text-muted-foreground">{ticket.description}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
                      onClick={() => {
                        setSelectedTicket(ticket);
                        setShowPayment(true);
                      }}
                    >
                      <Ticket className="mr-2 h-4 w-4" />
                      Select Ticket
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : showSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="bg-green-500/10 p-8 rounded-xl">
                <Check className="mx-auto h-16 w-16 text-green-500 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
                <p className="text-muted-foreground">Your ticket has been booked successfully.</p>
              </div>
              
              <Button 
                onClick={handleDownloadTicket}
                className="bg-gradient-to-r from-[#D946EF] to-[#F97316]"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Digital Ticket
              </Button>
              
              <Button 
                variant="outline"
                onClick={() => navigate('/events')}
                className="w-full"
              >
                Browse More Events
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto space-y-8"
            >
              {selectedTicket && (
                <div className="bg-card p-6 rounded-xl space-y-4 border border-border">
                  <h3 className="text-xl font-semibold">{selectedTicket.type} Ticket</h3>
                  <p className="text-muted-foreground">{selectedTicket.description}</p>
                  <p className="text-2xl font-bold text-primary">{selectedTicket.price}</p>
                </div>
              )}

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
                  Confirm Payment
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