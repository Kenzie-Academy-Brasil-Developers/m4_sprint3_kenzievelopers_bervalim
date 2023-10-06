import format from "pg-format";
import {
  createProjectRequest,
  createProjectResponse,
  createProjectResult,
  updateProjectRequest,
} from "../interfaces/projects.interface";
import { client } from "../database";

export const createProjectService = async (
  bodyRequest: createProjectRequest
): Promise<createProjectResponse> => {
  bodyRequest.startDate = new Date(bodyRequest.startDate);

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
  return data.rows[0];
};

export const updateProjectsByIdService = async (
  id: string,
  bodyRequest: updateProjectRequest
): Promise<createProjectResponse> => {
  const query: string = format(
    `UPDATE "projects" SET (%I) = ROW (%L) 
  WHERE "id" = (%L) RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest),
    id
  );
  const data: createProjectResult = await client.query(query);
  return data.rows[0];
};
