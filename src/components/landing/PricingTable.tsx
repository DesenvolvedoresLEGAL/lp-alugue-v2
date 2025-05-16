import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/sonner";
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
  const plans = [{
    id: "diaria",
    name: "Diária",
    price: "R$ 1.499",
    features: ["Até 200 conexões simultâneas", "Instalação em 60 minutos", "1 Access Point profissional", "Suporte técnico 24/7"],
    isPopular: false
  }, {
    id: "semana",
    name: "Semana",
    price: "R$ 5.990",
    features: ["Até 500 conexões simultâneas", "Instalação em 60 minutos", "2 Access Points profissionais", "Redundância 4G automática", "Suporte técnico 24/7", "Dashboard de monitoramento"],
    isPopular: true
  }, {
    id: "mes",
    name: "Mês",
    price: "R$ 14.990",
    features: ["Até 1000 conexões simultâneas", "Instalação em 60 minutos", "4 Access Points profissionais", "Redundância 4G automática", "Suporte técnico 24/7", "Dashboard de monitoramento", "Técnico exclusivo no local"],
    isPopular: false
  }];
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
          {plans.map(plan => <div key={plan.id} className={`rounded-lg overflow-hidden border flex flex-col ${plan.isPopular ? 'border-legal-purple shadow-lg shadow-legal-purple/20 relative' : 'border-gray-200'}`}>
              {plan.isPopular && <div className="bg-legal-purple text-white text-center py-2 font-bold">
                  Mais Popular
                </div>}
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold mb-6">
                    {plan.price}
                    <span className="text-base text-gray-500 font-normal"> /período</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, index) => <li key={index} className="flex items-start">
                      <svg className="h-6 w-6 text-legal-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>)}
                </ul>
                
                <Button onClick={() => openDialog(plan.id)} className={`w-full py-6 mt-auto ${plan.isPopular ? 'bg-legal-purple hover:bg-legal-purple/90 text-white' : 'bg-legal-cyan hover:bg-legal-cyan/90 text-legal-blue'}`}>
                  Alugar Agora
                </Button>
              </div>
            </div>)}
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
