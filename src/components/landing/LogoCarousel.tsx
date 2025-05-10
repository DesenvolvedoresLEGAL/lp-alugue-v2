
import { motion } from "framer-motion";

const LogoCarousel = () => {
  // Placeholder for client logos
  const clientLogos = [
    { name: "Disney", logo: "/placeholder.svg" },
    { name: "Dior", logo: "/placeholder.svg" },
    { name: "C&A", logo: "/placeholder.svg" },
    { name: "G20", logo: "/placeholder.svg" },
    { name: "Lollapalooza", logo: "/placeholder.svg" },
    { name: "Client 6", logo: "/placeholder.svg" },
    { name: "Client 7", logo: "/placeholder.svg" },
    { name: "Client 8", logo: "/placeholder.svg" },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">
          +4.000 eventos já confiam
        </h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-carousel">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div
                key={`logo-1-${index}`}
                className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            
            {/* Duplicate set of logos for infinite scroll effect */}
            {clientLogos.map((client, index) => (
              <div
                key={`logo-2-${index}`}
                className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
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
