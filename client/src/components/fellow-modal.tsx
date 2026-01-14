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
import { Button } from "@/components/ui/button";
import { Fellow } from "@/lib/fellows-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote, School, Lightbulb, TrendingUp, BookOpen, QrCode, ExternalLink, AlertCircle } from "lucide-react";

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

  // Truncate bio for sidebar
  const shortBio = fellow.bio && fellow.bio.length > 200 
    ? fellow.bio.substring(0, 200) + "..." 
    : fellow.bio;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden border-none shadow-2xl bg-[#fafafa]">
        <div className="grid md:grid-cols-[300px_1fr] h-full max-h-[90vh]">
          {/* Sidebar */}
          <div className="bg-primary/5 p-8 flex flex-col gap-6 border-r border-border/50 overflow-y-auto">
            <div className="flex flex-col items-center text-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                 <AvatarImage src={fellow.photoUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${fellow.name}&backgroundColor=e5e7eb&textColor=374151`} />
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

            {/* Educator Bio Short */}
            <div className="space-y-2">
               <h4 className="font-serif font-bold text-sm text-primary/80 uppercase tracking-widest text-xs">About</h4>
               <p className="text-sm text-muted-foreground leading-relaxed">
                 {shortBio}
               </p>
            </div>

            <Separator className="bg-primary/10" />

            {/* App Link Section */}
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-border shadow-sm flex flex-col items-center gap-3">
                 <div className="w-32 h-32 bg-primary/5 rounded-lg flex items-center justify-center overflow-hidden">
                    {fellow.qrCode ? (
                      <img src={fellow.qrCode} alt="App QR Code" className="w-full h-full object-cover" />
                    ) : (
                      <QrCode className="w-20 h-20 text-primary/20" />
                    )}
                 </div>
                 <Button 
                   className="w-full bg-accent hover:bg-accent/90 text-white font-medium group" 
                   asChild
                 >
                   <a href={fellow.playlabUrl} target="_blank" rel="noopener noreferrer">
                     View App <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                   </a>
                 </Button>
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
                  <p className="text-lg leading-relaxed text-muted-foreground font-light mb-6">
                    {fellow.appDescription}
                  </p>

                  {/* Why this is important */}
                  <div className="bg-blue-50/50 p-5 rounded-lg border-l-4 border-accent">
                     <div className="flex items-center gap-2 mb-2 text-accent-foreground/80">
                        <AlertCircle className="w-4 h-4" />
                        <h4 className="font-bold text-sm uppercase tracking-wide">Why This Matters</h4>
                     </div>
                     <p className="text-base text-foreground/80 leading-relaxed italic">
                        {fellow.importance}
                     </p>
                  </div>
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
