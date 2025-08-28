
import { motion } from "framer-motion";

const LogoCarousel = () => {
  // Core unique logos without duplicates
  const coreLogos = [
    { name: "Apas Show", logo: "./assets/APAS-SHOW.webp", priority: true },
    { name: "NaturalTech", logo: "./assets/NATURAL-TECH.webp", priority: true },
    { name: "Exposec", logo: "./assets/EXPOSEC.webp", priority: true },
    { name: "Bienal do Livro", logo: "./assets/BIENAL.webp", priority: true },
    { name: "Feicon", logo: "./assets/FEICON.webp", priority: false },
    { name: "CIOSP", logo: "./assets/CIOSP.webp", priority: false },
    { name: "Beauty Fair", logo: "./assets/BEUTY-FAIR.webp", priority: false },
    { name: "Futurecom", logo: "./assets/FUTURECOM.webp", priority: false },
    { name: "Feira do Empreendedor", logo: "./assets/FE25.webp", priority: false },
    { name: "CCXP", logo: "./assets/CCXP.webp", priority: false },
    { name: "Fispal", logo: "./assets/FISPAL.webp", priority: false },
    { name: "Eletrolar Show", logo: "./assets/ES25.webp", priority: false },
    { name: "Fórum Ecommerce Brasil", logo: "./assets/FORUM.webp", priority: false },
    { name: "BGS", logo: "./assets/BGS.webp", priority: false },
  ];

  // Only duplicate the first 6 logos for smooth infinite scroll (minimal DOM elements)
  const duplicateLogos = coreLogos.slice(0, 6).map(logo => ({ ...logo, priority: false }));
  const allLogos = [...coreLogos, ...duplicateLogos];

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">Grandes eventos já confiam</h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-carousel">
            {allLogos.map((client, index) => (
              <div key={`logo-${index}`} className="min-w-[187px] md:min-w-[225px] px-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  title={client.name} 
                  className="max-h-20 grayscale hover:grayscale-0 transition-all duration-300 min-w-12" 
                  loading={client.priority ? "eager" : "lazy"}
                  decoding="async"
                  width="80"
                  height="80"
                  sizes="(max-width: 768px) 80px, 80px"
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
