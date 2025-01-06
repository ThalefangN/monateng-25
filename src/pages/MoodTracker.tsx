import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Smile, Meh, Frown, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const moods = [
  { icon: Smile, label: "Happy", color: "text-green-500" },
  { icon: Meh, label: "Neutral", color: "text-yellow-500" },
  { icon: Frown, label: "Sad", color: "text-blue-500" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    toast({
      title: "Mood tracked!",
      description: `You're feeling ${mood.toLowerCase()} today.`,
    });
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Track Your Mood</h1>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">How are you feeling today?</h2>
          <div className="grid grid-cols-3 gap-4">
            {moods.map(({ icon: Icon, label, color }) => (
              <motion.button
                key={label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex flex-col items-center p-4 rounded-lg border ${
                  selectedMood === label ? "border-primary" : "border-border"
                }`}
                onClick={() => handleMoodSelect(label)}
              >
                <Icon className={`h-8 w-8 ${color}`} />
                <span className="mt-2">{label}</span>
              </motion.button>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Mood History</h2>
          <p className="text-muted-foreground">Track your emotional journey over time.</p>
          {/* Add mood history visualization here */}
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recommendations</h2>
          <ul className="space-y-2">
            <li>• Take a moment to breathe deeply</li>
            <li>• Write in your journal</li>
            <li>• Talk to someone you trust</li>
            <li>• Try a quick meditation session</li>
          </ul>
        </Card>
      </div>
      <BottomNav />
    </div>
  );
};

export default MoodTracker;