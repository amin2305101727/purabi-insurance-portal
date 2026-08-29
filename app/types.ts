export interface InsuranceCategory {
  id: string;
  name: string;
  slug: string;
  iconName: string;
  title: string;
  description: string;
  benefits: string[];
  startingPrice: string;
  badge?: string;
  accentColor?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  date: string;
  category: string;
  summary: string;
  content: string;
  imageUrl: string;
  isNotice?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface WorkingStep {
  stepNumber: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ClientPartner {
  id: string;
  name: string;
  logoText: string;
  color: string;
  type: string;
}

export interface HealthPlan {
  id: string;
  name: string;
  type: 'self' | 'couple' | 'family' | 'parents';
  coverageAmount: number;
  coverageFormatted: string;
  annualPremium: number;
  hospitalizationLimit: string;
  icuLimit: string;
  cashlessHospitals: number;
  featured?: boolean;
  prePostHospitalization?: string;
  ambulanceCover?: string;
  claimSettlementRate?: string;
  opdLimit?: string;
}

export interface ClaimRecord {
  claimId: string;
  policyNumber: string;
  claimantName: string;
  insuranceType: string;
  claimAmount: string;
  filingDate: string;
  status: 'Received' | 'Under Review' | 'Surveyor Assigned' | 'Approved' | 'Disbursed';
  timeline: {
    title: string;
    date: string;
    completed: boolean;
    description: string;
  }[];
}
