
import { Phone, WifiIcon, Activity } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Phone,
      title: "Briefing Rápido",
      description: "Uma chamada de apenas 10 minutos para entendermos as necessidades específicas do seu evento."
    },
    {
      icon: WifiIcon,
      title: "Instalação Expressa",
      description: "Nosso técnico chega ao local e em apenas 1 hora seu evento já estará 100% conectado."
    },
    {
      icon: Activity,
      title: "Evento 100% Online",
      description: "Monitoramento em tempo real da qualidade da rede e suporte técnico durante todo o evento."
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Funciona em 3 Passos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Processo simples, rápido e eficiente para garantir a internet perfeita para o seu evento
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative bg-white p-8 rounded-lg shadow-md border border-gray-100"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-10">
                  <svg 
                    className="h-8 w-8 text-legal-purple" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M14 5l7 7m0 0l-7 7m7-7H3" 
                    />
                  </svg>
                </div>
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 bg-legal-purple/10 rounded-full flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-legal-purple" />
                </div>
                
                <div className="bg-legal-purple text-white text-sm font-bold py-1 px-3 rounded-full mb-4">
                  Passo {index + 1}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
