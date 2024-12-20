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
            Digital Library
          </h1>
          <p className="text-muted-foreground mt-2">
            Access our extensive collection of digital learning resources
          </p>
        </div>

        <div className="grid gap-6">
          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Available Resources</h2>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">E-Books Collection</h3>
                  <p className="text-sm text-muted-foreground">Access thousands of academic e-books</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Academic Journals</h3>
                  <p className="text-sm text-muted-foreground">Browse peer-reviewed research papers</p>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Library className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium">Learning Materials</h3>
                  <p className="text-sm text-muted-foreground">Download study guides and resources</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-card rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Library Features</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ 24/7 online access</li>
              <li>✓ Advanced search functionality</li>
              <li>✓ Multiple format support</li>
              <li>✓ Offline reading capability</li>
              <li>✓ Citation tools</li>
              <li>✓ Personal library organization</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VehicleRegistration;