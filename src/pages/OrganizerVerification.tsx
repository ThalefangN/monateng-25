import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { ArrowLeft, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const OrganizerVerification = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Verification Submitted",
      description: "We'll review your application and get back to you soon.",
    });
    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto space-y-6"
      >
        <Button
          variant="ghost"
          className="mb-4"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>

        <div>
          <h1 className="text-3xl font-bold">Organizer Verification</h1>
          <p className="text-muted-foreground mt-2">
            Upload the required documents to verify your event organization
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="businessReg">Business Registration</Label>
              <div className="flex gap-2">
                <Input id="businessReg" type="file" className="file:mr-4" required />
                <Button type="button" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="taxCert">Tax Certificate</Label>
              <div className="flex gap-2">
                <Input id="taxCert" type="file" className="file:mr-4" required />
                <Button type="button" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="idDoc">ID Document</Label>
              <div className="flex gap-2">
                <Input id="idDoc" type="file" className="file:mr-4" required />
                <Button type="button" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="proofOfAddress">Proof of Address</Label>
              <div className="flex gap-2">
                <Input id="proofOfAddress" type="file" className="file:mr-4" required />
                <Button type="button" size="icon">
                  <Upload className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]"
            size="lg"
          >
            Submit for Verification
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default OrganizerVerification;