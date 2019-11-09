export interface InsTable {
  BalloonPremium: string;
  BalloonPremiumBase: string;
  DeviationFactor: string;
  Formula: number;
  Frequency: number;
  FrequencyDay: number;
  InsuranceCode: number;
  MaxAge: number;
  MaxInsurableAmount: string;
  MaxJointAge: number;
  MaxMonthlyBenefit: string;
  MaxTerminMonths: number;
  Premium: string;
  PremiumBase: string;
  SubFormula: number;
  TermPremium: TermPremium[];
  LongDescription?: string;
  ShortDescription?: string;
}

export interface TermPremium {
  EntryId: number;
  TermPremium: string;
}
