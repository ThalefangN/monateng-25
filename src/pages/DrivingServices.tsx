import { motion } from "framer-motion";
import { BookOpen, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const DrivingServices = () => {
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
            <BookOpen className="h-6 w-6" />
            BGCSE Courses
          </h1>
          <p className="text-muted-foreground mt-2">
            Access our comprehensive BGCSE preparation courses
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Core Subjects</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mathematics</h3>
                  <p className="text-sm text-muted-foreground">Core mathematics including algebra, geometry, and statistics</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">English Language</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive English language and literature studies</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Science (Double Award)</h3>
                  <p className="text-sm text-muted-foreground">Biology, Chemistry, and Physics combined</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Course Features</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Comprehensive study materials</li>
              <li>✓ Past examination papers</li>
              <li>✓ Video tutorials</li>
              <li>✓ Practice exercises</li>
              <li>✓ Mock examinations</li>
              <li>✓ One-on-one tutoring available</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DrivingServices;