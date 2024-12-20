import { motion } from "framer-motion";
import { Award, ArrowLeft, BookOpen } from "lucide-react";
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
            Course Registration
          </h1>
          <p className="text-muted-foreground mt-2">
            Register for your preferred courses and start learning
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Courses</h2>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Mathematics
                  </h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">BGCSE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive mathematics course covering algebra, geometry, and statistics</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>

              <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    English Language
                  </h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">BGCSE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Complete English language and literature course</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>

              <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Science
                  </h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">BGCSE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Combined science course covering biology, chemistry, and physics</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>

              <div className="border rounded-lg p-4 hover:bg-accent transition-colors cursor-pointer">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Agriculture
                  </h3>
                  <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">BGCSE</span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">Comprehensive agriculture studies with practical components</p>
                <Button variant="outline" className="w-full">Register Now</Button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Registration Benefits</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Access to all course materials</li>
              <li>✓ Live online classes</li>
              <li>✓ Practice tests and assignments</li>
              <li>✓ Personal tutor support</li>
              <li>✓ Progress tracking dashboard</li>
              <li>✓ Mobile learning access</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default RoadTax;