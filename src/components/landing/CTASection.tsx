
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const CTASection = () => {
  const handleScrollToForm = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp link
    window.open("https://wa.me/5511999572394?text=Olá! Gostaria de saber mais sobre o aluguel de internet 5G para eventos.", "_blank");
  };

  return (
    <div className="py-16 bg-gradient-to-r from-legal-blue to-legal-purple">
      <div className="container-custom">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para um evento sem falhas de conexão?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Garanta uma experiência impecável para todos os participantes do seu evento com a internet mais rápida e confiável do mercado.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={handleScrollToForm}
              className="bg-white hover:bg-white/90 text-legal-purple text-lg py-6 px-8 shadow-lg"
            >
              Solicitar Cotação
            </Button>
            
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="bg-green-500 hover:bg-green-600 border-green-600 text-white text-lg py-6 px-8 flex items-center"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
