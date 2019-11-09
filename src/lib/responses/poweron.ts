export interface ExecutePowerOnResponse {
  Response: Response;
}

export interface Response {
  Header: Header;
  Body: Body;
}

export interface Body {
  PromptRequest: PromptRequest;
  UserDefinedParameters: UserDefinedParameters;
  RGScreenClear: boolean;
  StatusCode: number;
  StatusMessage: string;
  RGLines: string;
}

export interface PromptRequest {
  RGMaxCodeWidth: number;
  RGDataType: string;
  RequiredInputDefault: RequiredInputDefault;
}

export interface RequiredInputDefault {}

export interface UserDefinedParameters {
  RGUserChr: RGUserChr;
  RGUserNum: RGUserNum;
}

export interface RGUserChr {
  ID: number;
  Value: string;
}

export interface RGUserNum {
  ID: number;
  Value: number;
}

export interface Header {
  MessageID: string;
  RGState: string;
}
