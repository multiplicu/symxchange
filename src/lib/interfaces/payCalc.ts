export interface PayCalc {
  BalanceCutoff: BalanceCutoff[];
  BalanceIncrement: string;
  BalanceIncrementRounding: number;
  DefinedCode: number;
  Description: string;
  DueGraceDays: number;
  IntRateCutoff: IntRateCutoff[];
  InterestAdjPercent: string;
  LgDestnPmtCalcSetCode: number;
  LgSourcePmtCalcSetCode: number;
  Payment10: string;
  Payment14: Payment14[];
  PaymentCalculationFormula: number;
  PaymentCalculationSetCode: number;
  PaymentFrequencyAdjustment: number;
  PaymentMinimum: string;
  PaymentPercent15: PaymentPercent15[];
  PaymentPercent2: string;
  PayoffMonths: PayoffMonth[];
  RoundPaymentUptoMultiple: string;
}

export interface BalanceCutoff {
  EntryId: number;
  BalanceCutoff: string;
}

export interface IntRateCutoff {
  EntryId: number;
  IntRateCutoff: string;
}

export interface Payment14 {
  EntryId: number;
  Payment14: string;
}

export interface PaymentPercent15 {
  EntryId: number;
  PaymentPercent15: string;
}

export interface PayoffMonth {
  EntryId: number;
  PayoffMonths: number;
}
