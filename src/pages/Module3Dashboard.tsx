import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { isAuthenticated, isOnboardingComplete } from '@/lib/storage';

const DIAGNOSTICO_URL = 'https://ssplan.shop/ds/';

const Module3Dashboard = () => {
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

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 w-full">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <button
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al Dashboard
          </button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <p className="text-sm font-medium text-primary mb-1">MÓDULO 3</p>
            <h1 className="font-display text-2xl md:text-3xl font-bold">
              Diagnóstico de Ruptura
            </h1>
            <p className="text-muted-foreground mt-1">Análisis de Ruptura</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border bg-card shadow-lg"
          >
            <iframe
              src={DIAGNOSTICO_URL}
              title="Diagnóstico de Ruptura"
              className="w-full"
              style={{ height: 'calc(100vh - 320px)', minHeight: '600px', border: 'none' }}
              allow="clipboard-write; fullscreen"
              allowFullScreen
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Module3Dashboard;