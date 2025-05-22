
import { useState } from "react";
import { toast } from "@/components/ui/sonner";
import PlanCard from "./pricing/PlanCard";
import QuoteDialog from "./pricing/QuoteDialog";
import { plans, WHATSAPP_NUMBER, WHATSAPP_MESSAGE_PLAN } from "./pricing/planData";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
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

  return (
    <div className="py-16 bg-transparent">
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
            <div key={plan.id} className={`${plan.isPopular ? '' : 'pt-[22px]'}`}>
              <PlanCard 
                plan={plan} 
                onSelectPlan={openDialog} 
              />
            </div>
          ))}
        </div>
        
        <div className="text-center p-4 rounded-lg border border-blue-200 mt-8 bg-blue-200">
          <p className="font-bold text-[#020cbc]">Agenda de junho 70% preenchida — garanta seu evento conectado antes que acabe!</p>
        </div>

        <QuoteDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          formData={formData}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default PricingTable;
