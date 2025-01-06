import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Brain } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] to-[#9b87f5] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm font-medium">
              You are currently offline. Please connect to the internet to sign in.
            </p>
          </div>
        )}

        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Brain className="w-12 h-12 mx-auto text-[#6E59A5]" />
          </motion.div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#7E69AB] to-[#6E59A5] text-transparent bg-clip-text">NALEDI AI</h1>
          <p className="text-[#222222]/60 mt-2">Welcome back to your mental wellness companion</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#222222]">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-[#222222]/60" />
                <Input id="email" type="email" placeholder="Enter email" className="pl-10 bg-white/50 border-[#7E69AB]/30" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#222222]">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-[#222222]/60" />
                <Input id="password" type="password" placeholder="Enter password" className="pl-10 bg-white/50 border-[#7E69AB]/30" />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-gradient-to-r from-[#7E69AB] to-[#6E59A5]" size="lg">
            Sign In
          </Button>

          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-[#6E59A5] hover:underline">
              Forgot password?
            </Link>
            <Link to="/signup" className="text-sm text-[#6E59A5] hover:underline">
              Create account
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-[#7E69AB]/30" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-transparent px-2 text-[#222222]/60">Or continue with</span>
            </div>
          </div>

          <div className="grid gap-4">
            <Button variant="outline" type="button" className="w-full border-[#7E69AB]/30 text-[#222222] hover:bg-[#7E69AB]/10">
              Continue as Guest
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default SignIn;