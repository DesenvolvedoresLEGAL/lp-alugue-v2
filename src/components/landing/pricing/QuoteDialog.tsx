
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import RequestQuoteForm from "./RequestQuoteForm";

interface FormData {
  nome: string;
  email: string;
  celular: string;
  dataEvento: string;
  plano: string;
}

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formData: FormData;
  isSubmitting: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const QuoteDialog = ({ 
  open, 
  onOpenChange, 
  formData, 
  isSubmitting, 
  onSubmit, 
  onChange 
}: QuoteDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Solicitar cotação</DialogTitle>
        </DialogHeader>
        
        <RequestQuoteForm 
          formData={formData}
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </DialogContent>
    </Dialog>
  );
};

export default QuoteDialog;
