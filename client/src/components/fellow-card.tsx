import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fellow } from "@/lib/fellows-data";
import { motion } from "framer-motion";

interface FellowCardProps {
  fellow: Fellow;
  onClick: (fellow: Fellow) => void;
}

export function FellowCard({ fellow, onClick }: FellowCardProps) {
  const initials = fellow.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card 
        className="cursor-pointer hover:shadow-lg transition-all duration-300 border-none bg-white/50 backdrop-blur-sm group overflow-hidden"
        onClick={() => onClick(fellow)}
      >
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar className="h-16 w-16 border-2 border-accent/20 transition-transform group-hover:scale-105">
            <AvatarImage src={fellow.photoUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${fellow.name}&backgroundColor=e5e7eb&textColor=374151`} className="object-cover" />
            <AvatarFallback className="bg-secondary text-secondary-foreground font-serif">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-xl font-serif text-primary leading-tight group-hover:text-accent transition-colors">
              {fellow.name}
            </CardTitle>
            <CardDescription className="text-sm font-sans line-clamp-1 text-muted-foreground">
              {fellow.role}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <p className="text-sm font-medium text-foreground/80 line-clamp-1 border-l-2 border-accent pl-2">
              {fellow.school}
            </p>
            
            {fellow.summary && (
              <div className="bg-secondary/50 p-2.5 rounded-md my-1.5 group-hover:bg-secondary/70 transition-colors">
                 <p className="text-xs text-foreground/90 line-clamp-3 leading-relaxed font-medium">
                   {fellow.summary}
                 </p>
              </div>
            )}

            <p className="text-xs text-muted-foreground line-clamp-2 mt-1 italic font-serif opacity-80">
              "{fellow.quote}"
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
