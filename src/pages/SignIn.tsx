import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Calendar } from "lucide-react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

const SignIn = () => {
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to sign in.",
        variant: "destructive",
      });
      return;
    }

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] flex flex-col md:flex-row items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl flex flex-col md:flex-row gap-8 p-6"
      >
        <div className="flex-1 space-y-8">
          {!isOnline && (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
              <p className="text-sm font-medium">
                You are currently offline. Please connect to the internet to sign in.
              </p>
            </div>
          )}

          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
              M CONNECT
            </h1>
            <p className="text-muted-foreground mt-2">Welcome back to your event planning journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="Enter your email" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="Enter your password" className="pl-10" />
                </div>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]" 
              size="lg"
            >
              Sign In to Book Events
            </Button>

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                Forgot password?
              </Link>
              <Link to="/signup" className="text-sm text-primary hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>

        <div className="hidden md:flex flex-1 flex-col justify-center space-y-6 bg-black/20 p-8 rounded-xl backdrop-blur-sm">
          <Calendar className="h-16 w-16 text-primary mx-auto" />
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold text-white">Event Planning Made Easy</h2>
            <ul className="space-y-3 text-white/60">
              <li>✓ Book venues instantly</li>
              <li>✓ Manage event schedules</li>
              <li>✓ Track RSVPs and attendance</li>
              <li>✓ Access planning tools</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;