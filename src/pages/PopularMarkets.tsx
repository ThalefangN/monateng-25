import { motion } from "framer-motion";
import { ArrowLeft, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const PopularMarkets = () => {
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
              <h1 className="text-2xl font-bold">Metshameko e e Tumileng</h1>
              <p className="text-muted-foreground">Popular Markets</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-card rounded-lg p-4">
              <h3 className="font-semibold mb-2">Premier League - Botswana</h3>
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-between">
                  <span>Jwaneng Galaxy to win the league</span>
                  <span>1.95 BWP</span>
                </Button>
                <Button variant="outline" className="w-full justify-between">
                  <span>Gaborone United top 3 finish</span>
                  <span>2.10 BWP</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default PopularMarkets;