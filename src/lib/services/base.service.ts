import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Optional } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class UserConfig {
  public url: string = environment.url;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public token: string;
  private url_: string = `${environment.url}`;

  protected headers_: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  protected pagedToken: string;

  public get url(): string {
    return this.url_;
  }
  public set url(v: string) {
    this.url_ = v;
  }

  public constructor(public http: HttpClient, @Optional() config?: UserConfig) {
    if (config) {
      this.url = config.url;
    }
  }

  protected get<T>(url: string, params: HttpParams): Observable<T> {
    return this.http
      .get<T>(url, { params, headers: this.headers_ })
      .pipe(map((res: any) => res.SingleResponse));
  }

  protected getPaged<T>(url: string, params: HttpParams): Observable<T> {
    if (this.pagedToken) {
      params.set('Token', this.pagedToken);
    }

    return this.http.get<T>(url, { params, headers: this.headers_ }).pipe(
      map((res: any) => {
        if (res.error) {
          throw new Error(res.error);
        }

        // Set or clear the token for more results if available
        this.token = res.PagedResponse ? res.PagedResponse.Token : '' || '';

        return res.PagedResponse;
      })
    );
  }

  protected handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error(error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(error.error.message);
    }

    // return an observable with a user-facing error message
    return throwError('Something went wrong; please try again later.');
  }
}
