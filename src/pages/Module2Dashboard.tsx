import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getUser, isAuthenticated, isOnboardingComplete } from '@/lib/storage';

const Module2Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated()) {
      navigate('/');
      return;
    }
    
    if (!isOnboardingComplete()) {
      navigate('/onboarding');
      return;
    }
  }, [navigate]);

  const user = getUser();
  if (!user) return null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 flex flex-col">
        <div className="flex-1 flex flex-col">
          {/* Welcome Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="container mx-auto px-4 py-6"
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold mb-1">
              Protocolo 89: Scripts Exactos
            </h1>
            <p className="text-muted-foreground">
              Tu guía completa de scripts probados
            </p>
          </motion.div>

          {/* Iframe Container */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-1 container mx-auto px-4 pb-6"
          >
            <div className="w-full h-full bg-card rounded-xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://scriptsexatos.vercel.app"
                className="w-full h-full border-0"
                style={{ minHeight: '800px', height: 'calc(100vh - 280px)' }}
                title="Protocolo 89 - Scripts Exactos"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Module2Dashboard;