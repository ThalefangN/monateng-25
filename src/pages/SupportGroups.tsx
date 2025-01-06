import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const SupportGroups = () => {
  const navigate = useNavigate();

  const groups = [
    { name: "Anxiety Support", members: 128, active: true },
    { name: "Depression Support", members: 156, active: true },
    { name: "Stress Management", members: 94, active: false },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Support Groups</h1>
        </div>

        <div className="grid gap-4">
          {groups.map((group, index) => (
            <motion.div
              key={group.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{group.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {group.members} members • {group.active ? "Active now" : "Inactive"}
                    </p>
                  </div>
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Join
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default SupportGroups;