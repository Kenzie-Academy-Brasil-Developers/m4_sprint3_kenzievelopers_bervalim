import { QueryResult } from "pg";

export type createDeveloperResponse = {
  id: number;
  name: string;
  email: string;
};

export type createDeveloperBodyRequest = Omit<createDeveloperResponse, "id">;

export type createDeveloperResult = QueryResult<createDeveloperResponse>;
