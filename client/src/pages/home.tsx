import { useState } from "react";
import { fellows, contextData, broadContext, Fellow } from "@/lib/fellows-data";
import { FellowCard } from "@/components/fellow-card";
import { FellowModal } from "@/components/fellow-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { BrainCircuit, Sparkles, Users } from "lucide-react";

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

      {/* Mission Context Section */}
      <section className="bg-white py-16 border-b border-border/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif font-bold text-primary">{broadContext.title}</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              {broadContext.description}
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="p-6 bg-[#faf9f6] rounded-xl border border-border/50">
                <BrainCircuit className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Deep Thinking</h3>
                <p className="text-sm text-muted-foreground">Focusing on tools that require patience, judgment, and reflection rather than shortcuts.</p>
              </div>
              <div className="p-6 bg-[#faf9f6] rounded-xl border border-border/50">
                <Users className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Teacher-Centered</h3>
                <p className="text-sm text-muted-foreground">Empowering educators to design the tools they actually need for their specific classrooms.</p>
              </div>
              <div className="p-6 bg-[#faf9f6] rounded-xl border border-border/50">
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-serif font-bold text-lg mb-2">Authentic Innovation</h3>
                <p className="text-sm text-muted-foreground">From "Near Peer Feedback" to "PBL Design Co-Pilots", tools born from real dilemmas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 relative z-20">
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
