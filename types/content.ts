export interface CaseKpi {
  label: string;
  value: string;
  accent?: boolean;
}

export interface CaseItem {
  slug: string;
  name: string;
  type: 'premium' | 'comfort' | 'business';
  city: string;
  year: string;
  service: string;
  duration: string;
  summary: string;
  cover: string;
  gallery: string[];
  kpi: CaseKpi[];
  challenge: string;
  approach: string[];
  result: string;
}

export interface ServiceItem {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  summary: string;
  deliverables: string[];
  duration: string;
  outcome: string;
}

export interface PricingFeature {
  label: string;
  value: string;
}

export interface PricingTier {
  slug: string;
  name: string;
  price: number;
  currency: string;
  tagline: string;
  popular: boolean;
  features: PricingFeature[];
}

export interface PricingData {
  tiers: PricingTier[];
  note: string;
}
