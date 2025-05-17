
import { LucideIcon } from "lucide-react";

export interface PlanFeature {
  text: string;
  icon: LucideIcon;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: PlanFeature[];
  isPopular: boolean;
}
