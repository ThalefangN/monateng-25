import { motion } from "framer-motion";
import { QrCode, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DigitalID = () => {
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
            <QrCode className="h-6 w-6" />
            Student ID / Portal
          </h1>
          <p className="text-muted-foreground mt-2">
            Access your student profile and digital credentials
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Digital ID Features</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Digital Student ID</h3>
                  <p className="text-sm text-muted-foreground">Your official student identification</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Academic Records</h3>
                  <p className="text-sm text-muted-foreground">View your grades and transcripts</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <QrCode className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Digital Certificates</h3>
                  <p className="text-sm text-muted-foreground">Access your earned certifications</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Portal Benefits</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Secure digital identification</li>
              <li>✓ Easy access to academic records</li>
              <li>✓ Course registration management</li>
              <li>✓ Digital certificate verification</li>
              <li>✓ Profile customization</li>
              <li>✓ Mobile-friendly access</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DigitalID;