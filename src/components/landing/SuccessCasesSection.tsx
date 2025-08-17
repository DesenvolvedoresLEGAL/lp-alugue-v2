import { Star, Users, Gauge, CheckCircle } from "lucide-react";

const SuccessCasesSection = () => {
  const cases = [
    {
      event: "Naturaltech 2025",
      participants: "20",
      uptime: "99%",
      highlight: "Recorde de stands atendidos numa mesma feira",
      description: "A Naturaltech 2025 é a maior feira de negócios da América Latina dedicada exclusivamente a produtos naturais, orgânicos e sustentáveis.",
      metrics: [
        { label: "Stands conectados", value: "20" },
        { label: "Uptime dos links", value: "99%" },
        { label: "Dados trafegados", value: "3TB" }
      ]
    },
    {
      event: "Apas Show 2025",
      participants: "15",
      uptime: "200 Mbps",
      highlight: "Velocidade recorde de 200 megas dentro do Expo Center Norte em horário de pico",
      description: "O maior evento de alimentos e bebidas das Américas e o maior festival supermercadista do mundo.",
      metrics: [
        { label: "Stands conectados", value: "15" },
        { label: "Velocidade dedicada", value: "200 Mbps" },
        { label: "Acessos simultâneos", value: "+500" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Internet temporária para feira de negócios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cases reais de eventos que confiaram na LEGAL para sua conectividade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-legal-blue">{case_.event}</h3>
                <div className="flex items-center bg-legal-cyan/10 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 text-legal-cyan mr-1" />
                  <span className="text-legal-blue font-semibold text-sm">Case de Sucesso</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6">{case_.description}</p>

              <div className="bg-legal-blue/5 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-2">
                  <CheckCircle className="h-5 w-5 text-legal-cyan mr-2" />
                  <span className="font-semibold text-legal-blue">{case_.highlight}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {case_.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="text-center">
                    <div className="text-2xl font-bold text-legal-cyan mb-1">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-legal-blue to-legal-blue/90 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Seja o próximo case de sucesso
            </h3>
            <p className="text-legal-cyan/90 text-lg mb-6">
              Garante internet estável para seu evento e transmissões ao vivo
            </p>
            <button 
              onClick={() => document.getElementById('hero-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-legal-cyan hover:bg-legal-cyan/90 text-legal-blue font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCasesSection;