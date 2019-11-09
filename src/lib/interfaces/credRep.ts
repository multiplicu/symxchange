export interface CredRep {
  ActualPaymentAmt: boolean;
  AppAlteredForged: boolean;
  AppearanceInconsistent: boolean;
  ArmAlert: string;
  AutoCapCost: string;
  AutoDownPayment: string;
  AutoLeaseTerm: number;
  AutoMsrp: string;
  AutoRebate: string;
  AutoResidualValue: string;
  AutoSalePrice: string;
  AutoTradeAllowance: string;
  AutoTradeBalance: string;
  BirthDate: string;
  Branch: number;
  Bureau: number;
  BureauInfo: string;
  BusMonthsCurrAddress: number;
  BusYearsCurrAddress: number;
  BusinessTypeCode: number;
  CommercialCode: number;
  CompletionCode: number;
  CompletionDate: string;
  CompletionTime: number;
  CurrAddrCity: string;
  CurrAddrHomePhone: string;
  CurrAddrHouseNumber: string;
  CurrAddrState: string;
  CurrAddrStreetName: string;
  CurrAddrStreetType: string;
  CurrAddrZipCode: string;
  DeRateRequested: string;
  DeVehAge: number;
  DeVehCashPrice: string;
  DeVehDownPmt: string;
  DeVehNewPaymentAmt: string;
  DeVehOldPaymentAmt: string;
  DeVehTradeIn: string;
  Dep2Dependants: Dep2Dependant[];
  DepositAmt: string;
  DocAlteredForged: boolean;
  EcoaInqType: string;
  Exp2Amount: Exp2Amount[];
  Exp2OtherAmount: Exp2OtherAmount[];
  Exp2ResidenceAmount: Exp2ResidenceAmount[];
  ExpandedHistory: boolean;
  FirstName: string;
  HawkIndicator: string;
  Inc2OtherAmount: Inc2OtherAmount[];
  Inc2SalaryAmount: Inc2SalaryAmount[];
  Inc2TotalAmount: Inc2TotalAmount[];
  IncludeIdVerification: boolean;
  IncludeNewAccountChex: boolean;
  IncludeOfac: boolean;
  IncludeQualiFile: boolean;
  Income: string;
  InfoInconsistent: boolean;
  InquiryType: number;
  InternetUserId: string;
  Job2Months: Job2Month[];
  Job2PrevMonths: Job2PrevMonth[];
  Job2PrevYears: Job2PrevYear[];
  Job2Years: Job2Year[];
  LastName: string;
  LoanAmount: string;
  LoanTerms: number;
  Locator: number;
  MiddleName: string;
  MultipleFile: number;
  NewMnthlyPmt: string;
  OfacInquiry: boolean;
  OldMnthlyPmt: string;
  OptFeatureCode: string;
  Override: number;
  OverrideAmount: string;
  PhoneAppend: number;
  QueueAfterTime: number;
  QueueCode: number;
  RecommendedActionTypeId: number;
  RequestDate: string;
  RequestNumber: number;
  RequestTime: number;
  Res2Months: Res2Month[];
  Res2PrevMonths: Res2PrevMonth[];
  Res2PrevType: Res2PrevType[];
  Res2PrevYears: Res2PrevYear[];
  Res2Type: Res2Type[];
  Res2Years: Res2Year[];
  ResponseFormat: number;
  ServiceBureau: boolean;
  SigInconsistent: boolean;
  Source: number;
  SpouseBirthDate: string;
  SpouseFirst: string;
  SpouseIncome: string;
  SpouseLast: string;
  SpouseMiddle: string;
  SpouseSsn: string;
  Ssn: string;
  SsnSearchFacs: string;
  StatusCode: number;
  SubscriberCode: string;
  TestEnvironment: boolean;
  User: number;
  Version: number;
}

export interface Dep2Dependant {
  EntryId: number;
  Dep2Dependants: number;
}

export interface Exp2Amount {
  EntryId: number;
  Exp2Amount: string;
}

export interface Exp2OtherAmount {
  EntryId: number;
  Exp2OtherAmount: string;
}

export interface Exp2ResidenceAmount {
  EntryId: number;
  Exp2ResidenceAmount: string;
}

export interface Inc2OtherAmount {
  EntryId: number;
  Inc2OtherAmount: string;
}

export interface Inc2SalaryAmount {
  EntryId: number;
  Inc2SalaryAmount: string;
}

export interface Inc2TotalAmount {
  EntryId: number;
  Inc2TotalAmount: string;
}

export interface Job2Month {
  EntryId: number;
  Job2Months: number;
}

export interface Job2PrevMonth {
  EntryId: number;
  Job2PrevMonths: number;
}

export interface Job2PrevYear {
  EntryId: number;
  Job2PrevYears: number;
}

export interface Job2Year {
  EntryId: number;
  Job2Years: number;
}

export interface Res2Month {
  EntryId: number;
  Res2Months: number;
}

export interface Res2PrevMonth {
  EntryId: number;
  Res2PrevMonths: number;
}

export interface Res2PrevType {
  EntryId: number;
  Res2PrevType: number;
}

export interface Res2PrevYear {
  EntryId: number;
  Res2PrevYears: number;
}

export interface Res2Type {
  EntryId: number;
  Res2Type: number;
}

export interface Res2Year {
  EntryId: number;
  Res2Years: number;
}
