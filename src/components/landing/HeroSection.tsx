import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, CheckCircleIcon, Clock, MessageCircle } from "lucide-react";
import emailjs from 'emailjs-com';
const HeroSection = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    nomeEvento: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const CONTACT_EMAIL = 'sos@operadora.legal';
  const WHATSAPP_NUMBER = "5511999572394";
  const WHATSAPP_MESSAGE_GENERAL = "LEGAL, quero alugar agora.";

  // EmailJS configuration
  const EMAILJS_SERVICE_ID = 'service_wi3kvx7';
  const EMAILJS_TEMPLATE_ID = 'template_5l2767r';
  const EMAILJS_USER_ID = 'oLw9xvmdczE218mGh';
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const data = new FormData(e.currentTarget);
      const name = data.get('nome');
      const email = data.get('email');
      const phone = data.get('celular');
      const eventName = data.get('nomeEvento');
      console.log("Tracking event: lead_lp_highconv");
      console.log("Submitting form data:", formData);
      if (phone.toString().length > 11) {
        throw new Error("Número de telefone inválido.");
      }
      const templateParams = {
        to_email: CONTACT_EMAIL,
        from_name: name,
        from_email: email,
        phone: phone,
        event_name: eventName,
        message: `Solicitação de Reserva de Evento\n\tNome: ${name}\n\tEmail: ${email}\n\tCelular: ${phone}\n\tNome do Evento: ${eventName}`
      };
      console.log(templateParams);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);
      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.", {
        duration: 5000
      });
      setFormData({
        nome: "",
        email: "",
        celular: "",
        nomeEvento: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(`Erro ao enviar o formulário. ${error}`);
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_GENERAL)}`, "_blank");
  };
  return <div className="relative min-h-[90vh] flex items-center">
      {/* Optimized Background Image with high priority loading */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80 z-10"></div>
        <picture>
          <source srcSet="./assets/lp-alugue-a-herosection-bg/lp-alugue-a-herosection-bg-552.webp" media="(max-width: 552px)" type="image/webp" />
          <source srcSet="./assets/lp-alugue-a-herosection-bg/lp-alugue-a-herosection-bg-691.webp" media="(min-width: 553px) and (max-width: 690px)" type="image/webp" />
          <source srcSet="./assets/lp-alugue-a-herosection-bg/lp-alugue-a-herosection-bg.webp" media="(min-width: 691px)" type="image/webp" />
          <img src="./assets/lp-alugue-a-herosection-bg/lp-alugue-a-herosection-bg.webp" className="w-full h-full object-cover" loading="eager" fetchPriority="high" decoding="async" width="1920" height="1080" alt="router 5G para aluguel de internet temporária em evento corporativo" />
        </picture>
      </div>

      {/* Company Logo at the top with optimized loading */}
      <div className="absolute top-6 left-0 right-0 z-30 container-custom">
        <div className="flex justify-start">
          <img src="./assets/Logo-Alugue-Branco.png.webp" alt="LEGAL - Internet 5G para eventos" className="h-auto max-w-[100px] md:max-w-[165px]" loading="eager" decoding="async" />
        </div>
      </div>

      <div className="container-custom relative z-20 py-12">
        <div className="text-center mb-8 md:mb-12">
            
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-white text-center sm:text-left"> 
            <div className="mb-6">
              
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-snug md:leading-tight">Aluguel de Internet para Evento</h1>
            
            <p className="text-lg md:text-2xl font-semibold mb-4">Conexão 5G dedicada, instalada em até 60 min, sem stress.</p>
            
            <p className="text-base md:text-lg text-white/90">
              Velocidade 10× maior que a rede oficial do pavilhão, sem burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg mt-8">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-legal-cyan mr-2" />
                <span>NPS 90</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-legal-cyan mr-2" />
                <span>Suporte 24 × 7</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-white/30"></div>
              <Button variant="outline" onClick={handleWhatsAppClick} className="text-xl bg-transparent w-[12.5rem] h-[3rem] hover:bg-white/10 border-legal-cyan text-legal-cyan hover:text-white flex items-center justify-center gap-2">
              <svg className="w-6 h-6" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
                <span>Alugue Agora</span>
              </Button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Garanta a internet do seu evento</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white">Nome</Label>
                  <Input id="nome" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="celular" className="text-white">Celular</Label>
                  <Input id="celular" name="celular" type="tel" placeholder="(11) 98765-4321" pattern="(\d{2})(\d{1})(\d{4})(\d{4})" value={formData.celular} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="nomeEvento" className="text-white">Nome do Evento</Label>
                  <div className="relative">
                    <Input id="nomeEvento" name="nomeEvento" type="text" placeholder="Digite o nome do evento" value={formData.nomeEvento} onChange={handleChange} required className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                  </div>
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-legal-cyan hover:bg-legal-cyan/90 text-legal-blue font-bold text-lg py-6">
                {isSubmitting ? "Enviando..." : "Reservar Minha Data"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default HeroSection;