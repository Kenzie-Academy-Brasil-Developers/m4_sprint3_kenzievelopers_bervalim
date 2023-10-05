import format from "pg-format";
import {
  developerInfoRequest,
  developerInfoResult,
} from "../interfaces/developerInfos.interface";
import { client } from "../database";

export const createDeveloperInformationService = async (
  bodyRequest: developerInfoRequest
) => {
  const query: string = format(
    `INSERT INTO "developerInfos" (%I) VALUES (%L)
   RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest)
  );
  const data: developerInfoResult = await client.query(query);

  return data.rows[0];
};
