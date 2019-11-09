import { GetResponse } from './get';

export interface PagedResponse extends GetResponse {
  Token?: string;
}
