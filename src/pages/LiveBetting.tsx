import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";
import BottomNav from "@/components/BottomNav";
import { useState } from "react";

const LiveBetting = () => {
  const navigate = useNavigate();
  const [showPeers, setShowPeers] = useState(false);

  const peers = [
    { id: 1, name: "Moagi", amount: "BWP 100", prediction: "Township Rollers" },
    { id: 2, name: "Tumelo", amount: "BWP 150", prediction: "Gaborone United" },
    { id: 3, name: "Kabo", amount: "BWP 200", prediction: "Township Rollers" },
  ];

  const handleBetRequest = () => {
    setShowPeers(true);
    toast({
      title: "Success!",
      description: "You've been listed as a betting peer. Finding matches...",
    });
  };

  const handlePeerSelect = (peer: any) => {
    toast({
      title: "Bet Request Sent!",
      description: `Your request has been sent to ${peer.name}`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold">Live Betting</h1>
              <p className="text-muted-foreground">Current Matches</p>
            </div>
          </div>

          <motion.div
            className="bg-card rounded-lg p-4"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Township Rollers vs Gaborone United</h3>
                <p className="text-sm text-muted-foreground">45:00 | Score: 1-0</p>
              </div>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="w-full" onClick={handleBetRequest}>
                1 <span className="ml-2">2.50</span>
              </Button>
              <Button variant="outline" className="w-full" onClick={handleBetRequest}>
                X <span className="ml-2">3.20</span>
              </Button>
              <Button variant="outline" className="w-full" onClick={handleBetRequest}>
                2 <span className="ml-2">2.80</span>
              </Button>
            </div>
          </motion.div>

          {showPeers && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold">Available Peers</h2>
              </div>
              
              {peers.map((peer) => (
                <motion.div
                  key={peer.id}
                  className="bg-card rounded-lg p-4"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => handlePeerSelect(peer)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold">{peer.name}</h3>
                      <p className="text-sm text-muted-foreground">Betting on: {peer.prediction}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{peer.amount}</p>
                      <Button size="sm" variant="outline" className="mt-2">
                        Match Bet
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default LiveBetting;