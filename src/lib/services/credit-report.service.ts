import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService, UserConfig } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class CreditReportService extends BaseService {
  public constructor(public http: HttpClient, public config: UserConfig) {
    super(http, config);

    this.url += `quest`;
  }
}
