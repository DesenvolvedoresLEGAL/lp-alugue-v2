
import { motion } from "framer-motion";

const LogoCarousel = () => {
  const clientLogos = [
    { name: "Apas Show", logo: "/lovable-uploads/event-logos/apas-show.png" },
    { name: "NaturalTech", logo: "/lovable-uploads/event-logos/naturaltech.png" },
    { name: "Exposec", logo: "/lovable-uploads/event-logos/exposec.png" },
    { name: "Bienal do Livro", logo: "/lovable-uploads/event-logos/bienal-do-livro.png" },
    { name: "Feicon", logo: "/lovable-uploads/event-logos/feicon.png" },
    { name: "CIOSP", logo: "/lovable-uploads/event-logos/ciosp.png" },
    { name: "Beauty Fair", logo: "/lovable-uploads/event-logos/beauty-fair.png" },
    { name: "Futurecom", logo: "/lovable-uploads/event-logos/futurecom.png" },
    { name: "Feira do Empreendedor", logo: "/lovable-uploads/event-logos/feira-do-empreendedor.png" },
    { name: "CCXP", logo: "/lovable-uploads/event-logos/ccxp.png" },
    { name: "Fispal", logo: "/lovable-uploads/event-logos/fispal.png" },
    { name: "Eletrolar Show", logo: "/lovable-uploads/event-logos/eletrolar-show.png" },
    { name: "Fórum Ecommerce Brasil", logo: "/lovable-uploads/event-logos/forum-ecommerce-brasil.png" },
    { name: "BGS", logo: "/lovable-uploads/event-logos/bgs.png" },
    // Repeating for smooth carousel
    { name: "Apas Show", logo: "/lovable-uploads/event-logos/apas-show.png" },
    { name: "NaturalTech", logo: "/lovable-uploads/event-logos/naturaltech.png" },
    { name: "Exposec", logo: "/lovable-uploads/event-logos/exposec.png" },
    { name: "Bienal do Livro", logo: "/lovable-uploads/event-logos/bienal-do-livro.png" },
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
