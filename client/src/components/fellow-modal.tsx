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
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 border-none shadow-2xl bg-[#fafafa] overflow-y-auto md:overflow-hidden block">
        <div className="flex flex-col md:grid md:grid-cols-[300px_1fr] md:h-full">
          {/* Sidebar */}
          <div className="bg-primary/5 p-8 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-border/50 md:overflow-y-auto shrink-0">
            <div className="flex flex-col items-center text-center gap-4">
              <Avatar className="h-32 w-32 border-4 border-background shadow-xl">
                 <AvatarImage src={fellow.photoUrl || `https://api.dicebear.com/7.x/initials/svg?seed=${fellow.name}&backgroundColor=e5e7eb&textColor=374151`} className="object-cover" />
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
          <div className="p-8 space-y-8 md:overflow-y-auto md:h-full">
              {/* Video/Image Section */}
              <div className={`w-full rounded-xl overflow-hidden shadow-lg group relative ${fellow.coverStyle === 'contain-navy' && !fellow.videoUrl ? 'bg-[#002044] flex items-center justify-center aspect-video' : 'bg-black/5'}`}>
                {fellow.videoUrl ? (
                   <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.25%', overflow: 'hidden', backgroundColor: 'transparent', backgroundImage: "url(\"data:image/svg+xml;charset=utf8,%3Csvg version='1.1' id='loader-1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='40px' viewBox='0 0 40 40' enable-background='new 0 0 40 40' xml:space='preserve'%3E%3Cpath opacity='0.2' fill='%23000' d='M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946 s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634 c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z'/%3E%3Cpath fill='%23fff' d='M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0 C22.32,8.481,24.301,9.057,26.013,10.047z'%3E%3CanimateTransform attributeType='xml' attributeName='transform' type='rotate' from='0 20 20' to='360 20 20' dur='0.75s' repeatCount='indefinite'/%3E%3C/path%3E%3C/svg%3E\")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                    <iframe
                      style={{ background: 'transparent', position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', zIndex: 1 }}
                      src={fellow.videoUrl}
                      title="Fellow Journey Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : fellow.coverImage ? (
                  <img 
                    src={fellow.coverImage} 
                    alt="Project Cover" 
                    className={fellow.coverStyle === 'contain-navy' ? "w-1/2 h-1/2 object-contain opacity-90" : "w-full h-full object-cover aspect-video"}
                  />
                ) : null}
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
        </div>
      </DialogContent>
    </Dialog>
  );
}
