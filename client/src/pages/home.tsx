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
                      <div className="w-1/2 bg-primary p-6 rounded-xl flex flex-col justify-center items-center text-center text-primary-foreground">
                         <span className="text-4xl font-serif font-bold mb-2">30+</span>
                         <span className="text-sm uppercase tracking-wider opacity-80">Fellows Leading Innovation</span>
                      </div>
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

      <main className="container mx-auto px-4 py-16 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet the Fellows</h2>
          <p className="text-muted-foreground">Explore the innovators across our diverse school networks.</p>
        </div>

        {/* CIOB & Networks Context Section */}
        <div className="mb-20 space-y-16">
           <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative flex justify-center">
                  <div className="absolute inset-0 bg-accent/5 rounded-3xl transform -rotate-2 max-w-md mx-auto"></div>
                  <img 
                    src={mapImage} 
                    alt="Map of CIOB Schools" 
                    className="relative rounded-2xl shadow-lg border border-border/50 w-full max-w-md mx-auto"
                  />
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                 <h2 className="text-4xl font-serif font-bold text-primary">A Partnership for Deep Learning</h2>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   CIOB brings together three distinct yet aligned school networks—Consortium, International, and NYC Outward Bound—united by a commitment to performance-based assessment and student-centered learning.
                 </p>
                 <p className="text-lg text-muted-foreground leading-relaxed">
                   Across these schools, educators prioritize inquiry, critical thinking, and authentic demonstrations of mastery over standardized testing.
                 </p>
              </div>
           </div>

           {/* Network Cards */}
           <div className="grid md:grid-cols-3 gap-8">
              {/* Consortium - Orange Theme */}
              <div className="bg-orange-50/50 p-8 rounded-xl border border-orange-200/60 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-orange-900 mb-4 border-b border-orange-200 pb-3">{contextData.consortium.title}</h3>
                <p className="text-orange-900/80 leading-relaxed">{contextData.consortium.description}</p>
              </div>

              {/* International - Blue Theme */}
              <div className="bg-blue-50/50 p-8 rounded-xl border border-blue-200/60 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-blue-900 mb-4 border-b border-blue-200 pb-3">{contextData.international.title}</h3>
                <p className="text-blue-900/80 leading-relaxed">{contextData.international.description}</p>
              </div>

              {/* Outward Bound - Green Theme */}
              <div className="bg-emerald-50/50 p-8 rounded-xl border border-emerald-200/60 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-serif font-bold text-emerald-900 mb-4 border-b border-emerald-200 pb-3">{contextData.outwardBound.title}</h3>
                <p className="text-emerald-900/80 leading-relaxed">{contextData.outwardBound.description}</p>
              </div>
           </div>
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