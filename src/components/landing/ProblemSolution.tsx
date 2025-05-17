
import { WifiOff, Video, AlertTriangle, DollarSign, Smile } from "lucide-react"; // Added AlertTriangle, DollarSign, Smile

const ProblemSolution = () => {
  const problems = [
    {
      icon: WifiOff,
      title: "WiFi cai quando enche o evento",
      description: "Redes sobrecarregadas geram frustração, perda de leads e impactam diretamente seus resultados."
    },
    {
      icon: Video, // Using Video icon for streaming issues
      title: "Streaming Trava no Meio da Palestra",
      description: "Apresentações interrompidas e transmissões de baixa qualidade prejudicam a experiência do seu evento."
    },
    {
      icon: DollarSign, // Using DollarSign for cost issues
      title: "Valores abusivos e fora da realidade",
      description: "Ta cansado de pagar caro por algo que não te dá retorno? A gente entende e resolve isso pra você!"
    }
  ];

  const solutions = [
    "FWA 5G dedicado com banda garantida",
    "Redundância automática em caso de falha",
    "Equipamentos de rede profissionais", // Updated
    "Entrega plug-and-play, configurada e testada",
    "Monitoramento proativo em tempo real",
    "Suporte técnico especializado no local",
    "Acesso direto à nossa equipe técnica especializada" // Added
  ];

  return <div className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Problems Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-legal-purple">
              <div className="h-12 w-12 bg-legal-purple/10 rounded-full flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-legal-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-left">{problem.title}</h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>)}
        </div>

        {/* Solution Section */}
        <div className="bg-gradient-to-r from-legal-blue to-legal-purple text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Com a LEGAL isso NÃO acontece</h2>
          
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
            {solutions.map((solution, index) => <div key={index} className="flex items-center">
                <div className="h-6 w-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>{solution}</span>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default ProblemSolution;
