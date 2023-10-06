import { QueryResult } from "pg";

export type developerInfoResponse = {
  id: number;
  developerSince: Date;
  preferredOS: string;
  developerId: number;
};
export type developerInfoRequest = Omit<developerInfoResponse, "id">;
export type developerInfoResult = QueryResult<developerInfoResponse>;
