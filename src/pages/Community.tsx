import { motion } from "framer-motion";
import { Users, MessageSquare, Heart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Community = () => {
  const posts = [
    {
      id: 1,
      user: "Sarah M.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      content: "Looking for fellow event enthusiasts in Gaborone! Let's connect and share ideas 🎉",
      likes: 24,
      comments: 8
    },
    {
      id: 2,
      user: "David K.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      content: "Just attended an amazing concert at the National Stadium. The organization was perfect! 🎵",
      likes: 45,
      comments: 12
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Community</h1>
              <p className="text-muted-foreground">Connect with event enthusiasts</p>
            </div>
            <Button className="bg-gradient-to-r from-[#D946EF] to-[#F97316]">
              <Users className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </div>

          <div className="space-y-6">
            {posts.map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card p-6 rounded-xl space-y-4"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={post.avatar}
                    alt={post.user}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold">{post.user}</h3>
                    <p className="text-sm text-muted-foreground">Event Enthusiast</p>
                  </div>
                </div>
                
                <p>{post.content}</p>

                <div className="flex items-center gap-6 pt-4 border-t">
                  <Button variant="ghost" size="sm">
                    <Heart className="mr-2 h-4 w-4" />
                    {post.likes}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    {post.comments}
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    Share
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Community;