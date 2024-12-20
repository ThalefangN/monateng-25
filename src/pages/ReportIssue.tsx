import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ReportIssue = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Support request submitted",
      description: "Our team will get back to you within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>

        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <MessageSquare className="h-6 w-6" />
            Student Support
          </h1>
          <p className="text-muted-foreground mt-2">
            Get help with your studies or technical issues
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Contact Support</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Subject</label>
                <Input placeholder="What do you need help with?" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Description</label>
                <Textarea 
                  placeholder="Describe your issue in detail" 
                  className="min-h-[100px]"
                />
              </div>
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Support Services</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ 24/7 Technical Support</li>
              <li>✓ Academic Guidance</li>
              <li>✓ Study Material Access Help</li>
              <li>✓ Exam Preparation Support</li>
              <li>✓ Course Selection Assistance</li>
              <li>✓ Learning Resources Help</li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <div className="grid gap-2">
              <Button variant="outline" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Live Chat with Tutor
              </Button>
              <Button variant="outline" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                FAQs
              </Button>
              <Button variant="outline" className="justify-start">
                <MessageSquare className="h-4 w-4 mr-2" />
                Study Resources
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportIssue;