
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "Quanto custa aluguel de internet para evento de 500 pessoas?",
      answer: "O valor depende da duração e da velocidade necessária, mas nossos planos começam em R$ 1.499/dia e incluem instalação completa, equipamentos profissionais e suporte 24h. Para eventos com 500+ pessoas, recomendamos o plano SPEEDY 5G Ultra com largura dedicada."
    },
    {
      question: "Qual a diferença entre internet temporária e link dedicado?",
      answer: "A internet temporária é fornecida via FWA 5G sem burocracia de licenças e pode ser instalada em até 60 minutos, ideal para eventos. O link dedicado tradicional exige contrato longo, obras e aprovações que podem levar semanas."
    },
    {
      question: "Preciso de internet para transmissão ao vivo, qual plano escolher?",
      answer: "Para streaming ao vivo recomendamos o SPEEDY 5G Ultra ou Live, que garantem upload dedicado de 400-500 Mbps, latência ultra-baixa e redundância automática. Ideais para múltiplas transmissões simultâneas em 4K."
    },
    {
      question: "Instalação: quanto tempo leva?",
      answer: "Nossa instalação é express: em até 60 minutos sua internet está funcionando. Fazemos site survey prévio, chegamos com equipamentos configurados e nossa equipe especializada garante ativação rápida e testes completos."
    },
    {
      question: "Atendem fora de São Paulo?",
      answer: "Sim! Atendemos todo o território nacional em áreas com cobertura 5G/4.5G. Para eventos fora da Grande São Paulo, pode haver taxa adicional de deslocamento que será informada no orçamento."
    },
    {
      question: "Suporte 24h está incluso?",
      answer: "Sim, suporte técnico 24/7 via WhatsApp está incluso em todos os planos. Para eventos críticos, oferecemos técnico presencial durante todo o período (consulte disponibilidade e valores)."
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
            FAQ sobre locação de internet temporária
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Respostas às principais dúvidas sobre aluguel de internet para eventos
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
