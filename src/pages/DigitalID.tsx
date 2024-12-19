import { motion } from "framer-motion";
import { ArrowLeft, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

const DigitalID = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const documents = [
    {
      title: "Driver's License",
      description: "View your digital driver's license",
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Digital Driver's License</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Name:</span> John Doe</p>
              <p><span className="font-medium">License No:</span> DL123456</p>
              <p><span className="font-medium">Valid Until:</span> 31/12/2024</p>
              <p><span className="font-medium">Class:</span> B</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Vehicle Registration",
      description: "Access your vehicle registration details",
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Vehicle Registration</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Vehicle:</span> Toyota Corolla</p>
              <p><span className="font-medium">Reg No:</span> ABC 123</p>
              <p><span className="font-medium">Year:</span> 2022</p>
              <p><span className="font-medium">Status:</span> Active</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Insurance Documents",
      description: "View your vehicle insurance information",
      content: (
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold mb-2">Insurance Information</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Policy No:</span> INS987654</p>
              <p><span className="font-medium">Provider:</span> SafeDrive Insurance</p>
              <p><span className="font-medium">Coverage:</span> Comprehensive</p>
              <p><span className="font-medium">Expires:</span> 31/12/2024</p>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handleDocumentClick = () => {
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to view your documents.",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center space-x-4"
        >
          <Button variant="ghost" size="icon" onClick={() => navigate("/services")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Digital Identity</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Your Digital ID QR Code</CardTitle>
              <CardDescription>
                Scan this QR code to verify your identity and access your documents
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <div className="p-4 bg-white rounded-lg">
                <QrCode className="h-48 w-48 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground text-center">
                ID: 123456789<br />
                Valid until: December 31, 2024
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Available Documents</CardTitle>
              <CardDescription>Your digital transport-related documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {documents.map((doc, index) => (
                <Dialog key={doc.title}>
                  <DialogTrigger asChild>
                    <div 
                      className={`flex justify-between items-center p-3 bg-accent rounded-lg cursor-pointer ${
                        !isOnline ? "opacity-50" : ""
                      }`}
                      onClick={handleDocumentClick}
                    >
                      <span>{doc.title}</span>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{doc.title}</DialogTitle>
                      <DialogDescription>
                        {doc.content}
                      </DialogDescription>
                    </DialogHeader>
                  </DialogContent>
                </Dialog>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <BottomNav />
    </div>
  );
};

export default DigitalID;