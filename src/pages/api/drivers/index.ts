import type { NextApiRequest, NextApiResponse } from "next";
import { Driver } from "../../../types/drivers";
import {
  getDriverData,
  assignStaticImageToDrivers,
  getSortedDrivers,
} from "../../../lib/driverHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Driver[]>
) {
  console.log("retrieving driver data...");
  const objectData: Driver[] = getSortedDrivers(getDriverData());
  console.log("received driver data");
  res.status(200).json(assignStaticImageToDrivers(objectData));
}
