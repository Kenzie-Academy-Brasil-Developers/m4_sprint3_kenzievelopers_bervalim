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
  console.log(bodyRequest);
  const query: string = format(
    `INSERT INTO "developers" (%I) VALUES (%L) 
  RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest)
  );
  const data: createDeveloperResult = await client.query(query);

  return data.rows[0];
};
