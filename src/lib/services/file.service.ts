import { FileResponse } from './../responses/file';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService extends BaseService {
  constructor(public http: HttpClient) {
    super(http);

    this.url += 'quest/file';
  }

  public downloadDataFile(file: string): Observable<string> {
    const method = 'downloadDataFile';
    const params = new HttpParams().set('method', method).set('tns:FileName', file);

    return this.get(this.url, params).pipe(map((res: FileResponse) => res.Data));
  }

  public uploadDataFile(file: string, content: string): Observable<FileResponse> {
    const method = 'uploadDataFile';
    const params = new HttpParams()
      .set('method', method)
      .set('tns:FileName', file)
      .set('Data', content)
      .set('noNewline', 'false');

    return this.get(this.url, params).pipe(map((res: FileResponse) => res));
  }
}
