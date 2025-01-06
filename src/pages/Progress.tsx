import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Progress = () => {
  const navigate = useNavigate();

  const achievements = [
    { title: "First Check-in", description: "Completed your first mood check", date: "2024-03-15" },
    { title: "Meditation Starter", description: "Completed 5 meditation sessions", date: "2024-03-14" },
    { title: "Journal Master", description: "Wrote 3 journal entries", date: "2024-03-13" },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Your Progress</h1>
        </div>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
          <div className="h-40 flex items-center justify-center">
            <TrendingUp className="h-20 w-20 text-muted-foreground" />
          </div>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Achievements</h2>
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <h3 className="font-semibold">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.description}</p>
                <p className="text-sm text-muted-foreground mt-2">{achievement.date}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Progress;