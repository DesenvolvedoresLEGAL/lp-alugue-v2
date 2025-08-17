import { CheckCircle, Wifi, Clock, Shield, Gauge, Users } from "lucide-react";

const DifferentialsSection = () => {
  const differentials = [
    {
      icon: <Gauge className="h-8 w-8 text-legal-cyan" />,
      title: "Latência Ultra-Baixa",
      description: "5G dedicado com latência inferior a 20ms vs 80-200ms do Wi-Fi pavilhão",
      highlight: "4× menor latência"
    },
    {
      icon: <Shield className="h-8 w-8 text-legal-cyan" />,
      title: "SLA Garantido",
      description: "99,9% uptime com redundância automática vs sem garantias oficiais",
      highlight: "Garantia LEGAL"
    },
    {
      icon: <Clock className="h-8 w-8 text-legal-cyan" />,
      title: "Instalação Express",
      description: "Configuração completa em até 60 minutos vs 3-7 dias burocráticos",
      highlight: "60 min instalação"
    },
    {
      icon: <Users className="h-8 w-8 text-legal-cyan" />,
      title: "Link Dedicado Temporário",
      description: "Largura de banda exclusiva para streaming ao vivo sem compartilhamento",
      highlight: "100% dedicado"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Internet 5G temporária vs Wi-Fi de pavilhão
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra por que a LEGAL é a escolha inteligente para seu evento corporativo
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {differentials.map((diff, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center mb-4">
                {diff.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{diff.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{diff.description}</p>
              <div className="inline-block bg-legal-cyan/10 text-legal-blue font-semibold px-3 py-1 rounded-full text-xs">
                {diff.highlight}
              </div>
            </div>
          ))}
        </div>

        {/* Mini-graf section */}
        <div className="bg-legal-blue rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Link dedicado temporário para streaming ao vivo
            </h3>
            <p className="text-legal-cyan/90 text-lg">
              Performance garantida mesmo com milhares de participantes conectados
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-legal-cyan mb-2">500+</div>
              <div className="text-sm">Mbps upload dedicado</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-legal-cyan mb-2">10.000+</div>
              <div className="text-sm">Usuários simultâneos</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold text-legal-cyan mb-2">99.9%</div>
              <div className="text-sm">Uptime garantido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;