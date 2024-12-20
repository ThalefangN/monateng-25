import { motion } from "framer-motion";
import { Award, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const RoadTax = () => {
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
            <Award className="h-6 w-6" />
            Assessments & Exams
          </h1>
          <p className="text-muted-foreground mt-2">
            Take online assessments and track your academic progress
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Assessment Types</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Course Quizzes</h3>
                  <p className="text-sm text-muted-foreground">Regular knowledge checks and assessments</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Final Examinations</h3>
                  <p className="text-sm text-muted-foreground">End-of-course comprehensive tests</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Practice Tests</h3>
                  <p className="text-sm text-muted-foreground">Preparation materials for examinations</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Assessment Features</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Automated grading</li>
              <li>✓ Detailed feedback</li>
              <li>✓ Progress tracking</li>
              <li>✓ Performance analytics</li>
              <li>✓ Multiple attempt options</li>
              <li>✓ Certification upon completion</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadTax;