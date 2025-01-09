import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Calendar, Users, Star } from "lucide-react";
import PhoneInput from "@/components/PhoneInput";
import { useState } from "react";
import { useOnlineStatus } from "@/hooks/useOnlineStatus";
import { useToast } from "@/hooks/use-toast";

const SignUp = () => {
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();
  const isOnline = useOnlineStatus();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isOnline) {
      toast({
        title: "You're offline",
        description: "Please connect to the internet to sign up.",
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
          <h2 className="text-3xl font-bold">Join Monate Connect</h2>
          <p className="text-lg opacity-90">Start your event journey today</p>
          <div className="grid gap-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6" />
              <p>Book premium events</p>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6" />
              <p>Join event communities</p>
            </div>
            <div className="flex items-center space-x-3">
              <Star className="h-6 w-6" />
              <p>Access exclusive experiences</p>
            </div>
          </div>
        </div>

        <div className="bg-background/95 backdrop-blur-sm p-8 rounded-2xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">
              MONATE CONNECT
            </h1>
            <p className="text-muted-foreground mt-2">Create your event account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                  <Input id="username" placeholder="Enter your full name" className="pl-10" />
                </div>
              </div>

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
                  <Input id="password" type="password" placeholder="Create a secure password" className="pl-10" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <PhoneInput value={phone} onChange={setPhone} />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to Monate Connect's terms of service and privacy policy
                </label>
              </div>
            </div>

            <Button 
              type="submit" 
              className={`w-full bg-gradient-to-r from-[#D946EF] to-[#F97316] ${!isOnline ? "opacity-50" : ""}`} 
              size="lg" 
              disabled={!agreed || !isOnline}
            >
              Create Event Account
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link to="/signin" className="font-bold text-primary hover:underline">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;