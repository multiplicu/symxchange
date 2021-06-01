import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FileResponse } from './../responses/file';
import { BaseService, UserConfig } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class FileService extends BaseService {
  constructor(public http: HttpClient, public config: UserConfig) {
    super(http, config);

    this.url += 'quest/file';
  }

  public downloadDataFile(file: string): Observable<string> {
    const method = 'downloadDataFile';
    const params = new HttpParams()
      .set('method', method)
      .set('tns:FileName', file);

    return this.http
      .get<{ Response: FileResponse }>(this.url, {
        params,
        headers: this.headers_,
      })
      .pipe(map((res: { Response: FileResponse }) => res?.Response?.Data));
  }

  public uploadDataFile(
    file: string,
    content: string
  ): Observable<FileResponse> {
    const method = 'uploadDataFile';
    const params = new HttpParams()
      .set('method', method)
      .set('tns:FileName', file)
      .set('Data', content)
      .set('noNewline', 'false');

    return this.get(this.url, params).pipe(map((res: FileResponse) => res));
  }
}
