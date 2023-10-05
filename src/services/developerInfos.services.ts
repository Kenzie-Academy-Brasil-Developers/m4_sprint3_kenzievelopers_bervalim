import format from "pg-format";
import {
  developerInfoRequest,
  developerInfoResult,
} from "../interfaces/developerInfos.interface";
import { client } from "../database";

export const createDeveloperInformationService = async (
  bodyRequest: developerInfoRequest,
  id: string
) => {
  const developerId = Number(id);

  const query: string = format(
    `INSERT INTO "developerInfos" ("developerId",%I) VALUES ($1, %L)
   RETURNING *;`,
    Object.keys(bodyRequest),
    Object.values(bodyRequest)
  );
  const data: developerInfoResult = await client.query(query, [developerId]);

  return data.rows[0];
};
