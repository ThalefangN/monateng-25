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
            Online Courses
          </h1>
          <p className="text-muted-foreground mt-2">
            Access our comprehensive collection of online courses
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Introduction to Computer Science</h3>
                  <p className="text-sm text-muted-foreground">Learn the basics of programming and computer science</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Business Administration</h3>
                  <p className="text-sm text-muted-foreground">Master the fundamentals of business management</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Digital Marketing</h3>
                  <p className="text-sm text-muted-foreground">Learn modern marketing strategies and techniques</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Course Features</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Self-paced learning</li>
              <li>✓ Video lectures and tutorials</li>
              <li>✓ Interactive assignments</li>
              <li>✓ Progress tracking</li>
              <li>✓ Certificate upon completion</li>
              <li>✓ 24/7 access to materials</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default DrivingServices;