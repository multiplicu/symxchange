import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Account } from '../interfaces/account';
import { LoanApp } from '../interfaces/loanApp';
import { LoanAppNote } from '../interfaces/loanAppNote';
import { CreateResponse } from '../responses/create';
import { Comment } from './../interfaces/comment';
import { CredRep } from './../interfaces/credRep';
import { CredRepItem } from './../interfaces/credRepItem';
import { LoanAppFinance } from './../interfaces/loanAppFinance';
import { LoanAppPerson } from './../interfaces/loanAppPerson';
import { Name } from './../interfaces/name';
import { Preference } from './../interfaces/preference';
import { Share } from './../interfaces/share';
import { Tracking } from './../interfaces/tracking';
import {
  AccountResponse,
  CommentPagedResponse,
  CredRepItemResponse,
  CredRepResponse,
  IrsResponse,
  LoanAppFinancePagedResponse,
  LoanAppNotePagedResponse,
  LoanAppPagedResponse,
  LoanAppTrackingResponse,
  LookupResponse,
  NamePagedResponse,
  PersonPagedResponse,
  PreferencePagedResponse,
  PreferenceResponse,
  ShareCheckOrderResponse,
  SharePagedResponse,
  ShareResponse,
  ShareTransferResponse
} from './../responses/account';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {
  public constructor(public http: HttpClient) {
    super(http);

    this.url += `quest/account`;
  }

  // ***************
  // *     GET     *
  // ***************

  /**
   * Returns an account
   *
   * @param accountNumber Account number to return
   */
  public getAccount(accountNumber: string): Observable<Account> {
    const method = 'getAccount';
    const params = new HttpParams().set('AccountNumber', accountNumber).set('method', method);

    return this.get<AccountResponse>(this.url, params).pipe(
      map((res: AccountResponse) => res.Account)
    );
  }

  /**
   * Returns an account with specified fields
   *
   * @param accountNumber Account number to return
   * @param fields List of field names to return
   */
  public getAccountSelect(accountNumber: string, fields: string[]): Observable<Account> {
    const method = 'getAccountSelectFields';
    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('fields', fields.join(','))
      .set('includeAll', 'false')
      .set('includeAllField', 'Account')
      .set('method', method);

    return this.get<AccountResponse>(this.url, params).pipe(
      map((res: AccountResponse) => res.Account)
    );
  }

  /**
   * Returns an account
   *
   * @param accountNumber Account number to return
   */
  public getCommentPaged(accountNumber: string, returnCount: number = 100): Observable<Comment[]> {
    const method = 'getCommentPagedList';
    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('method', method)
      .set('returnCount', returnCount.toString());

    return this.getPaged<CommentPagedResponse>(this.url, params).pipe(
      map((res: CommentPagedResponse) => res.Comment || [])
    );
  }

  /**
   * Returns a paged list of Shares with specified fields
   *
   * @param accountNumber Account number containing the shares
   * @param fields List of field names to return
   * @param returnCount Optional number of records to return
   */
  public getSharePagedSelect(
    accountNumber: string,
    fields: string[],
    returnCount: number = 100
  ): Observable<Share[]> {
    const method = 'getSharePagedListSelectFields';
    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('fields', fields.join(','))
      .set('includeAll', 'false')
      .set('includeAllField', 'Share')
      .set('method', method)
      .set('returnCount', returnCount.toString());

    return this.getPaged<SharePagedResponse>(this.url, params).pipe(
      map((res: SharePagedResponse) => res.Share || [])
    );
  }

  /**
   * Returns a list of Names from a given account number
   *
   * @param accountNumber Account number containing the names
   */
  public getNamePaged(accountNumber: string): Observable<Name[]> {
    const method = 'getNamePagedList';
    const params = new HttpParams().set('method', method).set('AccountNumber', accountNumber);

    return this.getPaged<NamePagedResponse>(this.url, params).pipe(
      map((res: NamePagedResponse) => res.Name || [])
    );
  }

  /**
   * Returns a list of loan applications from a given account number
   *
   * @param accountNumber Account number containing the loan applications
   */
  public getLoanAppPaged(accountNumber: string): Observable<LoanApp[]> {
    const method = 'getLoanAppPagedList';
    const params = new HttpParams().set('method', method).set('AccountNumber', accountNumber);

    return this.getPaged<LoanAppPagedResponse>(this.url, params).pipe(
      map((res: LoanAppPagedResponse) => res.LoanApp || [])
    );
  }

  /**
   * Returns a list of loan application finance records for a given account and loan application ID
   *
   * @param accountNumber Account number containing the loan application
   * @param loanAppId Loan application ID that contains the finance records to return
   */
  public getLoanAppFinancePaged(
    accountNumber: string,
    loanAppId: string
  ): Observable<LoanAppFinance[]> {
    const method = 'getLoanAppFinancePagedList';
    const params = new HttpParams()
      .set('method', method)
      .set('LoanAppId', loanAppId)
      .set('AccountNumber', accountNumber);

    return this.getPaged<LoanAppFinancePagedResponse>(this.url, params).pipe(
      map((res: LoanAppFinancePagedResponse) => res.LoanAppFinance || [])
    );
  }

  /**
   * Returns a list of loan application notes from a given account number and loan application ID
   *
   * @param accountNumber Account number containing the loan application
   * @param loanAppId Loan application ID that contains the notes to return
   */
  public getNotes(accountNumber: string, loanAppId: string): Observable<LoanAppNote[]> {
    const method = 'getLoanAppNotePagedList';
    const params = new HttpParams()
      .set('method', method)
      .set('LoanAppId', loanAppId)
      .set('AccountNumber', accountNumber);

    return this.getPaged<LoanAppNotePagedResponse>(this.url, params).pipe(
      map((res: LoanAppNotePagedResponse) => res.LoanAppNote)
    );
  }

  /**
   * Returns a list of Persons from a given account and application
   *
   * @param accountNumber Account number containing the Persons
   * @param loanAppId Loan application ID of which to look for person objects
   */
  public getPersonPaged(accountNumber: string, loanAppId: string): Observable<LoanAppPerson[]> {
    const method = 'getLoanAppPersonPagedList';
    const params = new HttpParams()
      .set('method', method)
      .set('LoanAppId', loanAppId)
      .set('AccountNumber', accountNumber);

    return this.getPaged<PersonPagedResponse>(this.url, params).pipe(
      map((res: PersonPagedResponse) => res.LoanAppPerson || [])
    );
  }

  /**
   * Returns a list of Credit Reports by account number
   *
   * @param accountNumber Account number containing the credit report
   * @param fields List of field names to return
   * @param returnCount Optional number of records to return in a call
   */
  public getCredRepSelect(
    accountNumber: string,
    fields: string[],
    returnCount: number = 100
  ): Observable<CredRep[]> {
    // Fields to select from the account
    // const fields: string[] = ['CompletionDate', 'Locator', 'RequestNumber'];
    const method = 'getCredRepPagedListSelectFields';

    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('fields', fields.join(','))
      .set('includeAll', 'false')
      .set('includeAllField', 'CredRep')
      .set('method', method)
      .set('returnCount', returnCount.toString());

    return this.getPaged<CredRepResponse>(this.url, params).pipe(
      map((res: CredRepResponse) => res.CredRep || [])
    );
  }

  /**
   * Gets a list of Credit Report Items from a given Credit Report
   * @param accountNumber Account number containing the credit report
   * @param locator Locator ID of credit report
   * @param returnCount Optional number of records to return in a call
   */
  public getCredRepItems(
    accountNumber: string,
    locator: string,
    returnCount: number = 250
  ): Observable<CredRepItem[]> {
    const method = 'getCredRepItemPagedList';
    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('CredRepLocator', locator)
      .set('method', method)
      .set('returnCount', returnCount.toString());

    return this.getPaged<CredRepItemResponse>(this.url, params).pipe(
      map((res: CredRepItemResponse) => res.CredRepItem || [])
    );
  }

  /**
   * Returns an array of Tracking objects from a given application ID on an account
   *
   * @param accountNumber Account number to pull tracking from
   * @param loanAppId The loan application ID to pull tracking from
   */
  public getLoanAppTrackingList(accountNumber: string, loanAppId: string): Observable<Tracking[]> {
    const method = 'getLoanAppTrackingPagedList';
    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('LoanAppId', loanAppId)
      .set('method', method);

    return this.getPaged<LoanAppTrackingResponse>(this.url, params).pipe(
      map((res: LoanAppTrackingResponse) => res.LoanAppTracking || [])
    );
  }

  /**
   * Returns a Preference with select fields by account number
   *
   * @param accountNumber Account number containing the preference
   * @param fields List of field names to return
   * @param returnCount Optional number of records to return in a call
   */
  public getPreferenceFields(accountNumber: string, fields: string[]): Observable<Preference> {
    // Fields to select from the account
    const method = 'getPreferenceSelectFields';

    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('fields', fields.join(','))
      .set('includeAll', 'true')
      .set('includeAllField', 'Preference')
      .set('method', method);

    return this.get<PreferenceResponse>(this.url, params).pipe(
      map((res: PreferenceResponse) => res.Preference)
    );
  }

  /**
   * Returns a list of Preference fields by account number
   *
   * @param accountNumber Account number containing the preference
   * @param fields List of field names to return
   * @param returnCount Optional number of records to return in a call
   */
  public getPreferencePagedSelect(
    accountNumber: string,
    fields: string[],
    returnCount: number = 100
  ): Observable<Preference[]> {
    // Fields to select from the account
    const method = 'getPreferencePagedListSelectFields';

    const params = new HttpParams()
      .set('AccountNumber', accountNumber)
      .set('fields', fields.join(','))
      .set('includeAll', 'true')
      .set('includeAllField', 'Preference')
      .set('method', method)
      .set('returnCount', returnCount.toString());

    return this.getPaged<PreferencePagedResponse>(this.url, params).pipe(
      map((res: PreferencePagedResponse) => res.Preference || [])
    );
  }

  // **************
  // *   UPDATE   *
  // **************

  /**
   * Creates a new account with a primary person and preference record and returns
   * the new account number
   *
   * @param account Account object with fields to save
   * @param name Primary person to save with the account
   * @param preference Preference object to save with the account
   */
  public saveAccount(account: any, name: any, preference: any): Observable<string> {
    const body = JSON.stringify({
      method: 'createAccount',
      AccountCreatableFields: account,
      NameCreatableFields: name,
      PreferenceCreatableFields: preference
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates and saves a name to a given account and returns the name's new locator
   *
   * @param accountNumber Account number to save the name to
   * @param name A formatted name object to save to the account
   */
  public saveName(accountNumber: string, name: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createName',
      AccountNumber: accountNumber,
      Creatable: name
    });

    return this.http
      .post<CreateResponse>(this.url, body, {
        headers: this.headers_
      })
      .pipe(
        catchError(this.handleError),
        map((res: CreateResponse) => res.CreateResponse)
      );
  }

  /**
   * Creates and saves a note to a given account and returns the note's new locator
   *
   * @param accountNumber Account number to save the note to
   * @param note A formatted note object to save to the account
   */
  public saveNote(accountNumber: string, note: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createNote',
      AccountNumber: accountNumber,
      Creatable: note
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates and saves a note to a given account and loan application ID and
   * returns the note's new locator
   *
   * @param accountNumber Account number to save the note to
   * @param loanAppId Loan application ID to save the note to
   * @param note A formatted note object to save to the loan application
   */
  public saveLoanAppNote(accountNumber: string, loanAppId: string, note: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createLoanAppNote',
      AccountNumber: accountNumber,
      LoanAppId: loanAppId,
      Creatable: note
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates and saves a loan application to an account and returns the new
   * loan application ID
   *
   * @param accountNumber Account number to save the loan application to
   * @param loanApp A formated loan application to save to the account
   */
  public saveApplication(accountNumber: string, loanApp: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createLoanApp',
      AccountNumber: accountNumber,
      Creatable: loanApp
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates and saves a person to a loan application and returns the locator of the
   * new person
   *
   * @param accountNumber Account number containing the loan application to save to
   * @param loanAppId Loan application ID to save the person to
   * @param person A formatted person to save to a loan application
   */
  public saveLoanAppPerson(
    accountNumber: string,
    loanAppId: string,
    person: any
  ): Observable<number> {
    const body = JSON.stringify({
      method: 'createLoanAppPerson',
      AccountNumber: accountNumber,
      LoanAppId: loanAppId,
      Creatable: person
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates and saves a tracking record to a loan application and returns the locator of the
   * new tracking record
   *
   * @param accountNumber Account number containing the loan application to save to
   * @param loanAppId Loan application ID to save the tracking to
   * @param tracking A formatted tracking to save to a loan application
   */
  public saveLoanAppTracking(
    accountNumber: string,
    loanAppId: string,
    tracking: any
  ): Observable<number> {
    const body = JSON.stringify({
      method: 'createLoanAppTracking',
      AccountNumber: accountNumber,
      LoanAppId: loanAppId,
      Creatable: tracking
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res.CreateResponse)
    );
  }

  /**
   * Creates a tracking record under the account
   *
   * @param accountNumber Account number to save the tracking record to
   * @param tracking Tracking record to save to the account
   */
  public saveTracking(accountNumber: string, tracking: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createTracking',
      AccountNumber: accountNumber,
      Creatable: tracking
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: any) => res.CreateResponse)
    );
  }

  /**
   * Creates an overdraft list under a given share for an account in the order given
   *
   * @param accountNumber Account number to save the overdraft list to
   * @param shareId The ID of the share to save the overdraft list under
   * @param overdraftList List of IDs in the order they should overdraft
   */
  public saveOverdraftList(
    accountNumber: string,
    shareId: string,
    overdraftList: number[]
  ): Observable<any> {
    const body = JSON.stringify({
      method: 'createOverdraftList',
      AccountNumber: accountNumber,
      shareId,
      overdraftList
    });

    return this.http.post<CreateResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: CreateResponse) => res)
    );
  }

  /**
   * Saves a lookup to a given account
   *
   * @param accountNumber Account number to save the lookup to
   * @param lookup Lookup object to save to the account
   */
  public saveLookup(accountNumber: string, lookup: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createLookup',
      AccountNumber: accountNumber,
      Creatable: lookup
    });

    return this.http.post<LookupResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: any) => res.CreateResponse)
    );
  }

  /**
   * Saves an IRS record to a given account
   *
   * @param accountNumber Account number to save the IRS record to
   * @param irs IRS record to save
   */
  public saveIrs(accountNumber: string, irs: any): Observable<number> {
    const body = JSON.stringify({
      method: 'createIrs',
      AccountNumber: accountNumber,
      Creatable: irs
    });

    return this.http.post<IrsResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: any) => res.CreateResponse)
    );
  }

  /**
   * Saves a share to a given account
   *
   * @param accountNumber Account number to save the share to
   * @param share Share to save to the account
   */
  public saveShare(accountNumber: string, share: any): Observable<string> {
    const body = JSON.stringify({
      method: 'createShare',
      AccountNumber: accountNumber,
      Creatable: share
    });

    return this.http.post<ShareResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: any) => res.Share)
    );
  }

  /**
   * Saves a check order to a share on a given account
   *
   * @param accountNumber Account number to save the share check order to
   * @param shareId Share ID to save the check order to
   * @param checkOrder Check order to save to the account
   */
  public saveShareCheckOrder(
    accountNumber: string,
    shareId: string,
    checkOrder: any
  ): Observable<number> {
    const body = JSON.stringify({
      method: 'createShareCheckOrder',
      AccountNumber: accountNumber,
      ShareId: shareId,
      Creatable: checkOrder
    });

    return this.http
      .post<ShareCheckOrderResponse>(this.url, body, {
        headers: this.headers_
      })
      .pipe(
        catchError(this.handleError),
        map((res: any) => res.CreateResponse)
      );
  }

  /**
   * Saves a share transfer to a share on a given account
   *
   * @param accountNumber Account number to save the share transfer to
   * @param shareId Share ID to save the transfer to
   * @param transfer Share transfer to save to the account
   */
  public saveShareTransfer(
    accountNumber: string,
    shareId: string,
    transfer: any
  ): Observable<number> {
    const body = JSON.stringify({
      method: 'createShareTransfer',
      AccountNumber: accountNumber,
      ShareId: shareId,
      Creatable: transfer
    });

    return this.http.post<ShareTransferResponse>(this.url, body, { headers: this.headers_ }).pipe(
      catchError(this.handleError),
      map((res: any) => res.CreateResponse)
    );
  }

  // **************
  // *   DELETE   *
  // **************

  public deletePerson(
    accountNumber: string,
    loanAppId: string,
    personLocator: string
  ): Observable<LoanAppPerson> {
    const body = JSON.stringify({
      method: 'deleteLoanAppPerson',
      AccountNumber: accountNumber,
      LoanAppId: loanAppId,
      LoanAppPersonLocator: personLocator
    });

    return this.http.post<LoanAppPerson>(this.url, body, { headers: this.headers_ });
  }
}
