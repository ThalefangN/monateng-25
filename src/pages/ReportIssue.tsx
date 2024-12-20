import { motion } from "framer-motion";
import { MessageSquare, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ReportIssue = () => {
  const navigate = useNavigate();

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
            Get help from our tutors and academic support team
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Support Services</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Academic Advising</h3>
                  <p className="text-sm text-muted-foreground">Get guidance on your academic journey</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">Resolve platform-related issues</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Tutoring Services</h3>
                  <p className="text-sm text-muted-foreground">One-on-one help with course content</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Support Features</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ 24/7 chat support</li>
              <li>✓ Video consultations</li>
              <li>✓ Email support</li>
              <li>✓ Knowledge base access</li>
              <li>✓ Community forums</li>
              <li>✓ Scheduled appointments</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReportIssue;