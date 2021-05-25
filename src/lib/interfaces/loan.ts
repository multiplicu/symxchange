export interface Loan {
  AccelerationAmt: string;
  AccelerationStmtMsgCode: number;
  AccrualStatus: number;
  ActivityDate: string;
  AdvanceAmount: string;
  AgencyIdentifier: number;
  AllowUnappliedPmt: number;
  AlternateAddress: AlternateAddress[];
  AlternateNameLocator: number;
  AlternateNameType: number;
  AlternatePayment: string;
  AlternatePhone: AlternatePhone[];
  AmortizationSchd: number;
  AmortizationSchdType: number;
  AmortizationTerm: number;
  ApprovalCode: number;
  ApprovalDate?: string;
  Apr: string;
  ArmNotice: number;
  AvailCreditCalc: number;
  AvailableBalanceTransfer: string;
  AvailableCashAdvance: string;
  AvailableCombinedCabt: string;
  AvailableCredit: string;
  AvgWeightedIntRate: string;
  BalXfrAvgBalance: BALXfrAvgBalance[];
  BalXfrNewBalance: BALXfrNewBalance[];
  BalXfrOldBalance: BALXfrOldBalance[];
  Balance: string;
  BalanceTransferLimit: string;
  BalloonAmount: string;
  BcdDay1: number;
  BcdDay2: number;
  BeginningYearBalance: string;
  BilledFeeBucketAmount: BilledFeeBucketAmount[];
  BilledFeeLastYear: string;
  BilledFeeLstYrNoAdj: string;
  BilledFeeUnpaid: string;
  BilledFeeYtd: string;
  BilledFeeYtdNoAdj: string;
  Branch: number;
  BtAddOnSinceLastStmt: BTAddOnSinceLastStmt[];
  BtIntCharge: string;
  BtLimitMax: string;
  BtNewIntUnpaid: string;
  BtOldIntUnpaid: string;
  BtPercent: string;
  BtPmtSinceLastStmt: BTPmtSinceLastStmt[];
  BtTransIntCharge: string;
  BureauScore: BureauScore[];
  CaAddOnSinceLastStmt: CAAddOnSinceLastStmt[];
  CaBtTransIntChargeBilledYtd: string;
  CaIntCharge: string;
  CaLimitMax: string;
  CaNewIntUnpaid: string;
  CaOldIntUnpaid: string;
  CaPercent: string;
  CaPmtSinceLastStmt: CAPmtSinceLastStmt[];
  CaTransIntCharge: string;
  CallItemSchd: number;
  CallItemSchdType: number;
  CappedFeesAmountCap: string;
  CappedFeesAmtPeriod: string;
  CappedFeesCntPeriod: number;
  CappedFeesCountCap: number;
  CashAdvAvgBalance: CashAdvAvgBalance[];
  CashAdvNewBalance: CashAdvNewBalance[];
  CashAdvOldBalance: CashAdvOldBalance[];
  CashAdvanceLimit: string;
  CcIntBilledLastYear: string;
  CcIntBilledYtd: string;
  ChargeOffAmount: string;
  ChargeOffType: number;
  CitySalesTaxRate: string;
  CntySalesTaxRate: string;
  CollateralCode: number;
  CombinedCaBtLimit: string;
  CombinedCaBtLimitMax: string;
  CombinedCaBtPercent: string;
  ComboLnSegmentMax: number;
  ComboPmtOrderMeth: number;
  ComboSeg0PmtOrder: number;
  CorporateUserTransferCode: number;
  CouponCode: number;
  CrHighBal: string;
  CrPmtCurrent: string;
  CrPmtHistory: CRPmtHistory[];
  CreatedAtBranch: number;
  CreatedByUser: number;
  CreditLimit: string;
  CreditLimitGroup: number;
  CreditReportLastStatus: number;
  CreditReportTransferIndicator: number;
  CreditReportingCode: number;
  CreditScore: number;
  CreditScoreType: number;
  CuTotalsUseCode: number;
  CurrIntPayable: string;
  CurrMonthPaidInt: string;
  CurrStmtFees: string;
  CurrStmtIntAccrd: string;
  CurrStmtLossMitAmtDue: string;
  DealerReserve: string;
  Description: string;
  DiscountRate: string;
  DqCalculationMethod: number;
  DqNoticeNumber: number;
  DqNoticeType: number;
  DueDateAdvanceCode: number;
  DueDay1: number;
  DueDay2: number;
  EcoaCode: number;
  EffectiveApr: string;
  EffectiveBalance: string;
  EscrowAmount: string;
  EscrowApplied: string;
  EscrowBucketAmount: EscrowBucketAmount[];
  EscrowUnpaid: string;
  Fasb91AlternateTerm: number;
  Fasb91Code: number;
  FeeAddOnSinceLastStmt: string;
  FeeBillingAmount: string;
  FeeCount: FeeCount[];
  FeeNewBalance: string;
  FeeOldBalance: string;
  FeePmtSinceLastStmt: string;
  FeesChargesPostingOption: number;
  FeesLastYear: string;
  FeesLastYrNoAdj: string;
  FeesYtd: string;
  FeesYtdNoAdj: string;
  FinalChgOffStmtMsgCode: number;
  ForeclosureStmtMsgCode: number;
  GlAccrualStatusOption: number;
  HighRiskCode: number;
  Id: string;
  InitialArmNotice: number;
  InitialBcdSettingOption: number;
  InsuranceBalance: string;
  InsuranceLastYear: string;
  InsuranceLstYrNoAdj: string;
  InsuranceMax: string;
  InsuranceType: number;
  InsuranceYtd: string;
  InsuranceYtdNoAdj: string;
  IntPaidPartialDayAmt: string;
  IntPayoffCalc: number;
  IntUnpaidBilled: string;
  InterestDue: string;
  InterestFromOpen: string;
  InterestLastYear: string;
  InterestRate: string;
  InterestRateIndex: number;
  InterestRateMargin: string;
  InterestRateMarginSign: number;
  InterestRateMax: string;
  InterestRateMin: string;
  InterestType: number;
  InterestUnpaid: string;
  InterestYtd: string;
  LastAccrualReversal: string;
  LastFmDate: string;
  LateChargeAccrued: string;
  LateChargeDue: string;
  LateChargeLastYear: string;
  LateChargeType: number;
  LateChargeUnpaid: string;
  LateChargeYtd: string;
  LateChgLastYrNoAdj: string;
  LateChgPdFromOpen: string;
  LateChgWaivedFromOpen: string;
  LateChgWaivedLastYear: string;
  LateChgWaivedYtd: string;
  LateChgYtdNoAdj: string;
  LeaseTerminateFee: string;
  LedgerAccrual: string;
  LoanCode: number;
  LossMitPayment: string;
  LossMitPmtStmtMsgCode: number;
  LossMitStmtMsgCode: number;
  LrlnBalance: string;
  MaprCurrStmtIntAccrd: string;
  MaxDueDateAdvancePeriod: number;
  MemberUserTransferCode: number;
  MfoelId: number;
  MilitaryAprLoan: number;
  MinAdvance: string;
  MinBalance: string;
  MortgInsCollLastYr: string;
  MortgInsCollYtd: string;
  MtdAccruedInt: string;
  MtdAccumulatedInt: string;
  MtdPaidInt: string;
  MtdPriorRateAccrual: string;
  NewLoanDueDateCode: number;
  NewSegCutoffDays: number;
  NewSegCutoffOption: number;
  NsfLastYear: number;
  NsfMonthToDate: number;
  NsfYtd: number;
  OccupancyType: number;
  OpenDate: string;
  OrigInsuranceType: number;
  OrigUnamortizedFees: string;
  OriginalBalance: string;
  OriginalRate: string;
  OvlAuthFee: number;
  OvlCycleCount: OvlCycleCount[];
  OvlOptIn: number;
  OvlPrevAuthFee: number;
  OvlStmtDisclFee: string;
  PartialPayment: string;
  PastDueAmount: string;
  PayeeLine: PayeeLine[];
  PayeeNameLocator: number;
  PayeeNameType: number;
  PayeePhone: PayeePhone[];
  Payment: string;
  PaymentApplicationMethod: number;
  PaymentCalcType: number;
  PaymentCount: number;
  PaymentDue: string;
  PaymentFrequency: number;
  PaymentHistory: PaymentHistory[];
  PaymentMethod: number;
  PaymentSkipStartDay: number;
  PaymentSkips: number;
  PaymentType: number;
  PayoffAmount: string;
  PeriodicCap: string;
  PeriodicFrequency: number;
  PeriodicStartRate: string;
  PmiAppraisedValue: string;
  PmiLastYear: string;
  PmiLtvRatio: string;
  PmiOriginalValue: string;
  PmiPurchasePrice: string;
  PmiYtd: string;
  PmtBucketAmount: PmtBucketAmount[];
  PointsLastYear: string;
  PointsYtd: string;
  PreMthIntAccrued: PreMthIntAccrued[];
  PreMthIntAccumLtd: PreMthIntAccumLtd[];
  PreMthIntPaid: PreMthIntPaid[];
  PrepaidFinanceChg: string;
  PrepaymentPenalty: number;
  PrevBeginningYearBalance: string;
  PrevStmtFees: string;
  PrevStmtIntAccrd: string;
  PrevStmtLossMitAmtDue: string;
  PrinPaidFromOpen: string;
  PrincipalLastYear: string;
  PrincipalYtd: string;
  PromoAdvanceCutoff: PromoAdvanceCutoff[];
  PromoBalance: PromoBalance[];
  PromoRate: PromoRate[];
  PromoRateMax: PromoRateMax[];
  PromoRateMin: PromoRateMin[];
  PromoRateOffset: PromoRateOffset[];
  PromoRateType: PromoRateType[];
  PromoTotalAdvances: PromoTotalAdvance[];
  PromoType: PromoType[];
  PropertyAddressType: number;
  PuAddOnSinceLastStmt: PuAddOnSinceLastStmt[];
  PuIntCharge: string;
  PuNewIntUnpaid: string;
  PuOldIntUnpaid: string;
  PuPmtSinceLastStmt: PuPmtSinceLastStmt[];
  PurchAvgBalance: PurchAvgBalance[];
  PurchNewBalance: PurchNewBalance[];
  PurchOldBalance: PurchOldBalance[];
  PurposeCode: number;
  PutItemSchd: number;
  PutItemSchdType: number;
  RateChangeCycleMonths: number;
  RateRoundingMethod: number;
  RecordChangeDate: string;
  Reference?: string;
  RefinanceBalance: string;
  RefinanceCounter: number;
  RefundLastYear: string;
  RefundPostCode: number;
  RefundYtd: string;
  RegECount: number;
  RegPaymentsTmtMsgCode: number;
  ReinstatementAmt: string;
  ReinstatementStmtMsgCode: number;
  RiskRate: string;
  RoundRateTo: string;
  SalesTaxCityIndicator: number;
  SalesTaxCountyIndicator: number;
  SalesTaxDue: string;
  SalesTaxPayoff: string;
  SalesTaxRate: string;
  SalesTaxStateIndicator: number;
  SchdPeriodStartRate: string;
  SchdRate: string;
  SchdSplitBalance: string;
  SchdSplitRate: string;
  SecuredAmount: string;
  SecuredCode: number;
  Seg0Balance: string;
  Seg0CurrStmtIntAccrd: string;
  Seg0IntUnpaid: string;
  Seg0IntUnpaidBilled: string;
  Seg0InterestLastYear: string;
  Seg0InterestYtd: string;
  Seg0LevelPrinPmt: string;
  Seg0PartialPmt: string;
  Seg0Payment: string;
  Seg0PaymentDue: string;
  Seg0PaymentOrder: number;
  Seg0PayoffAmt: string;
  Seg0PmtBucketAmt: Seg0PmtBucketAmt[];
  Seg0PrevStmtIntAccrd: string;
  SendFinalChgOffStmt: number;
  Service: Service[];
  SinglePremiumDisability: string;
  SinglePremiumLife: string;
  SplitRate: string;
  SplitRateBalance: string;
  StateSalesTaxRate: string;
  StatementDate: string;
  StatementGroup: number;
  StatementMailCode: number;
  StatementNewBalance: string;
  StatementOldBalance: string;
  StmtCcIntBilledYtd: string;
  StmtEscrowUnpaid: string;
  StmtFeesLastYear: string;
  StmtFeesYtd: string;
  StmtIntFromOpen: string;
  StmtLateChargeLastYear: string;
  StmtLateChargeYtd: string;
  StmtLateChgUnpaid: string;
  StmtLtChgPdFrmOpn: string;
  StmtMaxLateFee: string;
  StmtMaxPenaltyApr: string;
  StmtPrinPdFromOpen: string;
  StmtPrincipalLastYear: string;
  StmtPrincipalYtd: string;
  StmtUnappliedPartialPmt: string;
  StudentLoanCapIntLastYear: string;
  StudentLoanCapIntYtd: string;
  StudentLoanCode: number;
  StudentLoanOrigFeeLastYear: string;
  StudentLoanOrigFeeYtd: string;
  ThresholdPmt: string;
  TotalAccrualReversal: string;
  TotalBtBalanceToDate: string;
  TotalCaBalanceToDate: string;
  TotalFeeBalanceToDate: string;
  TotalPuBalanceToDate: string;
  Type: number;
  UnAdjThresholdPmt: string;
  UnAdjaPaymentDue: string;
  UnamortizedFees: string;
  UnappliedPartialPmt: string;
  UserAmount1: string;
  UserAmount2: string;
  VariableRateIndicator: number;
  Vin?: string;
  WarningCode: WarningCode[];
  BkChapterReported: number;
  MtgNumProp: number;
  FixedDealerCityTaxRate: string;
  FixedDealerCountyTaxRate: string;
  FixedDealerStateTaxRate: string;
  FixedLesseeCityTaxRate: string;
  FixedLesseeCountyTaxRate: string;
  FixedLesseeStateTaxRate: string;
  LeaseDispositionFee: string;
  PositivePayDraft: number;
  ApplicationId?: string;
  BeginningCycleDate?: string;
  CloseDate?: string;
  CreditReportNumber?: string;
  DueDate?: string;
  FirstPaymentDate?: string;
  InterestDate?: string;
  LastAdvanceDate?: string;
  LastCrReportDate?: string;
  LastPaymentDate?: string;
  LastTranDate?: string;
  LateChargeDate?: string;
  LrlnDate?: string;
  MaturityDate?: string;
  MaxLoanDueDate?: string;
  OriginalDate?: string;
  OvlAuthFeeEffDate?: string;
  Seg0BeginningCycleDate?: string;
  StatementPrevDate?: string;
  WarningExpiration?: WarningExpirationElement[] | WarningExpirationElement;
  DqNoticeDate?: string;
  Nickname?: string;
  BalloonDate?: string;
  CardActLateFeeEventDate?: string;
  CardActOverLimitFeeEventDate?: string;
  CredLimitExpiration?: string;
  NextRateChangeDate?: string;
  NoteNumber?: string;
  PeriodicStartDate?: string;
  PmtBucketDueDate?: PmtBucketDueDate[];
  LastPurgeDate?: string;
  CcPromoEffectDate?: CcPromoEffectDate;
  NextStmtDate?: string;
  PromoEffectDate?: PromoEffectDate;
  PromoExpireDate?: PromoExpireDate;
}

