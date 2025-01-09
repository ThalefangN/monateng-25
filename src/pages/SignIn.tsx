import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Calendar, Ticket } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center"
      >
        <div className="hidden md:block space-y-6 text-white">
          <h2 className="text-3xl font-bold">Welcome to Monate Connect</h2>
          <p className="text-lg opacity-90">Your gateway to extraordinary events</p>
          <div className="grid gap-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6" />
              <p>Access premium events</p>
            </div>
            <div className="flex items-center space-x-3">
              <Ticket className="h-6 w-6" />
              <p>Easy booking management</p>
            </div>
          </div>
        </div>

        <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
              MONATE CONNECT
            </h1>
            <p className="text-muted-foreground mt-2">Sign in to your account</p>
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

            <Button type="submit" className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316]" size="lg">
              Sign In to Book Events
            </Button>

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-sm font-bold text-primary hover:underline">
                Forgot password?
              </Link>
              <Link to="/signup" className="text-sm font-bold text-primary hover:underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;