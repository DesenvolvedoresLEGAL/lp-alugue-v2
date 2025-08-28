import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, CheckCircle, Shield } from "lucide-react";

const DynamicPricing = () => {
  const [antecedencia, setAntecedencia] = useState([15]);
  const [ocupacao, setOcupacao] = useState([60]);

  // Simulação de preços baseada nos fatores
  const calcularPreco = () => {
    const precoBase = 390; // Baseado no SPEEDY 5G PLUS
    
    // Fator antecedência
    let fatorAntecedencia = 0;
    if (antecedencia[0] >= 30) fatorAntecedencia = -0.1; // -10%
    else if (antecedencia[0] >= 21) fatorAntecedencia = 0; // Base
    else if (antecedencia[0] >= 10) fatorAntecedencia = 0.1; // +10%
    else if (antecedencia[0] >= 4) fatorAntecedencia = 0.2; // +20%
    else fatorAntecedencia = 0.3; // +30%

    // Fator demanda/ocupação
    let fatorDemanda = 0;
    if (ocupacao[0] < 50) fatorDemanda = 0; // Base
    else if (ocupacao[0] <= 75) fatorDemanda = 0.1; // +10%
    else if (ocupacao[0] <= 90) fatorDemanda = 0.2; // +20%
    else fatorDemanda = 0.3; // +30%

    const precoFinal = precoBase * (1 + fatorAntecedencia + fatorDemanda);
    return Math.round(precoFinal);
  };

  const getAntecedenciaLabel = (dias: number) => {
    if (dias >= 30) return { text: "-10%", color: "bg-green-700" };
    if (dias >= 21) return { text: "Base", color: "bg-blue-700" };
    if (dias >= 10) return { text: "+10%", color: "bg-yellow-700" };
    if (dias >= 4) return { text: "+20%", color: "bg-orange-700" };
    return { text: "+30%", color: "bg-red-700" };
  };

  const getDemandaLabel = (ocupacao: number) => {
    if (ocupacao < 50) return { text: "Base", color: "bg-blue-700" };
    if (ocupacao <= 75) return { text: "+10%", color: "bg-yellow-700" };
    if (ocupacao <= 90) return { text: "+20%", color: "bg-orange-700" };
    return { text: "+30%", color: "bg-red-700" };
  };

  const antecedenciaData = [
    { range: "30+ dias antes", discount: "-10%", color: "bg-green-700" },
    { range: "21-29 dias", discount: "Base", color: "bg-blue-700" },
    { range: "10-20 dias", discount: "+10%", color: "bg-yellow-700" },
    { range: "4-9 dias", discount: "+20%", color: "bg-orange-700" },
    { range: "0-3 dias", discount: "+30%", color: "bg-red-700" },
  ];

  const demandaData = [
    { range: "< 50% ocupação", surcharge: "Base", color: "bg-blue-700" },
    { range: "50-75% ocupação", surcharge: "+10%", color: "bg-yellow-700" },
    { range: "76-90% ocupação", surcharge: "+20%", color: "bg-orange-700" },
    { range: "> 90% ocupação", surcharge: "+30%", color: "bg-red-700" },
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-primary/5 to-transparent">
      <div className="container-custom">
        {/* Simulador de Preços */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Simulador de Preços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como a antecedência e demanda afetam o preço do seu evento
          </p>
        </div>

        <Card className="max-w-4xl mx-auto mb-16 bg-gradient-to-br from-background to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Antecedência */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Antecedência: {antecedencia[0]} dias</h3>
                  <Badge className={`${getAntecedenciaLabel(antecedencia[0]).color} text-white`}>
                    {getAntecedenciaLabel(antecedencia[0]).text}
                  </Badge>
                </div>
                <Slider
                  value={antecedencia}
                  onValueChange={setAntecedencia}
                  max={60}
                  min={0}
                  step={1}
                  className="w-full"
                  aria-label="Selecionar antecedência em dias para o evento"
                />
                <div className="text-sm text-muted-foreground">
                  Acréscimo por urgência
                </div>
              </div>

              {/* Ocupação */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Ocupação: {ocupacao[0]}%</h3>
                  <Badge className={`${getDemandaLabel(ocupacao[0]).color} text-white`}>
                    {getDemandaLabel(ocupacao[0]).text}
                  </Badge>
                </div>
                <Slider
                  value={ocupacao}
                  onValueChange={setOcupacao}
                  max={100}
                  min={0}
                  step={5}
                  className="w-full"
                  aria-label="Selecionar porcentagem de ocupação do evento"
                />
                <div className="text-sm text-muted-foreground">
                  Acréscimo por demanda
                </div>
              </div>
            </div>

            {/* Resultado */}
            <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <h3 className="text-xl font-semibold mb-2">Preço Final Estimado (Plano Selecionado)</h3>
              <div className="text-4xl font-bold text-primary mb-2">
                R$ {calcularPreco().toLocaleString('pt-BR')}
              </div>
              <p className="text-sm text-muted-foreground">
                Baseado no SPEEDY 5G PLUS • Valor base: R$ 390 • Antecedência: {getAntecedenciaLabel(antecedencia[0]).text} • Demanda: {getDemandaLabel(ocupacao[0]).text}
              </p>
              <Button className="mt-4" size="lg">
                Solicitar Cotação
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Fatores que Afetam o Preço */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Fator Antecedência */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Fator Antecedência</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {antecedenciaData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{item.range}</span>
                  <Badge className={`${item.color} text-white`}>
                    {item.discount}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Fator Demanda */}
          <Card className="border-primary/20">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-primary">Fator Demanda</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {demandaData.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="text-sm font-medium">{item.range}</span>
                  <Badge className={`${item.color} text-white`}>
                    {item.surcharge}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Por que Preços Dinâmicos? */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Por que Preços Dinâmicos?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Previsibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Planeje com antecedência e garanta os melhores preços para seu evento.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-700 to-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Disponibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Sistema inteligente que garante equipamentos mesmo em alta demanda.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-primary/20 hover:border-primary/40 transition-all">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-primary">Transparência</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Você sabe exatamente como o preço é calculado, sem surpresas.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DynamicPricing;