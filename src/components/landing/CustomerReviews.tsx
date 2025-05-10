
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const CustomerReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "João Carlos",
      company: "Marketing Manager, Global Summit",
      rating: 5,
      text: "Contratamos a LEGAL para um evento com mais de 3.000 pessoas e foi impressionante a velocidade da internet mesmo com todos conectados. A instalação foi em menos de uma hora como prometido."
    },
    {
      id: 2,
      name: "Ana Beatriz",
      company: "CEO, Fashion Week SP",
      rating: 5,
      text: "Já perdi as contas de quantas vezes a internet oficial do pavilhão nos deixou na mão. Com a LEGAL, nunca mais passamos por esse problema. Atendimento impecável e qualidade consistente."
    },
    {
      id: 3,
      name: "Ricardo Mendes",
      company: "Diretor de TI, ExpoTech",
      rating: 5,
      text: "O diferencial da LEGAL é que eles realmente entendem a criticidade da internet para eventos. O monitoramento em tempo real nos dá tranquilidade e o suporte técnico no local é imbatível."
    },
    {
      id: 4,
      name: "Camila Sousa",
      company: "Organizadora, Congresso Médico",
      rating: 5,
      text: "Após três eventos com a LEGAL, só posso dizer: não existe comparação com outros provedores. A velocidade é muito superior e o suporte é instantâneo quando precisamos."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(reviews.length / 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ));
  };

  const displayReviews = () => {
    const startIndex = currentSlide * 3;
    const reviewsToShow = reviews.slice(startIndex, startIndex + 3);
    
    return reviewsToShow.map((review) => (
      <div key={review.id} className="px-4">
        <Card className="h-full shadow-md border-t-4 border-legal-purple">
          <CardContent className="p-6">
            <div className="flex mb-4">{renderStars(review.rating)}</div>
            <blockquote className="text-gray-700 mb-4 italic">"{review.text}"</blockquote>
            <div className="mt-4">
              <p className="font-bold">{review.name}</p>
              <p className="text-sm text-gray-500">{review.company}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    ));
  };

  return (
    <div className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Histórias de Sucesso
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayReviews()}
        </div>
        
        <div className="flex justify-center mt-8">
          {Array(Math.ceil(reviews.length / 3))
            .fill(0)
            .map((_, i) => (
              <button
                key={i}
                className={`h-3 w-3 rounded-full mx-1 ${
                  i === currentSlide ? "bg-legal-purple" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
