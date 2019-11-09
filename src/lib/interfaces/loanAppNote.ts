export interface LoanAppNote {
  Code: number;
  EnterDate: string;
  EnterTime: number;
  Id: string;
  IdType: number;
  Locator: number;
  RecordChangeDate: string;
  Text: Text;
  TextLineCount: number;
  UserId: number;
  VoidFlag: number;
  VoidedBy: number;
}

export interface Text {
  EntryId: number;
  Text: string;
}
