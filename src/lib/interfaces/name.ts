export interface Name {
  ActiveDuty: number;
  AddrCreateDate?: string;
  AddrFmLastDate?: string;
  AddrRecordChangeDate?: string;
  AddressType: number;
  BeneficiaryPercent: string;
  BirthDate?: string;
  Chapter4StatusCode: string;
  City?: string;
  Confidential: number;
  CrAddrChgDate?: string;
  CrNameChgDate: string;
  CtrExempt: number;
  CurrGrossMonthPay: string;
  CurrNetMonthPay: string;
  DbaNameFormat: number;
  DbaShortName: string;
  EcoaCode: number;
  Email?: string;
  EmployerName?: string;
  First?: string;
  FormW8OnFile: number;
  HomePhone?: string;
  IdentDocFlag: IdentDocFlag[];
  IdentIdNumber?: IdentIDNumber;
  IdentIdType: IdentIDType[];
  IrsCorrection: number;
  Last: string;
  LastAddrChgDate: string;
  LastAddrVerifDate?: string;
  LastFmDate: string;
  License?: string;
  Locator: number;
  LongName: string;
  MailOverride: number;
  MarketingAddress: number;
  MbrAddrFileType: number;
  MbrAddrNumLink?: string;
  MbrAddrNumber?: string;
  MbrCreateDate: string;
  MbrFileType: number;
  MbrFmLastDate: string;
  MbrRecordChangeDate: string;
  MbrStatus: number;
  MbrStatusFmDate: string;
  MemberNumLink: string;
  MemberNumber: string;
  Middle?: string;
  MobilePhone?: string;
  NameFormat: number;
  NraTaxRate: string;
  PhoneType: number;
  PreferredContact: string;
  PreferredContactMethod: number;
  RecordChangeDate: string;
  Restrict: number;
  ShortName: string;
  Ssn?: string;
  SsnCertification: number;
  SsnOverride: number;
  SsnType: number;
  State?: string;
  Street?: string;
  SubType: number;
  SubstantialOwner: number;
  Type: number;
  UsPersonFlag: number;
  UserAmount1: string;
  UserAmount2: string;
  UserChar2?: string;
  WorkPhone?: string;
  ZipCode?: string;
  BeneficialOwner: number;
  BeneficialPercent: string;
  Irs1042SAmendNum: number;
  CrSsnChgDate?: string;
  MbrAddrNumLinkChgDate?: string;
  MemberNumLinkChgDate?: string;
}

export interface IdentDocFlag {
  EntryId: number;
  IdentDocFlag: number;
}

export interface IdentIDNumber {
  EntryId: number;
  IdentIdNumber: string;
}

export interface IdentIDType {
  EntryId: number;
  IdentIdType: number;
}
