import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
import { Wifi, Users, Database, HardDrive, Monitor, Headphones, Mic, Zap, Check, X } from "lucide-react";

const PricingTable = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    dataEvento: "",
    plano: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  const plans = [
    {
      id: "lite",
      name: "SPEEDY 5G LITE",
      price: "R$ 200,00",
      features: [
        { text: "Até 3 conexões simultâneas", icon: Users },
        { text: "5GB/dia de consumo", icon: Database },
        { text: "1 roteador Wi-Fi6 grátis", icon: Wifi },
        { text: "Suporte técnico presencial não incluso", icon: X },
        { text: "Média de velocidade dentro do pavilhão: 100 a 200 megas", icon: Zap },
        { text: "Média de velocidade fora do pavilhão: 400 a 500 megas", icon: Zap },
      ],
      isPopular: false
    },
    {
      id: "plus",
      name: "SPEEDY 5G PLUS",
      price: "R$ 400,00",
      features: [
        { text: "Até 10 conexões simultâneas", icon: Users },
        { text: "10GB/dia de consumo", icon: Database },
        { text: "1 roteador Wi-Fi6 grátis", icon: Wifi },
        { text: "Suporte técnico presencial não incluso", icon: X },
        { text: "Média de velocidade dentro do pavilhão: 100 a 200 megas", icon: Zap },
        { text: "Média de velocidade fora do pavilhão: 400 a 500 megas", icon: Zap },
      ],
      isPopular: false
    },
    {
      id: "pro",
      name: "SPEEDY 5G PRO",
      price: "R$ 800,00",
      features: [
        { text: "Até 50 conexões simultâneas", icon: Users },
        { text: "50GB/dia de consumo", icon: Database },
        { text: "2 roteadores Wi-Fi6 grátis", icon: Wifi },
        { text: "Roteadores adicionais R$ 100,00/dia", icon: Wifi },
        { text: "Suporte técnico incluso 24/7", icon: Headphones },
        { text: "Dashboard de monitoramento", icon: Monitor },
        { text: "Média de velocidade dentro do pavilhão: 100 a 200 megas", icon: Zap },
        { text: "Média de velocidade fora do pavilhão: 400 a 500 megas", icon: Zap },
      ],
      isPopular: true
    },
    {
      id: "ultra",
      name: "SPEEDY 5G ULTRA",
      price: "R$ 2.000,00",
      features: [
        { text: "Até 100 conexões simultâneas", icon: Users },
        { text: "100GB/dia de consumo", icon: Database },
        { text: "5 roteadores Wi-Fi6 grátis", icon: Wifi },
        { text: "Roteadores adicionais R$ 100,00/dia", icon: Wifi },
        { text: "Média de velocidade dentro do pavilhão: 100 a 200 megas", icon: Zap },
        { text: "Média de velocidade fora do pavilhão: 400 a 500 megas", icon: Zap },
        { text: "Suporte técnico presencial 24/7 prioritário", icon: Headphones },
        { text: "Redundância de Links", icon: HardDrive },
        { text: "Coleta de leads", icon: Mic },
      ],
      isPopular: false
    }
  ];

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
      // This would be replaced with actual Supabase code when integrated
      console.log("Submitting form data:", formData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Track form submission (would use real tracking when implemented)
      console.log("Tracking event: lead_lp_highconv");
      toast.success("Formulário enviado com sucesso! Entraremos em contato em breve.", {
        duration: 5000
      });

      // Reset form and close dialog
      setFormData({
        nome: "",
        email: "",
        celular: "",
        dataEvento: "",
        plano: ""
      });
      setDialogOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const openDialog = (planId: string) => {
    setFormData(prev => ({
      ...prev,
      plano: planId
    }));
    setDialogOpen(true);
  };
  const WHATSAPP_NUMBER = "5511999572394";
  const WHATSAPP_MESSAGE_PLAN = "Fala LEGAL, quero alugar agora!";
  const handleWhatsAppRedirect = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE_PLAN)}`, "_blank");
  };
  return <div className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano ideal para o seu evento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Internet confiável, super-rápida e com instalação em até 60 minutos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {plans.map(plan => (
            <div 
              key={plan.id} 
              className={`rounded-lg overflow-hidden border flex flex-col ${
                plan.isPopular ? 'border-legal-purple shadow-lg shadow-legal-purple/20 relative' : 'border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="bg-black text-white text-center py-1 font-bold text-xs tracking-tight">
                  Mais Popular
                </div>
              )}
              
              <div className="bg-gradient-to-r from-legal-blue to-legal-purple text-white p-4 text-center">
                <h3 className="text-xl font-bold">{plan.name}</h3>
              </div>
              
              <div className="p-6 flex flex-col flex-grow bg-[#e5e7eb]">
                <div className="text-center mb-6">
                  <div className="bg-white text-black py-2 px-4 rounded-md inline-block">
                    <span className="text-3xl font-extrabold truncate">
                      {plan.price}
                      <span className="text-sm font-normal ml-1">/dia</span>
                    </span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => openDialog(plan.id)} 
                  className="w-full py-6 mb-6 bg-gradient-to-r from-legal-blue to-legal-purple hover:from-legal-purple hover:to-legal-blue text-white transition-all duration-300"
                >
                  Alugar Agora
                </Button>
                
                <ul className="space-y-3 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <feature.icon className="h-4 w-4 text-legal-purple mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center my-8">
          <Button 
            onClick={handleWhatsAppRedirect} 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="white" 
              className="w-5 h-5"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Fala LEGAL, quero alugar agora!
          </Button>
        </div>
        
        <div className="text-center p-4 rounded-lg border border-blue-200 mt-8 bg-blue-200">
          <p className="font-bold text-[#020cbc]">Agenda de junho 70% preenchida — garanta seu evento conectado antes que acabe!</p>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Solicitar cotação</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome-modal">Nome</Label>
                  <Input id="nome-modal" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email-modal">Email</Label>
                  <Input id="email-modal" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="celular-modal">Celular</Label>
                  <Input id="celular-modal" name="celular" placeholder="(11) 98765-4321" value={formData.celular} onChange={handleChange} required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="dataEvento-modal">Data do Evento</Label>
                  <Input id="dataEvento-modal" name="dataEvento" type="date" value={formData.dataEvento} onChange={handleChange} required />
                </div>
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full bg-legal-purple hover:bg-legal-purple/90 text-white py-6">
                {isSubmitting ? "Enviando..." : "Solicitar Cotação"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>;
};

export default PricingTable;
