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
            Academic Programs
          </h1>
          <p className="text-muted-foreground mt-2">
            Explore our accredited academic programs and certifications
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Programs</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Bachelor of Computer Science</h3>
                  <p className="text-sm text-muted-foreground">4-year undergraduate program</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Diploma in Business Management</h3>
                  <p className="text-sm text-muted-foreground">2-year diploma program</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Certificate in Digital Marketing</h3>
                  <p className="text-sm text-muted-foreground">6-month certification program</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Program Benefits</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Internationally recognized qualifications</li>
              <li>✓ Industry-aligned curriculum</li>
              <li>✓ Experienced faculty</li>
              <li>✓ Career guidance and placement support</li>
              <li>✓ Flexible learning options</li>
              <li>✓ Access to state-of-the-art facilities</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Permits;