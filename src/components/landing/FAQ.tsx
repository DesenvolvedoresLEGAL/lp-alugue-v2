
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Qual a área de cobertura da internet 5G para eventos?",
      answer: "Nossa solução cobre todo o território nacional, em áreas urbanas e suburbanas com cobertura 5G. Em locais sem cobertura 5G, oferecemos soluções 4.5/4G que garantem performance superior às redes convencionais."
    },
    {
      question: "Qual o SLA de disponibilidade da rede?",
      answer: "Garantimos SLA de 99.99% de disponibilidade durante seu evento, com redundância automática em caso de falha (para Planos SPEEDY 5G Ultra ou Live). Caso a rede fique indisponível por mais de 60 minutos seguidos, devolvemos 100% do valor investido*."
    },
    {
      question: "Quais equipamentos são utilizados na instalação?",
      answer: "Utilizamos apenas equipamentos profissionais de alta performance e atualizados periodicamente. Todos os equipamentos são de nossa propriedade e passam por manutenção preventiva regular."
    },
    {
      question: "É cobrada taxa adicional para instalação?",
      answer: "Sim! A instalação não está incluída no valor do serviço. Também pode haver uma taxa adicional de despesas diversas (deslocamente, alimentação, hospedagem, etc) e que será informada na cotação."
    },
    {
      question: "Como funciona o suporte técnico durante o evento?",
      answer: "Oferecemos suporte técnico remoto 24/7/365 por WhatsApp. Para eventos maiores, disponibilizamos um técnico presente durante todo o período. Além disso, monitoramos proativamente a rede em tempo real. Caso queira um técnico exclusivo em seu stand ou evento, a cobrança é à parte"
    },
    {
      question: "É possível cancelar ou remarcar a data?",
      answer: "Sim. Você pode reagendar sem custo com até 7 dias de antecedência. Para cancelamentos, devolvemos 100% do valor se feito com 15 dias de antecedência, e 50% se feito com até 7 dias de antecedência."
    }
  ];

  // Generate JSON-LD Schema for FAQ
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa solução de internet para eventos
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-bold">{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </div>
    </div>
  );
};

export default FAQ;
