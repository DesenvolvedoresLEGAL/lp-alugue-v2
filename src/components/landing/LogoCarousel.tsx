
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const clientLogos = [
    { name: "Apas Show", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/APAS-SHOW.webp" },
    { name: "NaturalTech", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/NATURAL-TECH.webp" },
    { name: "Exposec", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/EXPOSEC.webp" },
    { name: "Bienal do Livro", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/BIENAL.webp" },
    { name: "Feicon", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/FEICON.webp" },
    { name: "CIOSP", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/CIOSP.webp" },
    { name: "Beauty Fair", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/BEUTY-FAIR.webp" },
    { name: "Futurecom", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/FUTURECOM.webp" },
    { name: "Feira do Empreendedor", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/FE25.webp" },
    { name: "CCXP", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/CCXP.webp" },
    { name: "Fispal", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/FISPAL.webp" },
    { name: "Eletrolar Show", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/ES25.webp" },
    { name: "Fórum Ecommerce Brasil", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/FORUM.webp" },
    { name: "BGS", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/BGS.webp" },
    // Repeating for smooth carousel
    { name: "Apas Show", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/APAS-SHOW.webp" },
    { name: "NaturalTech", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/NATURAL-TECH.webp" },
    { name: "Exposec", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/EXPOSEC.webp" },
    { name: "Bienal do Livro", logo: "http://alugue.operadora.legal/wp-content/uploads/2025/05/BIENAL.webp" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">+2.000 eventos já confiam</h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-carousel">
            {clientLogos.map((client, index) => (
              <div key={`logo-set1-${index}`} className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  title={client.name} 
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300" 
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    console.log(`Failed to load logo for ${client.name}, using placeholder`);
                  }}
                />
              </div>
            ))}
            {/* Duplicate set of logos for infinite scroll effect - ensuring enough items for a smooth loop */}
            {clientLogos.map((client, index) => (
              <div key={`logo-set2-${index}`} className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  title={client.name} 
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300" 
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    console.log(`Failed to load logo for ${client.name}, using placeholder`);
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;
