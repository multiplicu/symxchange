import { InsTable } from '../interfaces/insTable';
import { InsType } from '../interfaces/insType';
import { LoanDefault } from '../interfaces/loanDefault';
import { Warning } from './../interfaces/warning';
import { PagedResponse } from './get-paged';

export interface GetWarningResponse extends PagedResponse {
  Warnings: Warning[];
}

export interface LoanDefaultsResponse extends PagedResponse {
  LoanDefault: LoanDefault[];
}

export interface InsTablePagedResponse extends PagedResponse {
  InsTable: InsTable[];
}

export interface InsTypePagedResponse extends PagedResponse {
  InsType: InsType[];
}
