export interface Preference {
  AudLastLogonDate: string;
  AudLastLogonTime: number;
  AudioAccess: string;
  AudioAccess2: string;
  AudioAccessMode: number;
  AudioAccessMode2: number;
  AudioCallCount: number;
  AudioCallMinutes: number;
  AudioEnable: number;
  BillPayAmount: string;
  BillPayCount: number;
  BillPayCountLimit: number;
  BillPayLimit: string;
  BillPayMax: string;
  DepAmount: string;
  DepCount: number;
  DepCountLimit: number;
  DepLimit: string;
  DepMax: string;
  EmailAddrChgDate: string;
  EmailAddrChgTime: number;
  EmailAddress: string;
  HbCallCount: number;
  HbCallMinutes: number;
  HbEnable: number;
  HbLastLogonDate: string;
  HbLastLogonTime: number;
  HbMode: number;
  HbPassword: string;
  HbPassword2: string;
  HbPasswordMode: number;
  HbPasswordMode2: number;
  HbUsername: string;
  InteractMode: number;
  InvalidPwdAttmpts: number;
  Language: number;
  LastAccessChangeDate: string;
  LastHbPwChangeDate: string;
  LastLogonDate: string;
  LastLogonTime: number;
  ListTransactions: number;
  Locator: number;
  LockCount: number;
  Locked: number;
  PrevHbPassword: PrevHbPassword[];
  PrevHbPasswordMode: PrevHbPasswordMode[];
  PwdResetDate: string;
  PwdResetProbation: number;
  PwdResetRqstDate: string;
  PwdResetRqstNotice: number;
  PwdResetRqstTime: number;
  PwdResetime: number;
  RecordChangeDate: string;
  SecurityAnswer: string;
  SecurityQuestion: string;
  Type: number;
  UserCode: number;
  WdCashAmount: string;
  WdCashCount: number;
  WdCashCountLimit: number;
  WdCashLimit: string;
  WdCashMax: string;
  WdCheckAmount: string;
  WdCheckCount: number;
  WdCheckCountLimit: number;
  WdCheckLimit: string;
  WdCheckMax: string;
  XferAmount: string;
  XferCount: number;
  XferCountLimit: number;
  XferLimit: string;
  XferMax: string;
}

export interface PrevHbPassword {
  EntryId: number;
  PrevHbPassword: string;
}

export interface PrevHbPasswordMode {
  EntryId: number;
  PrevHbPasswordMode: number;
}
