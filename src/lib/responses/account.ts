import { CredRep } from './../interfaces/credRep';
import { Irs } from './../interfaces/irs';
import { Loan } from './../interfaces/loan';
import { LoanApp } from './../interfaces/loanApp';
import { Lookup } from './../interfaces/lookup';
import { ShareCheckOrder } from './../interfaces/shareCheckOrder';
import { Transfer } from './../interfaces/transfer';
import { Account } from './../interfaces/account';
import { Comment } from './../interfaces/comment';
import { CredRepItem } from './../interfaces/credRepItem';
import { LoanAppFinance } from './../interfaces/loanAppFinance';
import { LoanAppNote } from './../interfaces/loanAppNote';
import { LoanAppPerson } from './../interfaces/loanAppPerson';
import { Name } from './../interfaces/name';
import { Preference } from './../interfaces/preference';
import { Share } from './../interfaces/share';
import { ShareHold } from './../interfaces/shareHold';
import { Tracking } from './../interfaces/tracking';
import { GetResponse } from './get';
import { PagedResponse } from './get-paged';

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
