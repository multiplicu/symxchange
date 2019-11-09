import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExecutePowerOnResponse } from '../responses/poweron';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class PoweronService extends BaseService {
  public constructor(public http: HttpClient) {
    super(http);

    this.url += `quest/poweron`;
  }

  public execute(
    file: string,
    params: any,
    state: string = 'START',
    session: number = 1
  ): Observable<ExecutePowerOnResponse> {
    const body = JSON.stringify({
      method: 'executePowerOn',
      Header: {
        MessageId: 'executePowerOn',
        RGState: state
      },
      Body: {
        File: file,
        RGSession: session,
        UserDefinedParameters: params
      }
    });

    return this.http.post<ExecutePowerOnResponse>(this.url, body, {
      headers: this.headers_
    });
  }
}
