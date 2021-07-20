import { Account } from './../interfaces/account';
import { Comment } from './../interfaces/comment';
import { CredRep } from './../interfaces/credRep';
import { CredRepItem } from './../interfaces/credRepItem';
import { GetResponse } from './get';
import { Irs } from './../interfaces/irs';
import { Loan } from './../interfaces/loan';
import { LoanApp } from './../interfaces/loanApp';
import { LoanAppFinance } from './../interfaces/loanAppFinance';
import { LoanAppNote } from './../interfaces/loanAppNote';
import { LoanAppPerson } from './../interfaces/loanAppPerson';
import { Lookup } from './../interfaces/lookup';
import { Name } from './../interfaces/name';
import { PagedResponse } from './get-paged';
import { Preference } from './../interfaces/preference';
import { Share } from './../interfaces/share';
import { ShareCheckOrder } from './../interfaces/shareCheckOrder';
import { ShareHold } from './../interfaces/shareHold';
import { Tracking } from './../interfaces/tracking';
import { Transfer } from './../interfaces/transfer';

export interface AccountResponse extends GetResponse {
  Account: Account;
}

export interface NameResponse extends GetResponse {
  Name: Name;
}

export interface LoanAppPersonResponse extends GetResponse {
  LoanAppPerson: LoanAppPerson;
}

export interface PreferenceResponse extends GetResponse {
  Preference: Preference;
}

export interface LookupResponse extends GetResponse {
  Lookup: Lookup;
}

export interface IrsResponse extends GetResponse {
  Irs: Irs;
}

export interface ShareResponse extends GetResponse {
  Share: Share;
}

export interface ShareHoldResponse extends GetResponse {
  ShareHold: ShareHold;
}

export interface ShareCheckOrderResponse extends GetResponse {
  ShareCheckOrder: ShareCheckOrder;
}

export interface ShareTransferResponse extends GetResponse {
  ShareTransfer: Transfer;
}

export interface LoanTransferResponse extends GetResponse {
  LoanTransfer: Transfer;
}

export interface CommentPagedResponse extends PagedResponse {
  Comment: Comment[];
}

export interface SharePagedResponse extends PagedResponse {
  Share: Share[];
}

export interface NamePagedResponse extends PagedResponse {
  PagedResponse: { Name: Name[] };
  Name: Name[];
}

export interface LoanPagedResponse extends PagedResponse {
  Loan: Loan[];
}

export interface LoanAppPagedResponse extends PagedResponse {
  LoanApp: LoanApp[];
}

export interface LoanAppFinancePagedResponse extends PagedResponse {
  LoanAppFinance: LoanAppFinance[];
}

export interface LoanAppNotePagedResponse extends PagedResponse {
  LoanAppNote: LoanAppNote[];
}

export interface LoanNamePagedResponse extends PagedResponse {
  LoanName: Name[];
}

export interface PersonPagedResponse extends PagedResponse {
  LoanAppPerson: LoanAppPerson[];
}

export interface LoanAppTrackingResponse extends PagedResponse {
  LoanAppTracking: Tracking[];
}

export interface PreferencePagedResponse extends PagedResponse {
  Preference: Preference[];
}

export interface CredRepResponse extends PagedResponse {
  CredRep: CredRep[];
}

export interface CredRepItemResponse extends PagedResponse {
  CredRepItem: CredRepItem[];
}
