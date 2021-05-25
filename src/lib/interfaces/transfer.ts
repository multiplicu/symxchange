export interface Transfer {
  AccountNumber: string;
  Amount?: string;
  AmountOption?: number;
  Day1?: number;
  Day2?: number;
  EffectiveDate: string;
  Frequency?: number;
  Id: string;
  IdType: number;
  Locator?: number;
  MaturityCheck?: number;
  MaximumBalance?: string;
  MinimumBalance?: string;
  PaymentType?: number;
  Percent?: string;
  RecordChangeDate?: string;
  RegE?: number;
  SweepFee?: string;
  SweepFeeIdType?: number;
  SweepMinimum?: string;
  Type?: number;
}
