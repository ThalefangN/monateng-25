import { motion } from "framer-motion";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const LiveBetting = () => {
  const navigate = useNavigate();

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
              <h1 className="text-2xl font-bold">Papadi tsa Jaanong</h1>
              <p className="text-muted-foreground">Live Betting</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Township Rollers vs Gaborone United</h3>
                <p className="text-sm text-muted-foreground">45:00 | Score: 1-0</p>
              </div>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <Button variant="outline" className="w-full">
                1 <span className="ml-2">2.50</span>
              </Button>
              <Button variant="outline" className="w-full">
                X <span className="ml-2">3.20</span>
              </Button>
              <Button variant="outline" className="w-full">
                2 <span className="ml-2">2.80</span>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default LiveBetting;