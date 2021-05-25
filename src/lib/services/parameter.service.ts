import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { InsTable } from './../interfaces/insTable';
import { InsType } from './../interfaces/insType';
import { LoanDefault } from './../interfaces/loanDefault';
import { PayCalc } from './../interfaces/payCalc';
import { Warning } from './../interfaces/warning';
import {
  GetWarningResponse,
  InsTablePagedResponse,
  InsTypePagedResponse,
  LoanDefaultsResponse,
  PayCalcResponse,
} from './../responses/parameter';
import { BaseService, UserConfig } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ParameterService extends BaseService {
  public constructor(public http: HttpClient, public config: UserConfig) {
    super(http, config);

    this.url += `quest/parameter`;
  }

  /**
   * Returns a paged list of Warnings with specified fields
   *
   * @param fields List of field names to return
   * @param returnCount Optional number of records to return in a call
   */
  public getWarningsPagedSelect(
    fields: string[] = ['WarnDescription'],
    returnCount: number = 100
  ): Observable<Warning[]> {
    const params: HttpParams = new HttpParams()
      .set('fields', fields.join(','))
      .set('includeAll', 'true')
      .set('includeAllField', 'Warnings')
      .set('method', 'getWarningsPagedListSelectFields')
      .set('returnCount', returnCount.toString());

    return this.getPaged<GetWarningResponse>(this.url, params).pipe(
      map((res: GetWarningResponse) => res.Warnings)
    );
  }

  /**
   * Returns a paged list of Loan Defaults with specified fields
   *
   * @param fields Loan default fields to return
   * @param returnCount Optional number of records to return in a call
   */
  public getLoanDefaultPagedSelect(
    fields: string[],
    returnCount: number = 100
  ): Observable<LoanDefault[]> {
    const method = 'searchLoanDefaultPagedSelectFields';
    const params = new HttpParams()
      .set('method', method)
      .set('includeAllField', 'LoanDefault')
      .set('includeAll', 'true')
      .set('fields', fields.join(','))
      .set('returnCount', returnCount.toString());

    return this.getPaged<LoanDefaultsResponse>(this.url, params).pipe(
      map((res: LoanDefaultsResponse) => res.LoanDefault)
    );
  }

  /**
   * Returns a paged list of Loan Defaults with specified fields
   *
   * @param fields Loan default fields to return
   * @param returnCount Optional number of records to return in a call
   */
  public getPayCalcSelect(
    payCalcType: number,
    fields: string[]
  ): Observable<PayCalc> {
    const method = 'getPayCalcSelectFields';
    const params = new HttpParams()
      .set('method', method)
      .set('PayCalcPaymentCalculationType', payCalcType.toString())
      .set('includeAllField', 'PayCalc')
      .set('includeAll', 'true')
      .set('fields', fields.join(','));

    return this.get<PayCalcResponse>(this.url, params).pipe(
      map((res: PayCalcResponse) => res.PayCalc)
    );
  }

  /**
   * Returns a list of Insurance Types
   */
  public getInsuranceTypes(): Observable<InsType[]> {
    const method = 'getInsTypePagedList';
    const params = new HttpParams().set('method', method);

    return this.getPaged<InsTypePagedResponse>(this.url, params).pipe(
      map((res: InsTypePagedResponse) => res.InsType)
    );
  }

  /**
   * Returns a list of Insurance Tables
   */
  public getInsuranceTables(): Observable<InsTable[]> {
    const method = 'getInsTablePagedList';
    const params = new HttpParams().set('method', method);

    return this.getPaged<InsTablePagedResponse>(this.url, params).pipe(
      map((res: InsTablePagedResponse) => res.InsTable)
    );
  }
}
