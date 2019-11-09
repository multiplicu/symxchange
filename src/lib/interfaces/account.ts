export interface Account {
  ActivityDate: string;
  AlternateAddress: AlternateAddress[];
  AlternateNameLocator: number;
  AlternateNameType: number;
  AlternatePhone: AlternatePhone[];
  BondIntLastYear: string;
  BondIntYtd: string;
  Branch: number;
  CappedFeesAmountCap: string;
  CappedFeesAmtPeriod: string;
  CappedFeesCntPeriod: number;
  CappedFeesCountCap: number;
  CdTotalAmount: string;
  CommercialCode: number;
  CountLimit: CountLimit[];
  CrTotalAmount: string;
  CreatedAtBranch: number;
  CreatedByUser: number;
  CurrentRelationshipCode: number;
  DivLastYearNonTax: string;
  DivLastYearTax: string;
  DivYtdNontax: string;
  DivYtdTax: string;
  EStmtEnable: number;
  EStmtNotify: number;
  EnableFloat: number;
  FmLastPurgeDate: string;
  FrCdTotalAmount: string;
  FrCdUnits: string;
  FrCrTotalAmount: string;
  FrCrUnits: string;
  FrozenMode: number;
  HeadOfHousehold: number;
  HouseholdStatement: number;
  InterestLastYear: string;
  InterestYtd: string;
  InvalidAttemptCount: number;
  InvalidAttemptDate: string;
  InvalidAttemptTime: number;
  KrHoldBaseAmount: string;
  KrTotalAmount: string;
  LastFmDate: string;
  Limit: Limit[];
  LimitAmount: LimitAmount[];
  LimitCount: LimitCount[];
  LimitUsageDate: string;
  MemberGroup: number;
  MemberStatus: number;
  NonRegCcCheckHoldBaseAmt: string;
  NonRegCcCheckTotalAmt: string;
  NsfMonthlyCount: NsfMonthlyCount[];
  NsfToday: number;
  Number: string;
  OpenDate: string;
  PayeeLine: PayeeLine[];
  PayeeNameLocator: number;
  PayeeNameType: number;
  PayeePhone: PayeePhone[];
  PaymentHistory: PaymentHistory[];
  PerItemLimit: PerItemLimit[];
  PrgdRecActivityDt?: string;
  RecordChangeDate: string;
  RelationshipCode: number;
  RelationshipOverride: number;
  Restrict: number;
  StatementMailCode: number;
  Type: number;
  UserAmount1: string;
  UserAmount2: string;
  UserChar1?: string;
  WarningCode: WarningCode[];
  WarningExpiration?: WarningExpiration;
  WdTotalAmount: string;
  WrTotalAmount: string;
  Reference?: string;
}

export interface AlternateAddress {
  EntryId: number;
  AlternateAddress: string;
}

export interface AlternatePhone {
  EntryId: number;
  AlternatePhone: string;
}

export interface CountLimit {
  EntryId: number;
  CountLimit: number;
}

export interface Limit {
  EntryId: number;
  Limit: string;
}

export interface LimitAmount {
  EntryId: number;
  LimitAmount: string;
}

export interface LimitCount {
  EntryId: number;
  LimitCount: number;
}

export interface NsfMonthlyCount {
  EntryId: number;
  NsfMonthlyCount: number;
}

export interface PayeeLine {
  EntryId: number;
  PayeeLine: string;
}

export interface PayeePhone {
  EntryId: number;
  PayeePhone: string;
}

export interface PaymentHistory {
  EntryId: number;
  PaymentHistory: number;
}

export interface PerItemLimit {
  EntryId: number;
  PerItemLimit: string;
}

export interface WarningCode {
  EntryId: number;
  WarningCode: number;
}

export interface WarningExpiration {
  EntryId: number;
  WarningExpiration: string;
}
