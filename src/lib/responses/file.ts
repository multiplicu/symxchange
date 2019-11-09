export interface Status {
  StatusCode: number;
  Message: string;
}

export interface FileResponse {
  Status: Status;
  MessageId: string;
  Data: string;
}
