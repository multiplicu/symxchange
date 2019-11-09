export interface LoanAppPerson {
  ActiveDuty: number;
  AddressType: number;
  Bankruptcy: number;
  BirthDate?: string;
  Citizenship: number;
  City?: string;
  CosignOtherLoan: number;
  CurrEmpGrossMonthlyPay: string;
  CurrEmpMonthsEmp: number;
  CurrEmpNetMonthlyPay: string;
  CurrEmpYearsEmp: number;
  DependentAge: DependentAge[];
  DependentCount: number;
  DerogStatus: DerogStatus[];
  DriversLic?: string;
  EducationYears: number;
  EmpHoursPerWeek: number;
  EmploymentStatus: number;
  First: string;
  HmdaAge: number;
  HmdaAppScoringModel: number;
  HmdaCreditScore: number;
  HmdaEthnicity: HmdaEthnicity[];
  HmdaEthnicityVisInd: number;
  HmdaRace: HmdaRace[];
  HmdaRaceVisInd: number;
  HmdaSexInd: number;
  HmdaSexVisInd: number;
  HomePhone?: string;
  IdentDocFlag: IdentDocFlag[];
  IdentIdNumber?: IdentIDNumber;
  IdentIdType: IdentIDType[];
  IncomeMayDecline: number;
  Judgement: number;
  Last: string;
  Locator: number;
  LongName: string;
  MaritalStatus: number;
  Middle: string;
  MonthsCurrAddress: number;
  MonthsPrevAddress: number;
  NameFormat: number;
  OwnRentCurrAddress: number;
  OwnRentPrevAddress: number;
  PartyInLawsuit: number;
  PastForeclosure: number;
  PastRepossession: number;
  PersonCode: number;
  PhoneType: number;
  PreferredContact: string;
  PreferredContactMethod: number;
  PrevEmpGrossMonthlyPay: string;
  PrevEmpMonthsEmp: number;
  PrevEmpYearsEmp: number;
  RecordChangeDate: string;
  Ref1AddressType: number;
  Ref1Code: number;
  Ref2AddressType: number;
  Ref2Code: number;
  Ref3AddressType: number;
  Ref3Code: number;
  ShortName: string;
  Ssn: string;
  State?: string;
  Street?: string;
  Type: number;
  UsPersonFlag: number;
  WorkPhone?: string;
  ZipCode?: string;
  BeneficialOwner: number;
  BeneficialPercent: string;
  CurrEmpName?: string;
  CurrEmpOccupation?: string;
  CurrEmpStartDate?: string;
  Email?: string;
  MobilePhone?: string;
}

export interface DependentAge {
  EntryId: number;
  DependentAge: number;
}

export interface DerogStatus {
  EntryId: number;
  DerogStatus: number;
}

export interface HmdaEthnicity {
  EntryId: number;
  HmdaEthnicity: number;
}

export interface HmdaRace {
  EntryId: number;
  HmdaRace: number;
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
