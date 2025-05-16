import { motion } from "framer-motion";
const LogoCarousel = () => {
  const clientLogos = [
    { name: "Apas Show", logo: "/placeholder.svg" },
    { name: "NaturalTech", logo: "/placeholder.svg" },
    { name: "Exposec", logo: "/placeholder.svg" },
    { name: "Bienal do Livro", logo: "/placeholder.svg" },
    { name: "Feicon", logo: "/placeholder.svg" },
    { name: "CIOSP", logo: "/placeholder.svg" },
    { name: "Beauty Fair", logo: "/placeholder.svg" },
    { name: "Futurecom", logo: "/placeholder.svg" },
    { name: "Feira do Empreendedor", logo: "/placeholder.svg" },
    { name: "CCXP", logo: "/placeholder.svg" },
    { name: "Fispal", logo: "/placeholder.svg" },
    { name: "Eletrolar Show", logo: "/placeholder.svg" },
    { name: "Fórum Ecommerce Brasil", logo: "/placeholder.svg" },
    { name: "BGS", logo: "/placeholder.svg" },
    // Repeating for smooth carousel
    { name: "Apas Show", logo: "/placeholder.svg" },
    { name: "NaturalTech", logo: "/placeholder.svg" },
    { name: "Exposec", logo: "/placeholder.svg" },
    { name: "Bienal do Livro", logo: "/placeholder.svg" },
  ];

  return <div className="bg-white py-12">
      <div className="container-custom">
        <h3 className="text-center text-xl md:text-2xl font-bold text-gray-800 mb-8">+2.000 eventos já confiam</h3>

        <div className="overflow-hidden relative">
          <div className="flex animate-carousel">
            {clientLogos.map((client, index) => <div key={`logo-set1-${index}`} className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center">
                <img src={client.logo} alt={client.name} title={client.name} className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300" />
              </div>)}
            {/* Duplicate set of logos for infinite scroll effect - ensuring enough items for a smooth loop */}
            {clientLogos.map((client, index) => <div key={`logo-set2-${index}`} className="min-w-[150px] md:min-w-[180px] px-8 flex items-center justify-center">
                 <img src={client.logo} alt={client.name} title={client.name} className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300" />
               </div>)}
          </div>
        </div>
      </div>
    </div>;
};
export default LogoCarousel;
