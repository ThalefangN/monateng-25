import { motion } from "framer-motion";
import { ArrowLeft, AlertTriangle, Camera, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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

const ReportIssue = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const reportTypes = [
    {
      title: "Traffic Accident",
      description: "Report a road accident or collision",
      icon: AlertTriangle,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Report Traffic Accident</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="Enter accident location" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Description</label>
              <textarea className="w-full p-2 border rounded" rows={3} placeholder="Describe what happened"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Upload Photos</label>
              <input type="file" className="w-full p-2 border rounded" multiple accept="image/*" />
            </div>
            <Button className="w-full">Submit Report</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Road Damage",
      description: "Report potholes or road infrastructure issues",
      icon: Camera,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Report Road Damage</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Damage Type</label>
              <select className="w-full p-2 border rounded">
                <option>Select damage type</option>
                <option>Pothole</option>
                <option>Road Signs</option>
                <option>Street Lights</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Photos</label>
              <input type="file" className="w-full p-2 border rounded" multiple accept="image/*" />
            </div>
            <Button className="w-full">Submit Report</Button>
          </form>
        </div>
      ),
    },
    {
      title: "Traffic Signal Issues",
      description: "Report malfunctioning traffic lights or signs",
      icon: MapPin,
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Report Signal Issue</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Signal Location</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Issue Type</label>
              <select className="w-full p-2 border rounded">
                <option>Select issue type</option>
                <option>Not Working</option>
                <option>Incorrect Timing</option>
                <option>Physical Damage</option>
              </select>
            </div>
            <Button className="w-full">Submit Report</Button>
          </form>
        </div>
      ),
    },
  ];

  const handleReportClick = () => {
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to submit a report.",
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
          <Button variant="ghost" size="icon" onClick={() => navigate("/home")}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Report an Issue</h1>
        </motion.div>

        <div className="bg-[#8E9196]/10 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold mb-2">Reporting Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
            <li>Provide accurate location details</li>
            <li>Include photos if possible</li>
            <li>Be specific about the issue</li>
            <li>Emergency? Call 999 immediately</li>
          </ul>
        </div>

        <div className="grid gap-4">
          {reportTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card 
                    className={`cursor-pointer hover:bg-accent transition-colors ${
                      !isOnline ? "opacity-50" : ""
                    }`}
                    onClick={handleReportClick}
                  >
                    <CardHeader className="flex flex-row items-center space-x-4">
                      <div className="p-2 rounded-full bg-[#8E9196]/10">
                        <type.icon className="h-6 w-6 text-[#8E9196]" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{type.title}</CardTitle>
                        <CardDescription>{type.description}</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{type.title}</DialogTitle>
                    <DialogDescription>
                      {type.content}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default ReportIssue;