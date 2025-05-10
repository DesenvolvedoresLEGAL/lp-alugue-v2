
import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  const benefits = [
    "Suporte técnico 24/7 em português",
    "Redundância automática com 4G em caso de falha",
    "Equipamentos profissionais próprios (não alugados)",
    "Monitoramento em tempo real da rede",
    "Técnico dedicado para eventos maiores",
    "Dashboard com métricas de uso e performance"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="bg-gradient-to-br from-legal-purple to-legal-blue text-white rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 md:p-12">
              <div className="flex items-center mb-6">
                <ShieldCheck className="h-10 w-10 mr-4" />
                <h2 className="text-2xl md:text-3xl font-bold">Garantia LEGAL</h2>
              </div>
              
              <p className="text-xl mb-6">
                Se sua internet ficar offline por mais de 1 minuto durante seu evento, 
                devolvemos 100% do seu investimento.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Por que podemos oferecer esta garantia?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg 
                      className="h-5 w-5 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>Usamos tecnologia FWA 5G dedicada</span>
                  </li>
                  <li className="flex items-center">
                    <svg 
                      className="h-5 w-5 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>Sistemas com múltiplas redundâncias</span>
                  </li>
                  <li className="flex items-center">
                    <svg 
                      className="h-5 w-5 mr-2 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span>99.99% de uptime nos últimos 1.200+ eventos</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white/5 p-8 md:p-12">
              <h3 className="text-xl font-bold mb-6">O que está incluído em todos os planos:</h3>
              
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      className="h-6 w-6 text-legal-cyan mr-3 flex-shrink-0" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                      />
                    </svg>
                    <span className="text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuaranteeSection;
