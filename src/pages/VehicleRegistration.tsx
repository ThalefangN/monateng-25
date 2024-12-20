import { motion } from "framer-motion";
import { Library, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const VehicleRegistration = () => {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Library className="h-6 w-6" />
            AI Smart Tutor
          </h1>
          <p className="text-muted-foreground mt-2">
            Get instant help with your studies
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm h-[calc(100vh-250px)] flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4 space-y-4">
            {/* Chat messages would be mapped here */}
            <div className="bg-accent p-3 rounded-lg max-w-[80%]">
              <p className="text-sm">Hello! I'm your AI tutor. How can I help you with your studies today?</p>
            </div>
          </div>

          <div className="flex gap-2">
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask me anything about your studies..."
              className="flex-1"
            />
            <Button className="flex items-center gap-2" size="icon">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleRegistration;
