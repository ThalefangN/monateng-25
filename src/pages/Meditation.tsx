import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Meditation = () => {
  const navigate = useNavigate();

  const meditations = [
    { title: "Mindful Breathing", duration: "5 min", level: "Beginner" },
    { title: "Body Scan", duration: "10 min", level: "Intermediate" },
    { title: "Loving-Kindness", duration: "15 min", level: "Advanced" },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Meditation</h1>
        </div>

        <div className="grid gap-4">
          {meditations.map((meditation, index) => (
            <motion.div
              key={meditation.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{meditation.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {meditation.duration} • {meditation.level}
                    </p>
                  </div>
                  <Button size="icon" variant="ghost">
                    <Play className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Meditation;