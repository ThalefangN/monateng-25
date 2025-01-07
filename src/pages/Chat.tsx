import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Naledi, your mental health companion. How can I help you today?",
      sender: "ai"
    }
  ]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };
    setMessages([...messages, newMessage]);
    setInput("");

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: "I understand how you're feeling. Would you like to talk more about it?",
        sender: "ai"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="p-4 border-b bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="text-white hover:text-white/80">
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold text-white">Chat with Naledi</h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-background/95">
        {messages.map((message) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card 
              className={`p-3 max-w-[80%] ${
                message.sender === "user" 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/30 backdrop-blur-sm"
              }`}
            >
              <p>{message.text}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="p-4 border-t bg-background/95 backdrop-blur-sm">
        <div className="flex gap-2 max-w-2xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="bg-background/50"
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
          />
          <Button onClick={handleSend} className="bg-primary hover:bg-primary/90">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Chat;