
import { useState } from "react";

const TestimonialVideo = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  const handlePlayVideo = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Veja como a LEGAL transformou a conectividade de grandes eventos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
            {!videoLoaded ? (
              <div 
                className="relative cursor-pointer bg-black"
                onClick={handlePlayVideo}
              >
                {/* Placeholder poster image */}
                <img 
                  src="/placeholder.svg" 
                  alt="Clique para assistir o depoimento"
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <div className="h-16 w-16 bg-legal-purple rounded-full flex items-center justify-center">
                      <svg 
                        className="h-8 w-8 text-white" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" 
                        />
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder, would be replaced with actual YouTube ID
                title="Depoimento de cliente LEGAL"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            )}
          </div>
          
          <div className="mt-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="font-bold text-xl mb-2">Transcrição do Vídeo</h3>
            <p className="text-gray-700 leading-relaxed">
              "A internet da LEGAL foi essencial para o sucesso do nosso evento. Tínhamos mais de 5.000 pessoas
              conectadas simultaneamente e precisávamos de streaming em alta qualidade para nossas palestras.
              A instalação foi super rápida, em menos de uma hora já estávamos com tudo funcionando. O suporte
              técnico deles é excepcional — sempre disponíveis e resolveram todas as nossas dúvidas. Recomendo
              fortemente para qualquer organizador de eventos que não quer dor de cabeça com conectividade."
            </p>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-gray-300 mr-3"></div>
              <div>
                <p className="font-bold">Maria Silva</p>
                <p className="text-sm text-gray-500">Diretora de Eventos, TechConf Brasil</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideo;
