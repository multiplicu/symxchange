export interface ShareCheckOrder {
  Accent?: string;
  AcctAddrInkColor?: number;
  BillingCode?: number;
  Branch?: number;
  BusBindingStyle?: number;
  BusNumCopies?: number;
  ChargeShipping?: number;
  CheckStyle?: string;
  CheckType?: number;
  CutInkColor?: number;
  ImprintFont?: number;
  ImprintJustify?: number;
  ImprintLine?: ImprintLine[];
  ImprintLineSize?: ImprintLineSize[];
  ImprintUsage?: ImprintUsage[];
  LastFmDate?: string;
  LastOrderDate?: string;
  Locator?: number;
  MicrLine?: string;
  NumberSigLines?: number;
  OpenDate?: string;
  OverSigFont?: number;
  OverSigJustify?: number;
  OverSigLineSize?: number;
  Processor?: number;
  Quantity?: number;
  RecordChangeDate?: string;
  RerunReason?: number;
  ShipMethod?: number;
  ShipTo?: number;
  SpecialInstr?: SpecialInstr[];
  StartNumber?: number;
  Status?: number;
  StatusDate?: string;
  TaxExemptCode?: number;
  TitleInkColor?: number;
  UserId?: number;
}

export interface ImprintLine {
  EntryId: number;
  ImprintLine: string;
}

export interface ImprintLineSize {
  EntryId: number;
  ImprintLineSize: number;
}

export interface ImprintUsage {
  EntryId: number;
  ImprintUsage: number;
}

export interface SpecialInstr {
  EntryId: number;
  SpecialInstr: string;
}
