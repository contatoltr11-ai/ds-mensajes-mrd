import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
    <div
      className="w-full flex flex-col bg-background overflow-hidden"
      style={{ height: '100dvh' }}
    >
      {/* Barra superior: apenas a seta de voltar */}
      <div className="flex items-center px-4 h-14 shrink-0 border-b border-border bg-card">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Volver</span>
        </button>
      </div>

      {/* Conteúdo: ocupa o resto da tela e sobe a base */}
      <div
        className="flex-1 min-h-0 w-full"
        style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 64px)' }}
      >
        <iframe
          src={DIAGNOSTICO_URL}
          title="Diagnóstico de Ruptura"
          className="w-full h-full block"
          style={{ border: 'none' }}
          allow="clipboard-write; fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Module3Dashboard;