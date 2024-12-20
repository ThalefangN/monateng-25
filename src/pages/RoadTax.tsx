import { motion } from "framer-motion";
import { Award, ArrowLeft, Calendar } from "lucide-react";
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
            Track your examination schedule and access past papers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
            onClick={() => navigate("/current-exams")}
          >
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Current Exams</h2>
            <p className="text-sm text-muted-foreground mb-4">View your ongoing examinations and submissions</p>
            <ul className="space-y-2 text-sm">
              <li>• Mathematics Mock Test (Due: Today)</li>
              <li>• English Essay (Due: Tomorrow)</li>
              <li>• Science Quiz (Due: In 2 days)</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
            onClick={() => navigate("/upcoming-exams")}
          >
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Upcoming Exams</h2>
            <p className="text-sm text-muted-foreground mb-4">Schedule of your future examinations</p>
            <ul className="space-y-2 text-sm">
              <li>• BGCSE Mathematics (In 2 weeks)</li>
              <li>• JCE English Final (In 3 weeks)</li>
              <li>• PSLE Science (Next month)</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
            onClick={() => navigate("/past-exams")}
          >
            <div className="bg-primary/10 p-3 rounded-lg w-fit mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">Past Exams</h2>
            <p className="text-sm text-muted-foreground mb-4">Access previous exam papers and results</p>
            <ul className="space-y-2 text-sm">
              <li>• 2023 Past Papers</li>
              <li>• 2022 Past Papers</li>
              <li>• 2021 Past Papers</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadTax;