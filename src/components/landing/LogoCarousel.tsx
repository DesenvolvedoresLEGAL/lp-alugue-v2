
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const clientLogos = [
    { name: "Apas Show", logo: "./assets/APAS-SHOW.webp" },
    { name: "NaturalTech", logo: "./assets/NATURAL-TECH.webp" },
    { name: "Exposec", logo: "./assets/EXPOSEC.webp" },
    { name: "Bienal do Livro", logo: "./assets/BIENAL.webp" },
    { name: "Feicon", logo: "./assets/FEICON.webp" },
    { name: "CIOSP", logo: "./assets/CIOSP.webp" },
    { name: "Beauty Fair", logo: "./assets/BEUTY-FAIR.webp" },
    { name: "Futurecom", logo: "./assets/FUTURECOM.webp" },
    { name: "Feira do Empreendedor", logo: "./assets/FE25.webp" },
    { name: "CCXP", logo: "./assets/CCXP.webp" },
    { name: "Fispal", logo: "./assets/FISPAL.webp" },
    { name: "Eletrolar Show", logo: "./assets/ES25.webp" },
    { name: "Fórum Ecommerce Brasil", logo: "./assets/FORUM.webp" },
    { name: "BGS", logo: "./assets/BGS.webp" },
    // Repeating for smooth carousel
    { name: "Apas Show", logo: "./assets/APAS-SHOW.webp" },
    { name: "NaturalTech", logo: "./assets/NATURAL-TECH.webp" },
    { name: "Exposec", logo: "./assets/EXPOSEC.webp" },
    { name: "Bienal do Livro", logo: "./assets/BIENAL.webp" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">Grandes eventos já confiam</h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-carousel">
            {clientLogos.map((client, index) => (
              <div key={`logo-set1-${index}`} className="min-w-[187px] md:min-w-[225px] px-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  title={client.name} 
                  className="max-h-20 grayscale hover:grayscale-0 transition-all duration-300 min-w-12" 
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.svg";
                    console.log(`Failed to load logo for ${client.name}, using placeholder`);
                  }}
                />
              </div>
            ))}
            {/* Duplicate set of logos for infinite scroll effect - ensuring enough items for a smooth loop */}
            {clientLogos.map((client, index) => (
              <div key={`logo-set2-${index}`} className="min-w-[187px] md:min-w-[225px] px-8 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`Logo ${client.name}`} 
                  title={client.name} 
                  className="max-h-20 grayscale hover:grayscale-0 transition-all duration-300" 
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
