import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import BottomNav from "@/components/BottomNav";

const DailyJournal = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [entry, setEntry] = useState("");

  const handleSave = () => {
    if (entry.trim()) {
      toast({
        title: "Journal Entry Saved",
        description: "Your thoughts have been recorded.",
      });
      setEntry("");
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Daily Journal</h1>
        </div>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">Today's Entry</h2>
          <Textarea
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            placeholder="How are you feeling today?"
            className="min-h-[200px] mb-4"
          />
          <Button onClick={handleSave} className="w-full">
            <Save className="mr-2 h-4 w-4" />
            Save Entry
          </Button>
        </Card>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Previous Entries</h2>
          <p className="text-muted-foreground">Your journal entries will appear here.</p>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default DailyJournal;