
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
      answer: "Nossa solução cobre todo o território nacional, em áreas urbanas e suburbanas com cobertura 5G. Em locais sem cobertura 5G, oferecemos soluções 4G que garantem performance superior às redes convencionais."
    },
    {
      question: "Qual o SLA de disponibilidade da rede?",
      answer: "Garantimos SLA de 99.99% de disponibilidade durante seu evento, com redundância automática em caso de falha. Caso a rede fique indisponível por mais de 1 minuto acumulado, devolvemos 100% do valor investido."
    },
    {
      question: "Quais equipamentos são utilizados na instalação?",
      answer: "Utilizamos apenas equipamentos profissionais de alta performance das marcas Cambium Networks e Ubiquiti. Todos os equipamentos são de nossa propriedade (não alugados) e passam por manutenção preventiva regular."
    },
    {
      question: "É cobrada taxa adicional para instalação?",
      answer: "Não! A instalação já está incluída no valor do serviço para eventos em áreas urbanas. Para localidades remotas, pode haver uma taxa adicional de deslocamento que será informada na cotação."
    },
    {
      question: "Como funciona o suporte técnico durante o evento?",
      answer: "Oferecemos suporte técnico 24/7 por telefone, WhatsApp e email. Para eventos maiores, disponibilizamos um técnico dedicado presente durante todo o período. Além disso, monitoramos proativamente a rede em tempo real."
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
