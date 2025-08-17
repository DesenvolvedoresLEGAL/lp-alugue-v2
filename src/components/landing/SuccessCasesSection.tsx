import { Star, Users, Gauge, CheckCircle } from "lucide-react";

const SuccessCasesSection = () => {
  const cases = [
    {
      event: "Naturaltech 2025",
      participants: "12.000+",
      uptime: "100%",
      highlight: "Zero falhas durante 3 dias",
      description: "Feira de cosméticos naturais com transmissão ao vivo de palestras e demonstrações de produtos para mais de 50 mil visualizações online.",
      metrics: [
        { label: "Visitantes", value: "12.000+" },
        { label: "Uptime", value: "100%" },
        { label: "Largura dedicada", value: "1 Gbps" }
      ]
    },
    {
      event: "Apas Show 2025",
      participants: "8.500",
      uptime: "99.98%",
      highlight: "Upload 400 Mbps para streaming",
      description: "Evento híbrido de negócios com múltiplas salas simultâneas, streaming 4K e sistema de credenciamento digital integrado.",
      metrics: [
        { label: "Upload dedicado", value: "400 Mbps" },
        { label: "Streams simultâneos", value: "6" },
        { label: "Credenciamentos", value: "8.500" }
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