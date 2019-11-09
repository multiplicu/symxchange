export interface Share {
  ActivityDate: string;
  AlternateAddress: AlternateAddress[];
  AlternateNameLocator: number;
  AlternateNameType: number;
  AlternatePhone: AlternatePhone[];
  AmortizationSchd: number;
  AmortizationSchdType: number;
  AnalysisPmtIdType: number;
  AuthFeeOption: AuthFeeOption[];
  AvailableBalance: string;
  Balance: string;
  BondIntLastYear: string;
  BondIntYtd: string;
  Branch: number;
  BumpRate: string;
  CallItemSchd: number;
  CallItemSchdType: number;
  CappedFeesAmountCap: string;
  CappedFeesAmtPeriod: string;
  CappedFeesCntPeriod: number;
  CappedFeesCountCap: number;
  CddivAccrLastYr: string;
  CddivAccrYtd: string;
  Chapter4WithheldLstYr: string;
  Chapter4WithheldYtd: string;
  Chapter4WithholdingCode: number;
  ChargeOffAmount: string;
  ChargeOffType: number;
  CorporateUserTransferCode: number;
  CourtesyFeeLy: number;
  CourtesyFeeMtd: number;
  CourtesyFeeYtd: number;
  CourtesyPayLastYear: number;
  CourtesyPayMonthToDate: number;
  CourtesyPayYtd: number;
  CreatedAtBranch: number;
  CreatedByUser: number;
  CreditReportLastStatus: number;
  CreditReportOriginalAmountRptd: string;
  CreditReportingCode: number;
  CuTotalsUseCode: number;
  CurrDivPayable: string;
  CurrMonthPaidDiv: string;
  Description: string;
  DivAccrual: string;
  DivAccrualDate: string;
  DivDisbUpdtActvtyD: number;
  DivFromOpen: string;
  DivLastYear: string;
  DivPeriodBalDays: string;
  DivPeriodStart: string;
  DivPostCode: number;
  DivRate: string;
  DivType: number;
  DivYtd: string;
  DividendDue: string;
  DividendRateMargin: string;
  DividendRateMarginSign: number;
  DividendRateMax: string;
  DividendRateMin: string;
  DividendRatePeriodFreq: number;
  EscrowLastYear: string;
  EscrowYtd: string;
  ExtAchXfrDailyLimitIn: string;
  ExtAchXfrDailyLimitOut: string;
  FeeCount: FeeCount[];
  FeeExemptCrtsyBal: string;
  Id: string;
  InsuranceBalanceAge: InsuranceBalanceAge[];
  InsuranceMaximum: string;
  InsuranceType: number;
  IrsCode: number;
  IrsPlan: number;
  LastCrReportDate?: string;
  LastDirectDepAmt: string;
  LastDirectDepDate?: string;
  LastDivAmount: string;
  LastDivDate: string;
  LastFmDate: string;
  LastPurgeDate: string;
  LastTranDate: string;
  LedgerAccrual: string;
  LoanPaymentHold: string;
  MaturityPostCode: number;
  McDivLastYear: string;
  McDivYtd: string;
  MemberBranchSupport: number;
  MemberUserTransferCode: number;
  MinimumBalance: string;
  MinimumDeposit: string;
  MinimumWithdrawal: string;
  MtdAccruedDivs: string;
  MtdEarnedDivs: string;
  MtdPaidDivs: string;
  MtdPriorRateAccrual: string;
  NegativeBalanceNoticeNumber: number;
  NegativeBalanceNoticeType: number;
  Nickname?: string;
  NsfFeeLy: number;
  NsfFeeMtd: number;
  NsfFeeYtd: number;
  NsfLastYear: number;
  NsfMonthToDate: number;
  NsfYtd: number;
  OpenDate: string;
  OriginalBalance: string;
  OriginalDeposit: string;
  OriginalDepositDate: string;
  OverdraftFeeLastYr: string;
  OverdraftFeeYtd: string;
  OverdraftTolerance: string;
  PayeeLine: PayeeLine[];
  PayeeNameLocator: number;
  PayeeNameType: number;
  PayeePhone: PayeePhone[];
  PenaltyLastYear: string;
  PenaltyType: number;
  PenaltyYtd: string;
  PeriodicCap: string;
  PeriodicStartRate: string;
  PreMthDivAccrued: PreMthDivAccrued[];
  PreMthDivEarned: PreMthDivEarned[];
  PreMthDivPaid: PreMthDivPaid[];
  PutItemSchd: number;
  PutItemSchdType: number;
  RecordChangeDate: string;
  RegDCheckCount: number;
  RegDCtrStartDay: number;
  RegDTransferCount: number;
  RegECount: number;
  RenewShareType: number;
  RenewTermFreq: number;
  RenewTermPeriod: number;
  Service: Service[];
  ShareCode: number;
  StateWithholdingCode: number;
  StateWithholdingLastQtr: string;
  StateWithholdingLastYear: string;
  StateWithholdingQtd: string;
  StateWithholdingYtd: string;
  StatementDate: string;
  StatementGroup: number;
  StatementMailCode: number;
  StatementPrevDate: string;
  SweepBalanceType: number;
  SweepPriority: number;
  SweepTargetMaximum: string;
  SweepTargetMinimum: string;
  TermFrequency: number;
  TermPeriod: number;
  Type: number;
  UnpaidFeeLastYear: string;
  UnpaidFeeYtd: string;
  UserAmount1: string;
  UserAmount2: string;
  WarningCode: WarningCode[];
  WithdrawalCount: number;
  WithdrawalFeeCount: number;
  WithdrawalFeeType: number;
  WithdrawalLimit: number;
  WithdrawnFromOpen: string;
  WithholdingCode: number;
  WithholdingLastYear: string;
  WithholdingYtd: string;
  XfrLastYear: number;
  XfrMonthToDate: number;
  XfrYtd: number;
  YearEndBalance: string;
  Irs1042SUfid: number;
  PositivePayDraft: number;
  MaturityDate?: string;
  ChargeOffDate?: string;
  CheckDigits?: string;
  CloseDate?: string;
}

export interface AlternateAddress {
  EntryId: number;
  AlternateAddress: AlternateAddressEnum;
}

export enum AlternateAddressEnum {
  MichaelWHanchey = 'MICHAEL W HANCHEY',
  OrMICHAELWHANCHEY = 'or MICHAEL W HANCHEY',
  SpringfieldMo65810 = 'SPRINGFIELD MO 65810',
  The6262SParkhavenLn = '6262 S PARKHAVEN LN'
}

export interface AlternatePhone {
  EntryId: number;
  AlternatePhone: EPhone;
}

export enum EPhone {
  The4178318393 = '417-831-8393',
  The4178381550 = '417-838-1550'
}

export interface AuthFeeOption {
  EntryId: number;
  AuthFeeOption: number;
}

export interface FeeCount {
  EntryId: number;
  FeeCount: number;
}

export interface InsuranceBalanceAge {
  EntryId: number;
  InsuranceBalanceAge: string;
}

export interface PayeeLine {
  EntryId: number;
  PayeeLine: AlternateAddressEnum;
}

export interface PayeePhone {
  EntryId: number;
  PayeePhone: EPhone;
}

export interface PreMthDivAccrued {
  EntryId: number;
  PreMthDivAccrued: string;
}

export interface PreMthDivEarned {
  EntryId: number;
  PreMthDivEarned: string;
}

export interface PreMthDivPaid {
  EntryId: number;
  PreMthDivPaid: string;
}

export interface Service {
  EntryId: number;
  Service: number;
}

export interface WarningCode {
  EntryId: number;
  WarningCode: number;
}
