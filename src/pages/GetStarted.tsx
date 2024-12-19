import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

const GetStarted = () => {
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const handleAction = () => {
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to proceed.",
        variant: "destructive",
      });
      return;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8 text-center"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm font-medium">
              You are currently offline. Some features may be limited.
            </p>
          </div>
        )}

        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Mookgweetsi</h1>
          <p className="text-muted-foreground">
            Your one-stop transport services solution in Botswana
          </p>
        </div>
        
        <div className="relative h-64 w-full rounded-2xl overflow-hidden">
          <img
            src="/lovable-uploads/b1fdcda0-68c0-4b78-9a71-bbebb1ab0560.png"
            alt="Botswana Flag"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4">
          <Button 
            asChild 
            className={`w-full ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signup">Sign Up</Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className={`w-full ${!isOnline ? "opacity-50 cursor-not-allowed" : ""}`}
            size="lg"
            onClick={handleAction}
          >
            <Link to="/signin">Sign In</Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </motion.div>
    </div>
  );
};

export default GetStarted;