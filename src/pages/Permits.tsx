import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Permits = () => {
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
            <GraduationCap className="h-6 w-6" />
            JCE Programs
          </h1>
          <p className="text-muted-foreground mt-2">
            Junior Certificate Examination preparation courses
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Subjects</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mathematics</h3>
                  <p className="text-sm text-muted-foreground">Basic algebra, geometry, and arithmetic</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Integrated Science</h3>
                  <p className="text-sm text-muted-foreground">Introduction to biology, chemistry, and physics</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">English Language</h3>
                  <p className="text-sm text-muted-foreground">Grammar, comprehension, and writing skills</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Program Benefits</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Structured learning path</li>
              <li>✓ Interactive learning materials</li>
              <li>✓ Regular assessments</li>
              <li>✓ Progress tracking</li>
              <li>✓ Study groups</li>
              <li>✓ Expert guidance</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Permits;