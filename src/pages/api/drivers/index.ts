import type { NextApiRequest, NextApiResponse } from "next";
import { Driver } from "../../../types/drivers";
import { Error } from "../../../types/error";
import {
  getDriverData,
  assignStaticImageToDrivers,
  getSortedDrivers,
  setDriverData,
} from "../../../lib/driverHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Driver[] | Error>
) {
  if (req.method === "GET") {
    console.log("retrieving driver data...");
    const objectData: Driver[] = assignStaticImageToDrivers(getDriverData());
    console.log("received driver data");
    setDriverData(objectData);
    res.status(200).json(getSortedDrivers(objectData));
  } else {
    res.status(405).json({ message: "Request Method not allowed" });
  }
}
