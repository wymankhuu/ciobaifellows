import { useState } from "react";
import { fellows, contextData, broadContext, programDetails, Fellow } from "@/lib/fellows-data";
import { FellowCard } from "@/components/fellow-card";
import { FellowModal } from "@/components/fellow-modal";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Users, ArrowRight, BookOpenCheck, School, Network, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import images directly
import img5922 from "@assets/IMG_5922_1768318177323.jpg";
import img6404 from "@assets/IMG_6404_1768318179239.jpg";
import ciobLogo from "@assets/ciob_logo-removebg-preview_1768420327507.png";
import playlabLogo from "@assets/Playlab_Logo_1768428941734.png";
import mapImage from "@assets/CleanShot_2026-01-14_at_18.26.30@2x_1768433206691.png";
import libraryImage from "@assets/CleanShot_2026-01-14_at_18.38.01@2x_1768433891949.png";

export default function Home() {
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFellowClick = (fellow: Fellow) => {
    setSelectedFellow(fellow);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <header className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-8">
              <img 
                src={ciobLogo} 
                alt="CIOB Logo" 
                className="h-32 md:h-40 w-auto drop-shadow-xl"
              />
            </div>

            <div className="flex items-center justify-center gap-2 mb-4">
               <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium border border-accent/20">
                 Cohorts 2025-2026
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              CIOB AI Design Fellows
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary-foreground/80 max-w-2xl mx-auto font-serif italic mb-8">
              "Does this use of AI deepen thinking, or does it flatten it?"
            </p>
          </motion.div>
        </div>
      </header>

      {/* Program Context Section with Photos */}
      <section className="bg-white py-20 border-b border-border/40">
        <div className="container mx-auto px-4">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
             <div className="space-y-8">
                <h2 className="text-4xl font-serif font-bold text-primary">{broadContext.title}</h2>
                <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                   <p>{broadContext.description}</p>
                   <p className="font-medium text-foreground border-l-4 border-accent pl-4 italic">
                     {broadContext.mission}
                   </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                   <div className="p-4 bg-[#faf9f6] rounded-lg border border-border/50">
                     <BrainCircuit className="w-6 h-6 text-accent mb-2" />
                     <h3 className="font-bold text-primary">Deep Thinking</h3>
                     <p className="text-sm text-muted-foreground mt-1">Tools that require patience and judgment.</p>
                   </div>
                   <div className="p-4 bg-[#faf9f6] rounded-lg border border-border/50">
                     <Users className="w-6 h-6 text-accent mb-2" />
                     <h3 className="font-bold text-primary">Teacher-Centered</h3>
                     <p className="text-sm text-muted-foreground mt-1">Empowering educators to design solutions.</p>
                   </div>
                </div>
             </div>

             <div className="relative">
                <div className="absolute -inset-4 bg-accent/10 rounded-2xl rotate-3"></div>
                <div className="relative grid gap-4">
                   <img 
                     src={img5922} 
                     alt="Fellows collaborating" 
                     className="rounded-xl shadow-lg w-full h-64 object-cover"
                   />
                   <div className="flex gap-4">
                      <img 
                        src={img6404} 
                        alt="Classroom activity" 
                        className="rounded-xl shadow-lg w-1/2 h-48 object-cover"
                      />
                      <img 
                        src={libraryImage} 
                        alt="Library session" 
                        className="rounded-xl shadow-lg w-1/2 h-48 object-cover"
                      />
                   </div>
                </div>
             </div>
          </div>

          <Separator className="my-16" />

          {/* Program Details Section */}
          <div className="max-w-5xl mx-auto text-center mb-12">
             <h2 className="text-3xl font-serif font-bold text-primary mb-6">{programDetails.title}</h2>
             <p className="text-xl text-muted-foreground font-light max-w-3xl mx-auto mb-12">
               {programDetails.description}
             </p>

             <div className="grid md:grid-cols-3 gap-8 text-left">
                {programDetails.commitments.map((item, i) => (
                  <Card key={i} className="border-none shadow-md bg-[#faf9f6]">
                    <CardContent className="pt-6">
                       <div className="mb-4 p-3 bg-white rounded-full w-fit shadow-sm text-accent">
                          {i === 0 ? <PenTool className="w-6 h-6" /> : 
                           i === 1 ? <Network className="w-6 h-6" /> : 
                           <BookOpenCheck className="w-6 h-6" />}
                       </div>
                       <h3 className="text-lg font-bold font-serif text-primary mb-3">{item.title}</h3>
                       <p className="text-muted-foreground leading-relaxed text-sm">
                         {item.description}
                       </p>
                    </CardContent>
                  </Card>
                ))}
             </div>
          </div>

        </div>
      </section>

      <main className="container mx-auto px-4 py-12 relative z-20">
        
        {/* CIOB & Networks Context Section - Compact */}
        <div className="mb-16 space-y-8">
           <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center bg-white p-6 rounded-2xl shadow-sm border border-border/40">
              <div className="relative flex justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-2 max-w-xs mx-auto"></div>
                  <img 
                    src={mapImage} 
                    alt="Map of CIOB Schools" 
                    className="relative rounded-xl shadow-md border border-border/50 w-full max-w-xs mx-auto"
                  />
              </div>
              <div className="space-y-4">
                 <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-serif font-bold text-primary">A Partnership for Deep Learning</h2>
                    <a 
                      href="https://sites.google.com/schools.nyc.gov/ciob-citywide/home?authuser=0" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-accent hover:text-accent/80 flex items-center gap-1 transition-colors"
                    >
                      Visit CIOB Website <ArrowRight className="w-4 h-4" />
                    </a>
                 </div>
                 <p className="text-muted-foreground leading-relaxed text-sm">
                   CIOB brings together three distinct yet aligned school networks—Consortium, International, and NYC Outward Bound—united by a commitment to performance-based assessment and student-centered learning. Across these schools, educators prioritize inquiry, critical thinking, and authentic demonstrations of mastery over standardized testing.
                 </p>
                 
                 {/* Network Cards - Compact Row */}
                 <div className="grid md:grid-cols-3 gap-4 pt-2">
                    {/* Consortium */}
                    <div className="bg-orange-50/50 p-4 rounded-lg border border-orange-200/60">
                      <h3 className="text-sm font-bold text-orange-900 mb-1">{contextData.consortium.title}</h3>
                      <p className="text-xs text-orange-900/80 leading-snug line-clamp-3 hover:line-clamp-none transition-all">{contextData.consortium.description}</p>
                    </div>

                    {/* International */}
                    <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-200/60">
                      <h3 className="text-sm font-bold text-blue-900 mb-1">{contextData.international.title}</h3>
                      <p className="text-xs text-blue-900/80 leading-snug line-clamp-3 hover:line-clamp-none transition-all">{contextData.international.description}</p>
                    </div>

                    {/* Outward Bound */}
                    <div className="bg-emerald-50/50 p-4 rounded-lg border border-emerald-200/60">
                      <h3 className="text-sm font-bold text-emerald-900 mb-1">{contextData.outwardBound.title}</h3>
                      <p className="text-xs text-emerald-900/80 leading-snug line-clamp-3 hover:line-clamp-none transition-all">{contextData.outwardBound.description}</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-3">Some of the Work So Far</h2>
          <p className="text-muted-foreground text-lg mb-3">Meet the Fellows & Explore their Prototypes</p>
          <p className="text-xs font-bold text-accent uppercase tracking-widest border-t border-b border-accent/20 py-2 inline-block px-4">
             More to come throughout the fellowship
          </p>
        </div>

        {/* Fellows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fellows.map((fellow) => (
            <FellowCard 
              key={fellow.id} 
              fellow={fellow} 
              onClick={handleFellowClick} 
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center space-y-8">
          <p className="font-serif text-xl italic">"AI should strengthen the parts of learning that require patience, judgment, reflection, and conversation."</p>
          
          {/* Playlab Logo */}
          <div className="flex justify-center">
            <a href="https://playlab.ai" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img src={playlabLogo} alt="Playlab" className="h-8 w-auto" />
            </a>
          </div>

          <p className="text-sm opacity-60 font-sans">© 2026 CIOB AI Design Fellows Program • NYC Public Schools</p>
        </div>
      </footer>

      <FellowModal 
        fellow={selectedFellow} 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
      />
    </div>
  );
}