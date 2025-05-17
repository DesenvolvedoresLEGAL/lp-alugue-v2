
import { Wifi, Users, Database, HardDrive, Monitor, Headphones, Mic, Zap, Check, X } from "lucide-react";
import { Plan } from "./types";

export const plans: Plan[] = [
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

export const WHATSAPP_NUMBER = "5511999572394";
export const WHATSAPP_MESSAGE_PLAN = "Fala LEGAL, quero alugar agora!";
