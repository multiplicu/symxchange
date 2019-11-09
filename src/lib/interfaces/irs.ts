export interface Irs {
  ActualMaxContribution?: string;
  ContrLastYear?: ContrLastYear[];
  ContrThisYear?: ContrThisYear[];
  ContributionYear?: number;
  DistrLastYear?: DistrLastYear[];
  DistrThisYear?: DistrThisYear[];
  FairMarketValueDeath?: string;
  FairMarketValueLastYear?: string;
  IraRmd?: string;
  IrsCode?: number;
  IrsPlan?: number;
  LastDistribType?: number;
  Locator?: number;
  MaxContribution?: string;
  MsaHolderCode?: number;
  OpenDate?: string;
  RecordChangeDate?: string;
  RmdTableOption?: number;
  Ssn: string;
}

export interface ContrLastYear {
  EntryId: number;
  ContrLastYear: string;
}

export interface ContrThisYear {
  EntryId: number;
  ContrThisYear: string;
}

export interface DistrLastYear {
  EntryId: number;
  DistrLastYear: string;
}

export interface DistrThisYear {
  EntryId: number;
  DistrThisYear: string;
}
