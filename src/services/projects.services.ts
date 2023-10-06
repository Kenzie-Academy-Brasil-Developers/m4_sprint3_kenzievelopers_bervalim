import format from "pg-format";
import {
  createProjectRequest,
  createProjectResponse,
  createProjectResult,
} from "../interfaces/projects.interface";
import { client } from "../database";

export const createProjectService = async (
  bodyRequest: createProjectRequest
): Promise<createProjectResponse> => {
  bodyRequest.startDate = new Date(bodyRequest.startDate);
  // bodyRequest.endDate = new Date(bodyRequest.endDate) ?? null;

  if (bodyRequest.endDate) {
    bodyRequest.endDate = new Date(bodyRequest.endDate);
  }

  const query: string = format(
    `INSERT INTO "projects"(%I) 
  VALUES (%L) RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest)
  );

  const data: createProjectResult = await client.query(query);

  return data.rows[0];
};

export const getProjectsByIdService = async (id: string) => {
  const query: string = `SELECT 
  "p"."id" AS "projectId",
  "p"."name" AS "projectName",
  "p"."description" AS "projectDescription",
  "p"."repository" AS "projectRepository",
  "p"."startDate" AS "projectStartDate",
  "p"."endDate" AS "projectEndDate",
  "d"."name" AS "projectDeveloperName"
  FROM "projects" AS "p"
  LEFT JOIN "developers" AS "d"
    ON "d"."id"="p"."developerId"  
  WHERE "p"."id" = $1
  ;`;

  const data = await client.query(query, [id]);
  console.log(data);
  if (data.rows.length > 0) {
    return data.rows[0];
  }
};
