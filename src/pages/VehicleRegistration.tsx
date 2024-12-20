import { motion } from "framer-motion";
import { Library, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const VehicleRegistration = () => {
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
            <Library className="h-6 w-6" />
            PSLE Resources
          </h1>
          <p className="text-muted-foreground mt-2">
            Primary School Leaving Examination study materials
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Core Subjects</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Mathematics</h3>
                  <p className="text-sm text-muted-foreground">Basic mathematics and problem-solving skills</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">English</h3>
                  <p className="text-sm text-muted-foreground">Reading, writing, and basic grammar</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Science</h3>
                  <p className="text-sm text-muted-foreground">Basic science concepts and experiments</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Agriculture</h3>
                  <p className="text-sm text-muted-foreground">Introduction to farming and agriculture</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Learning Resources</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Interactive learning games</li>
              <li>✓ Animated video lessons</li>
              <li>✓ Practice worksheets</li>
              <li>✓ Parent guidance materials</li>
              <li>✓ Progress reports</li>
              <li>✓ Fun educational activities</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleRegistration;