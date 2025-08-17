import { CheckCircle, MapPin, Shield, Gauge, Users, Settings, Headphones } from "lucide-react";

const TechnicalChecklistSection = () => {
  const checklist = [
    {
      icon: <MapPin className="h-6 w-6 text-legal-cyan" />,
      title: "Site Survey Técnico",
      description: "Análise prévia do local para identificar melhor posicionamento dos equipamentos e cobertura 5G"
    },
    {
      icon: <Shield className="h-6 w-6 text-legal-cyan" />,
      title: "Redundância Automática",
      description: "Sistema de failover com múltiplas operadoras e backup 4G/4.5G em caso de instabilidade"
    },
    {
      icon: <Gauge className="h-6 w-6 text-legal-cyan" />,
      title: "Testes de Carga",
      description: "Simulação de pico de acesso com o número esperado de usuários simultâneos"
    },
    {
      icon: <Users className="h-6 w-6 text-legal-cyan" />,
      title: "Dimensionamento de Banda",
      description: "Cálculo preciso da largura necessária baseado no perfil de uso e atividades do evento"
    },
    {
      icon: <Settings className="h-6 w-6 text-legal-cyan" />,
      title: "Configuração QoS",
      description: "Priorização de tráfego para streaming, videoconferência e sistemas críticos do evento"
    },
    {
      icon: <Headphones className="h-6 w-6 text-legal-cyan" />,
      title: "Monitoramento 24/7",
      description: "Supervisão contínua da rede com alertas automáticos e equipe técnica de plantão"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-legal-cyan" />,
      title: "Homologação Prévia",
      description: "Testes completos 24h antes do evento para validar toda a infraestrutura instalada"
    },
    {
      icon: <Shield className="h-6 w-6 text-legal-cyan" />,
      title: "Contingência Ativa",
      description: "Plano de ação imediato com equipamentos sobressalentes e rotas alternativas de conectividade"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como garantir internet estável em evento híbrido
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Checklist técnico completo que seguimos para assegurar conectividade perfeita
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checklist.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-legal-cyan">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-legal-cyan/10 p-2 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-legal-blue mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee Section */}
        <div className="bg-legal-blue rounded-2xl p-8 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Garantia de Performance LEGAL
            </h3>
            <p className="text-legal-cyan/90 text-lg mb-6">
              Se sua internet falhar por mais de 60 minutos durante o evento, devolvemos 100% do investimento
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-cyan">99.9%</div>
                <div className="text-sm">SLA Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-cyan">24/7</div>
                <div className="text-sm">Suporte Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-legal-cyan">100%</div>
                <div className="text-sm">Devolução</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalChecklistSection;