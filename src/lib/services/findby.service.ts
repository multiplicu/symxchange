import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CredRepBySsnResponse, FindByResponse } from './../responses/findby';
import { BaseService, UserConfig } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class FindbyService extends BaseService {
  public constructor(public http: HttpClient, public config: UserConfig) {
    super(http, config);

    this.url += `quest/findby`;
  }

  public byName(name: string): Observable<FindByResponse[]> {
    const method = 'findByShortName';
    const params = new HttpParams()
      .set('method', method)
      .set('ShortName', name);

    const response: Observable<FindByResponse[]> = this.http.get<
      FindByResponse[]
    >(this.url, {
      params,
      headers: this.headers_,
    });

    return this.forceNamesArray(response);
  }

  public bySSN(ssn: string): Observable<FindByResponse[]> {
    const method = 'findBySSN';
    const params = new HttpParams().set('method', method).set('SSN', ssn);

    const response: Observable<FindByResponse[]> = this.http.get<
      FindByResponse[]
    >(this.url, {
      params,
      headers: this.headers_,
    });

    return this.forceNamesArray(response);
  }

  public chargeOffsBySSN(ssn: string): Observable<string[]> {
    const method = 'findBySSN';
    const params = new HttpParams().set('method', method).set('SSN', ssn);

    return this.http.get<string[]>(`${this.url}/chargeOffs`, {
      params,
      headers: this.headers_,
    });
  }

  public credRepBySSN(
    ssn: string,
    currentAccount?: string
  ): Observable<CredRepBySsnResponse> {
    const method = 'findBySSN';

    const params = new HttpParams()
      .set('method', method)
      .set('SSN', ssn)
      .set('accountNumber', currentAccount);

    return this.http.get<CredRepBySsnResponse>(`${this.url}/credRep`, {
      params,
      headers: this.headers_,
    });
  }

  private forceNamesArray(
    response: Observable<FindByResponse[]>
  ): Observable<FindByResponse[]> {
    return response.pipe(
      map((res: FindByResponse[]) =>
        res.map((findBy: FindByResponse) => {
          findBy.names = Array.isArray(findBy.names)
            ? findBy.names
            : [findBy.names];

          return findBy;
        })
      )
    );
  }
}
