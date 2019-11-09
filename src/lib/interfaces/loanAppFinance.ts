export interface LoanAppFinance {
  Address: Address;
  AssetStatus: number;
  AssetValue: string;
  CreditLimit: string;
  DebtRatioUseCode: number;
  Description: string;
  InterestRate: string;
  ItemType?: string;
  LiabilityBalance: string;
  LiabilityStatus: number;
  Locator: number;
  MonthlyExpense: string;
  MonthlyIncome: string;
  OwnerCode: number;
  RecordChangeDate: string;
  Reference: string;
  Type: number;
  UserPledgeCode: number;
}

export enum Address {
  I = 'I',
  I0 = 'I0',
  I1 = 'I1',
  O1 = 'O1',
  R1 = 'R1'
}