export interface AlternateAddress {
  EntryId: number;
  AlternateAddress: string;
}

export interface AlternatePhone {
  EntryId: number;
  AlternatePhone: string;
}

export interface BALXfrAvgBalance {
  EntryId: number;
  BalXfrAvgBalance: string;
}

export interface BALXfrNewBalance {
  EntryId: number;
  BalXfrNewBalance: string;
}

export interface BALXfrOldBalance {
  EntryId: number;
  BalXfrOldBalance: string;
}

export interface BilledFeeBucketAmount {
  EntryId: number;
  BilledFeeBucketAmount: string;
}

export interface BTAddOnSinceLastStmt {
  EntryId: number;
  BtAddOnSinceLastStmt: string;
}

export interface BTPmtSinceLastStmt {
  EntryId: number;
  BtPmtSinceLastStmt: string;
}

export interface BureauScore {
  EntryId: number;
  BureauScore: number;
}

export interface CAAddOnSinceLastStmt {
  EntryId: number;
  CaAddOnSinceLastStmt: string;
}

export interface CAPmtSinceLastStmt {
  EntryId: number;
  CaPmtSinceLastStmt: string;
}

export interface CashAdvAvgBalance {
  EntryId: number;
  CashAdvAvgBalance: string;
}

export interface CashAdvNewBalance {
  EntryId: number;
  CashAdvNewBalance: string;
}

