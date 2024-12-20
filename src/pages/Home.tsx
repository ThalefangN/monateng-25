import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Search, BookOpen, GraduationCap, Library, Award, MessageSquare, QrCode, HomeIcon, Settings, Bell, User } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: "Online Courses",
      description: "Access our wide range of online courses and learning materials",
      icon: BookOpen,
      path: "/driving-services" // keeping existing routes but changing content
    },
    {
      title: "Academic Programs",
      description: "Browse and enroll in academic programs and certifications",
      icon: GraduationCap,
      path: "/permits"
    },
    {
      title: "Digital Library",
      description: "Access our extensive collection of digital learning resources",
      icon: Library,
      path: "/vehicle-registration"
    },
    {
      title: "Assessments & Exams",
      description: "Take online assessments and track your progress",
      icon: Award,
      path: "/road-tax"
    },
    {
      title: "Student Support",
      description: "Get help from our tutors and academic support team",
      icon: MessageSquare,
      path: "/report-issue"
    },
    {
      title: "Student ID / Portal",
      description: "Access your student profile and digital credentials",
      icon: QrCode,
      path: "/digital-id"
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-16">
      <div className="p-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Welcome to BotseduLearn!</h1>
              <p className="text-muted-foreground">Discover your learning journey today</p>
            </div>
            <Button size="icon" variant="ghost" onClick={() => navigate("/profile")}>
              <User className="h-6 w-6" />
            </Button>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-48 mb-6">
            <img 
              src="/lovable-uploads/18a8902a-f4eb-4b86-8c45-c8914ecb854c.png"
              alt="BotseduLearn Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input className="pl-10" placeholder="Search courses, programs..." />
        </div>

        <div className="grid gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(service.path)}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Home;