
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const goToHighConversionLanding = () => {
    navigate("/alugue/high-conversion");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">LEGAL - Operadora de Internet</h1>
        <p className="text-xl text-gray-600 mb-8">Soluções de conectividade para empresas e eventos</p>
        <Button onClick={goToHighConversionLanding} className="bg-legal-purple hover:bg-legal-purple/90 text-white">
          Ver Landing Page de Alta Conversão
        </Button>
      </div>
    </div>
  );
};

export default Index;
