
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";

const MobileStickyCTA = () => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const WHATSAPP_NUMBER = "5511999572394"; // Updated number

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    // Kept existing message, only updated number
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Olá! Gostaria de saber mais sobre o aluguel de internet 5G para eventos.`, "_blank");
  };

  if (!isMobile) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.1)] p-4 flex justify-center z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-full w-full max-w-xs flex items-center justify-center font-bold text-lg"
      >
        <MessageCircle className="mr-2 h-5 w-5" />
        Falar no WhatsApp Agora
      </button>
    </div>
  );
};

export default MobileStickyCTA;
