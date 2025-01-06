import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { User, Mail, Lock, Wallet, CreditCard } from "lucide-react";
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
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] to-[#8B5CF6] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md space-y-8"
      >
        {!isOnline && (
          <div className="bg-destructive/10 text-destructive p-4 rounded-lg mb-4">
            <p className="text-sm font-medium">
              You are currently offline. Please connect to the internet to sign up.
            </p>
          </div>
        )}

        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#D946EF] to-[#F97316] text-transparent bg-clip-text">BETCONNECT</h1>
          <p className="text-muted-foreground mt-2">Create your betting account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
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

            <div className="space-y-2">
              <Label htmlFor="payment">Payment Method</Label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                <Input id="payment" placeholder="Add payment method" className="pl-10" />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I am over 18 and agree to BETCONNECT's terms of service and privacy policy
              </label>
            </div>
          </div>

          <Button 
            type="submit" 
            className={`w-full bg-gradient-to-r from-[#D946EF] to-[#F97316] ${!isOnline ? "opacity-50" : ""}`} 
            size="lg" 
            disabled={!agreed || !isOnline}
          >
            Create Betting Account
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignUp;