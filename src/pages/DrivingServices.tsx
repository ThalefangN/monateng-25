import { motion } from "framer-motion";
import { BookOpen, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DrivingServices = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input className="pl-10" placeholder="Search courses..." />
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add Course
          </Button>
        </div>

        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Educational Programs
          </h1>
          <p className="text-muted-foreground mt-2">
            Choose your educational path
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">BGCSE</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Mathematics</li>
              <li>✓ English Language</li>
              <li>✓ Science (Double Award)</li>
              <li>✓ Agriculture</li>
              <li>✓ Development Studies</li>
            </ul>
            <Button className="mt-4 w-full">Enroll Now</Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">JCE</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Basic Mathematics</li>
              <li>✓ English</li>
              <li>✓ Integrated Science</li>
              <li>✓ Social Studies</li>
              <li>✓ Agriculture</li>
            </ul>
            <Button className="mt-4 w-full">Enroll Now</Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-card rounded-lg p-6 shadow-sm cursor-pointer"
          >
            <h2 className="text-xl font-semibold mb-4">PSLE</h2>
            <ul className="space-y-2 text-sm">
              <li>✓ Mathematics</li>
              <li>✓ English</li>
              <li>✓ Science</li>
              <li>✓ Social Studies</li>
              <li>✓ Setswana</li>
            </ul>
            <Button className="mt-4 w-full">Enroll Now</Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default DrivingServices;