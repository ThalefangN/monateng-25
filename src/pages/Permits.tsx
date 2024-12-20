import { motion } from "framer-motion";
import { GraduationCap, ArrowLeft, BookOpen, Award, Library } from "lucide-react";
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
            Academic Programs
          </h1>
          <p className="text-muted-foreground mt-2">
            Explore our comprehensive educational programs
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              BGCSE Program
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Core Subjects</h3>
                  <p className="text-sm text-muted-foreground">Mathematics, English, Science, Agriculture</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Study Resources</h3>
                  <p className="text-sm text-muted-foreground">Past papers, Video tutorials, Study guides</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              JCE Program
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Core Subjects</h3>
                  <p className="text-sm text-muted-foreground">Basic Mathematics, English, Integrated Science</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Learning Materials</h3>
                  <p className="text-sm text-muted-foreground">Interactive content, Practice tests, Study notes</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              PSLE Program
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Core Subjects</h3>
                  <p className="text-sm text-muted-foreground">Mathematics, English, Science, Setswana</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Learning Tools</h3>
                  <p className="text-sm text-muted-foreground">Educational games, Visual aids, Practice exercises</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Permits;