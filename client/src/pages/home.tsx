import { useState } from "react";
import { fellows, contextData, broadContext, programDetails, Fellow } from "@/lib/fellows-data";
import { FellowCard } from "@/components/fellow-card";
import { FellowModal } from "@/components/fellow-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Users, ArrowRight, BookOpenCheck, School, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Import images directly
import img5922 from "@assets/IMG_5922_1768318177323.jpg";
import img6404 from "@assets/IMG_6404_1768318179239.jpg";

export default function Home() {
  const [selectedFellow, setSelectedFellow] = useState<Fellow | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleFellowClick = (fellow: Fellow) => {
    setSelectedFellow(fellow);
    setModalOpen(true);
  };

  const categories = ["All", "Consortium", "International", "Outward Bound", "District/Other"];

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
            <div className="flex items-center justify-center gap-2 mb-4">
               <span className="px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium border border-accent/20">
                 Cohorts 2025-2026
               </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              CIOB AI Innovator Fellows
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
                          {i === 0 ? <Sparkles className="w-6 h-6" /> : 
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-primary mb-4">Meet the Fellows</h2>
          <p className="text-muted-foreground">Explore the innovators across our diverse school networks.</p>
        </div>

        <Tabs defaultValue="All" className="space-y-12">
          <div className="flex justify-center sticky top-4 z-30">
            <TabsList className="bg-white/90 backdrop-blur-md shadow-lg p-1 h-auto flex-wrap justify-center border border-primary/10 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-serif transition-all"
                >
                  {category === "District/Other" ? "District Partners" : category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => {
            const filteredFellows = category === "All" 
              ? fellows 
              : fellows.filter(f => f.category === category);
            
            // Map category to context data key
            const contextKey = category === "Consortium" ? "consortium" 
              : category === "International" ? "international"
              : category === "Outward Bound" ? "outwardBound"
              : null;
              
            const context = contextKey ? contextData[contextKey] : null;

            return (
              <TabsContent key={category} value={category} className="space-y-10 focus-visible:outline-none">
                {/* Context Section (if applicable) */}
                {context && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto text-center space-y-4 bg-white p-8 rounded-2xl shadow-sm border border-border/40"
                  >
                    <h2 className="text-3xl font-serif text-primary">{context.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {context.description}
                    </p>
                  </motion.div>
                )}

                {/* Fellows Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredFellows.map((fellow) => (
                    <FellowCard 
                      key={fellow.id} 
                      fellow={fellow} 
                      onClick={handleFellowClick} 
                    />
                  ))}
                </div>

                {filteredFellows.length === 0 && (
                   <div className="text-center py-20 text-muted-foreground font-serif italic">
                     No fellows found in this category.
                   </div>
                )}
              </TabsContent>
            );
          })}
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-white/10 py-12 mt-20">
        <div className="container mx-auto px-4 text-center space-y-4">
          <p className="font-serif text-xl italic">"AI should strengthen the parts of learning that require patience, judgment, reflection, and conversation."</p>
          <p className="text-sm opacity-60 font-sans">© 2026 CIOB AI Innovator Fellows Program • NYC Public Schools</p>
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
