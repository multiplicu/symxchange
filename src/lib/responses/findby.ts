import { Name } from './../interfaces/name';

export interface FindByResponse {
  accountNumber: string;
  names: Name[];
}

export interface CredRepBySsnResponse {
  accountNumber: string;
  requestDate: string;
  requestNumber: number;
  creditReport: number;
}
