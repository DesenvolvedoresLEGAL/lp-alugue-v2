
import React from "react";
import { Button } from "@/components/ui/button";
import { Plan } from "./types";

interface PlanCardProps {
  plan: Plan;
  onSelectPlan: (planId: string) => void;
}

const PlanCard = ({ plan, onSelectPlan }: PlanCardProps) => {
  const whatsappLink = `https://wa.me/5511999572394?text=Fala%20LEGAL%2C%20quero%20alugar%20agora!`;
  
  return (
    <div 
      className={`rounded-lg overflow-hidden border flex flex-col transition-all duration-200 hover:border-[#040dbe] bg-white ${
        plan.isPopular ? 'border-[#040dbe] shadow-lg shadow-[#040dbe]/20' : 'border-gray-200'
      }`}
    >
      {plan.isPopular ? (
        <div className="bg-black text-white text-center py-1 font-bold text-xs tracking-tight rounded-t-lg">
          Mais Popular
        </div>
      ) : (
        <div className="h-[22px]"></div> // Empty div with same height as the "Mais Popular" tag
      )}
              
      <div className="bg-[#040dbe] text-white p-4 text-center h-[70px] flex items-center justify-center">
        <h3 className="text-xl font-bold">{plan.name}</h3>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-center mb-6 h-[80px] flex items-center justify-center">
          <div className="bg-white text-black py-2 px-4 rounded-md inline-block">
            <span className="text-3xl font-extrabold tracking-tighter text-[39px]">
              {plan.price}
              <span className="text-sm font-normal ml-2 tracking-widest">/dia</span>
            </span>
          </div>
        </div>
        
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block w-full"
        >
          <Button 
            className="w-full py-6 mb-6 bg-[#040dbe] hover:bg-[#040dbe]/90 text-white transition-all duration-300 font-bold uppercase"
          >
            Alugar Agora
          </Button>
        </a>
        
        <ul className="space-y-3 text-xs">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <feature.icon className="h-4 w-4 text-[#040dbe] mr-2 flex-shrink-0 mt-0.5" />
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
