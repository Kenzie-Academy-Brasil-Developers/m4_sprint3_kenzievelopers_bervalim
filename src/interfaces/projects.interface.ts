import { QueryResult } from "pg";

export type createProjectResponse = {
  id: number;
  name: string;
  description: string;
  repository: string;
  startDate: Date;
  endDate: Date;
  developerId: number;
};

export type createProjectRequest = Omit<createProjectResponse, "id">;
export type createProjectResult = QueryResult<createProjectResponse>;
export type updateProjectRequest = Partial<createProjectRequest>;
