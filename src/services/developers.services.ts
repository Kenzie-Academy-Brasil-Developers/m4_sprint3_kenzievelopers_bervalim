import format from "pg-format";
import {
  createDeveloperBodyRequest,
  createDeveloperResponse,
  createDeveloperResult,
} from "../interfaces/developers.interface";
import { client } from "../database";

export const createDeveloperService = async (
  bodyRequest: createDeveloperBodyRequest
): Promise<createDeveloperResponse> => {
  const query: string = format(
    `INSERT INTO "developers" (%I) VALUES (%L) 
  RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest)
  );
  const data: createDeveloperResult = await client.query(query);

  return data.rows[0];
};

export const getDeveloperDescriptionByIdService = async (
  id: string
): Promise<createDeveloperResponse> => {
  const query: string = format(
    `SELECT 
    "d"."id" AS "developerId",
    "d"."name" AS "developerName",
    "d"."email" AS "developerEmail",
    "di"."id" AS "developerId",
    "di"."developerSince" AS "developerInfoDeveloperSince",
    "di"."preferredOS"  AS "developerInfoPreferredOS"
    FROM "developers" AS "d" 
    LEFT JOIN "developerInfos" AS "di"
      ON "d"."id" = "di"."developerId"
   WHERE "d"."id" = (%L);
  `,
    id
  );
  const data: createDeveloperResult = await client.query(query);
  return data.rows[0];
};
