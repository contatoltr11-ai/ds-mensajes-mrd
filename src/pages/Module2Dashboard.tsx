import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { isAuthenticated, isOnboardingComplete } from '@/lib/storage';

const SCRIPTS_URL = 'https://scriptsexatos.vercel.app';

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

  return (
    <div className="h-screen w-full flex flex-col bg-background overflow-hidden">
      {/* Barra fina superior: só a seta de voltar */}
      <div className="flex items-center px-4 h-14 shrink-0 border-b border-border bg-card">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Volver</span>
        </button>
      </div>

      {/* Conteúdo ocupando todo o restante da tela */}
      <div className="flex-1 min-h-0">
        <iframe
          src={SCRIPTS_URL}
          title="Protocolo 89 - Scripts Exactos"
          className="w-full h-full"
          style={{ border: 'none' }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Module2Dashboard;