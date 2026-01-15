import { useState } from "react";
import { fellows, contextData, broadContext, programDetails, programRationale, Fellow } from "@/lib/fellows-data";
import { FellowCard } from "@/components/fellow-card";
import { FellowModal } from "@/components/fellow-modal";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Users, ArrowRight, BookOpenCheck, School, Network, PenTool, Lightbulb, Globe, Compass } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <style>{`html { scroll-behavior: smooth; }`}</style>
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

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mt-12 text-primary-foreground/80 font-medium tracking-wide text-sm md:text-base uppercase">
              <a href="#context" className="hover:text-white hover:scale-105 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Context
              </a>
              <a href="#program" className="hover:text-white hover:scale-105 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Program Design
              </a>
              <a href="#fellows" className="hover:text-white hover:scale-105 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                The Fellows
              </a>
              <a href="#about" className="hover:text-white hover:scale-105 transition-all flex items-center gap-2 group">
                <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About CIOB
              </a>
            </nav>
          </motion.div>
        </div>
      </header>

      {/* Program Context Section with Photos */}
      <section className="bg-white py-20 border-b border-border/40">
        <div className="container mx-auto px-4">
          
          <div id="context" className="grid lg:grid-cols-2 gap-16 items-center mb-20 scroll-mt-24">
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

          {/* Program Design and Rationale & Timeline Combined */}
          <div id="program" className="max-w-7xl mx-auto mb-16 scroll-mt-24">
             <div className="text-center max-w-4xl mx-auto mb-10">
               <h2 className="text-3xl font-serif font-bold text-primary mb-4">{programRationale.title}</h2>
               <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                 {programRationale.description}
               </p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                {programDetails.timeline.map((item, i) => {
                  // Cycle through brand colors for the cards
                  const colorStyles = [
                    "border-l-4 border-l-orange-500 bg-orange-50/30",
                    "border-l-4 border-l-blue-500 bg-blue-50/30",
                    "border-l-4 border-l-emerald-500 bg-emerald-50/30",
                    "border-l-4 border-l-purple-500 bg-purple-50/30"
                  ];
                  const numberColors = [
                    "text-orange-200",
                    "text-blue-200",
                    "text-emerald-200",
                    "text-purple-200"
                  ];
                  
                  return (
                    <Card key={i} className={`border-y-0 border-r-0 shadow-sm hover:shadow-md transition-shadow h-full ${colorStyles[i % 4]}`}>
                      <CardContent className="pt-6 flex flex-col h-full">
                         <div className="flex justify-between items-start mb-4 border-b border-black/5 pb-4">
                           <span className={`text-5xl font-serif font-bold leading-none -mt-2 ${numberColors[i % 4]}`}>0{item.session}</span>
                         </div>
                         <div className="flex-1">
                           <h3 className="text-lg font-bold font-serif text-primary mb-3 leading-tight min-h-[3rem]">{item.title}</h3>
                           <p className="text-muted-foreground leading-relaxed text-sm">
                             {item.description}
                           </p>
                         </div>
                      </CardContent>
                    </Card>
                  );
                })}
             </div>
          </div>

        </div>
      </section>

      <main className="container mx-auto px-4 py-12 relative z-20">
        
        <div id="fellows" className="text-center mb-12 scroll-mt-24">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Some of the Work so Far</h2>
          <p className="text-muted-foreground text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Explore what the Design Fellows are building for their unique school contexts. Read about their work, test their apps, and see how they are designing for deeper thinking and greater agency.
          </p>
          <p className="text-xs font-bold text-accent uppercase tracking-widest border-t border-b border-accent/20 py-2 inline-block px-4">
             More to come
          </p>
        </div>

        {/* Fellows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {fellows.map((fellow) => (
            <FellowCard 
              key={fellow.id} 
              fellow={fellow} 
              onClick={handleFellowClick} 
            />
          ))}
        </div>

        {/* CIOB & Networks Context Section - Expanded */}
        <div id="about" className="mb-20 scroll-mt-24">
           <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold text-primary mb-4">About the CIOB</h2>
              <a 
                href="https://sites.google.com/schools.nyc.gov/ciob-citywide/home?authuser=0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
              >
                Visit CIOB Website <ArrowRight className="w-4 h-4" />
              </a>
           </div>

           <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div className="relative flex justify-center order-2 lg:order-1">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-2 max-w-md mx-auto"></div>
                  <img 
                    src={mapImage} 
                    alt="Map of CIOB Schools" 
                    className="relative rounded-2xl shadow-lg border border-border/50 w-full max-w-md mx-auto"
                  />
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   CIOB brings together three distinct yet aligned school networks—Consortium, International, and NYC Outward Bound—united by a commitment to performance-based assessment and student-centered learning.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Across these schools, educators prioritize inquiry, critical thinking, and authentic demonstrations of mastery over standardized testing.
                 </p>
              </div>
           </div>

           {/* Network Cards */}
           <div className="grid md:grid-cols-3 gap-6">
              {/* Consortium */}
              <div className="bg-orange-50/50 p-6 rounded-xl border border-orange-200/60 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-orange-100/50 rounded-full mb-4 text-orange-600">
                  <BookOpenCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-orange-900 mb-3">{contextData.consortium.title}</h3>
                <p className="text-sm text-orange-900/80 leading-relaxed">{contextData.consortium.description}</p>
              </div>

              {/* International */}
              <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-200/60 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-blue-100/50 rounded-full mb-4 text-blue-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-blue-900 mb-3">{contextData.international.title}</h3>
                <p className="text-sm text-blue-900/80 leading-relaxed">{contextData.international.description}</p>
              </div>

              {/* Outward Bound */}
              <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-200/60 hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center p-3 bg-emerald-100/50 rounded-full mb-4 text-emerald-600">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-emerald-900 mb-3">{contextData.outwardBound.title}</h3>
                <p className="text-sm text-emerald-900/80 leading-relaxed">{contextData.outwardBound.description}</p>
              </div>
           </div>
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