export interface CashAdvOldBalance {
  EntryId: number;
  CashAdvOldBalance: string;
}

export interface CcPromoEffectDate {
  EntryId: number;
  CcPromoEffectDate: string;
}

export interface CRPmtHistory {
  EntryId: number;
  CrPmtHistory: string;
}

export interface EscrowBucketAmount {
  EntryId: number;
  EscrowBucketAmount: string;
}

export interface FeeCount {
  EntryId: number;
  FeeCount: number;
}

export interface OvlCycleCount {
  EntryId: number;
  OvlCycleCount: number;
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

export interface PmtBucketAmount {
  EntryId: number;
  PmtBucketAmount: string;
}

export interface PmtBucketDueDate {
  EntryId: number;
  PmtBucketDueDate: string;
}

export interface PreMthIntAccrued {
  EntryId: number;
  PreMthIntAccrued: string;
}

export interface PreMthIntAccumLtd {
  EntryId: number;
  PreMthIntAccumLtd: string;
}

export interface PreMthIntPaid {
  EntryId: number;
  PreMthIntPaid: string;
}

export interface PromoAdvanceCutoff {
  EntryId: number;
  PromoAdvanceCutoff: string;
}

export interface PromoBalance {
  EntryId: number;
  PromoBalance: string;
}

export interface PromoEffectDate {
  EntryId: number;
  PromoEffectDate: string;
}

export interface PromoExpireDate {
  EntryId: number;
  PromoExpireDate: string;
}

export interface PromoRate {
  EntryId: number;
  PromoRate: string;
}

export interface PromoRateMax {
  EntryId: number;
  PromoRateMax: string;
}

export interface PromoRateMin {
  EntryId: number;
  PromoRateMin: string;
}

export interface PromoRateOffset {
  EntryId: number;
  PromoRateOffset: string;
}

export interface PromoRateType {
  EntryId: number;
  PromoRateType: number;
}

export interface PromoTotalAdvance {
  EntryId: number;
  PromoTotalAdvances: string;
}

export interface PromoType {
  EntryId: number;
  PromoType: number;
}

export interface PuAddOnSinceLastStmt {
  EntryId: number;
  PuAddOnSinceLastStmt: string;
}

export interface PuPmtSinceLastStmt {
  EntryId: number;
  PuPmtSinceLastStmt: string;
}

export interface PurchAvgBalance {
  EntryId: number;
  PurchAvgBalance: string;
}

export interface PurchNewBalance {
  EntryId: number;
  PurchNewBalance: string;
}

export interface PurchOldBalance {
  EntryId: number;
  PurchOldBalance: string;
}

export interface Seg0PmtBucketAmt {
  EntryId: number;
  Seg0PmtBucketAmt: string;
}

export interface Service {
  EntryId: number;
  Service: number;
}

export interface WarningCode {
  EntryId: number;
  WarningCode: number;
}

export interface WarningExpirationElement {
  EntryId: number;
  WarningExpiration: string;
}
