import { useState } from "react";
import { fellows, contextData, Fellow } from "@/lib/fellows-data";
import { FellowCard } from "@/components/fellow-card";
import { FellowModal } from "@/components/fellow-modal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

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
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight">
              CIOB AI Innovator Fellows
            </h1>
            <p className="text-xl md:text-2xl font-light text-primary-foreground/80 max-w-2xl mx-auto font-serif italic">
              "Empowering educators to reimagine learning through artificial intelligence."
            </p>
          </motion.div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 -mt-10 relative z-20">
        <Tabs defaultValue="All" className="space-y-12">
          <div className="flex justify-center">
            <TabsList className="bg-white/80 backdrop-blur shadow-sm p-1 h-auto flex-wrap justify-center border border-border/40 rounded-full">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full px-6 py-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground font-serif transition-all"
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
      <footer className="bg-white border-t border-border/40 py-12 mt-20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="font-serif">© 2026 CIOB AI Innovator Fellows Program</p>
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
