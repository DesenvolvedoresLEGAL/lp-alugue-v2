
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  nome: string;
  email: string;
  celular: string;
  dataEvento: string;
  plano: string;
}

interface RequestQuoteFormProps {
  formData: FormData;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RequestQuoteForm = ({ 
  formData, 
  isSubmitting, 
  onSubmit, 
  onChange 
}: RequestQuoteFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-4 mt-4">
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome-modal">Nome</Label>
          <Input id="nome-modal" name="nome" placeholder="Seu nome completo" value={formData.nome} onChange={onChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email-modal">Email</Label>
          <Input id="email-modal" name="email" type="email" placeholder="seu@email.com" value={formData.email} onChange={onChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="celular-modal">Celular</Label>
          <Input id="celular-modal" name="celular" placeholder="(11) 98765-4321" value={formData.celular} onChange={onChange} required />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="dataEvento-modal">Data do Evento</Label>
          <Input id="dataEvento-modal" name="dataEvento" type="date" value={formData.dataEvento} onChange={onChange} required />
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-legal-purple hover:bg-legal-purple/90 text-white py-6">
        {isSubmitting ? "Enviando..." : "Solicitar Cotação"}
      </Button>
    </form>
  );
};

export default RequestQuoteForm;
