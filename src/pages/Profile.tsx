import { motion } from "framer-motion";
import { User, Mail, Phone, Shield, LogOut, ChevronRight, Wallet, History, Settings, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import { Card, CardHeader } from "@/components/ui/card";

const Profile = () => {
  const navigate = useNavigate();

  const menuItems = [
    {
      title: "Betting History",
      icon: History,
      onClick: () => console.log("Navigate to betting history")
    },
    {
      title: "Payment Methods",
      icon: Wallet,
      onClick: () => console.log("Navigate to payment methods")
    },
    {
      title: "Friends & Social",
      icon: Users,
      onClick: () => console.log("Navigate to friends")
    },
    {
      title: "Security Settings",
      icon: Shield,
      onClick: () => console.log("Navigate to security settings")
    },
    {
      title: "Sign Out",
      icon: LogOut,
      onClick: () => navigate("/signin")
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center space-y-4"
        >
          <motion.div 
            className="w-32 h-32 rounded-full overflow-hidden shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/lovable-uploads/4b3326e6-8879-4b1b-b471-a29f6fc8e97c.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="text-center">
            <h2 className="text-xl font-semibold">Kgosi Kgafela</h2>
            <p className="text-muted-foreground">Member since 2024</p>
          </div>

          <div className="w-full bg-gradient-to-r from-[#D946EF] to-[#F97316] p-6 rounded-xl text-white">
            <h3 className="text-lg font-semibold">Wallet Balance</h3>
            <p className="text-3xl font-bold mt-2">BWP 1,250.00</p>
            <div className="flex gap-2 mt-4">
              <Button variant="secondary" size="sm" className="flex-1">Deposit</Button>
              <Button variant="secondary" size="sm" className="flex-1">Withdraw</Button>
            </div>
          </div>
        </motion.div>

        <div className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">kgosi.kgafela@example.com</p>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-medium">+267 77593604</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card
                className="cursor-pointer hover:bg-accent transition-colors"
                onClick={item.onClick}
              >
                <CardHeader className="flex flex-row items-center justify-between p-4">
                  <div className="flex items-center space-x-4">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span>{item.title}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;