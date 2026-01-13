import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Fellow } from "@/lib/fellows-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, School, Lightbulb, TrendingUp, BookOpen } from "lucide-react";

interface FellowModalProps {
  fellow: Fellow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FellowModal({ fellow, open, onOpenChange }: FellowModalProps) {
  if (!fellow) return null;

  const initials = fellow.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden border-none shadow-2xl bg-[#fafafa]">
        <div className="grid md:grid-cols-[300px_1fr] h-full max-h-[90vh]">
          {/* Sidebar */}
          <div className="bg-primary/5 p-8 flex flex-col gap-6 border-r border-border/50 overflow-y-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                 <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${fellow.name}&backgroundColor=e5e7eb&textColor=374151`} />
                <AvatarFallback className="text-2xl font-serif bg-white text-primary">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-1">
                  {fellow.name}
                </h2>
                <Badge variant="secondary" className="font-sans font-normal text-primary/80 mb-2">
                  {fellow.role}
                </Badge>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-2">
                  <School className="w-4 h-4" />
                  <span className="text-balance">{fellow.school}</span>
                </div>
              </div>
            </div>

            <Separator className="bg-primary/10" />

            <div className="space-y-4">
              <div className="relative p-4 bg-white rounded-lg shadow-sm border border-primary/5">
                <Quote className="absolute top-2 left-2 w-4 h-4 text-accent/40" />
                <p className="text-sm italic font-serif text-foreground/80 pt-2 text-center">
                  "{fellow.quote}"
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <ScrollArea className="h-full max-h-[90vh]">
            <div className="p-8 space-y-8">
              {/* Video Section */}
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg bg-black/5 group relative">
                <iframe
                  className="w-full h-full"
                  src={fellow.videoUrl}
                  title="Fellow Journey Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/10 pointer-events-none group-hover:bg-transparent transition-colors">
                  {/* Overlay placeholder if needed */}
                </div>
              </div>

              <div className="grid gap-8">
                {/* The App */}
                <section>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 rounded-full bg-accent/10 text-accent">
                      <Lightbulb className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-primary">The Innovation</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground font-light">
                    {fellow.appDescription}
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Journey */}
                  <section className="bg-white p-6 rounded-xl border border-border/40 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-full bg-secondary text-secondary-foreground">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-lg">The Journey</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {fellow.bio}
                    </p>
                  </section>

                  {/* Impact */}
                  <section className="bg-white p-6 rounded-xl border border-border/40 shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-full bg-green-100 text-green-700">
                        <TrendingUp className="w-4 h-4" />
                      </div>
                      <h4 className="font-serif font-bold text-lg">The Impact</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {fellow.impact}
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
