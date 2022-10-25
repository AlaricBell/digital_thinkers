import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { Driver } from "../../../types/drivers";
import { getLocalData } from "../../../lib/fileHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Driver>
) {
  // const filePath: string = path.join(
  //   process.cwd(),
  //   "public",
  //   "assets",
  //   "formula1",
  //   "drivers.json"
  // );
  // const jsonData: string = fs.readFileSync(filePath, "utf-8");
  // const objectData: Driver = JSON.parse(jsonData);

  const objectData: Driver = await getLocalData(
    "public",
    "assets",
    "formula1",
    "drivers.json"
  );
  res.status(200).json(objectData);
}
