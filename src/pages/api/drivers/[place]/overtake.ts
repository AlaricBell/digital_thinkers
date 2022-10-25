import type { NextApiRequest, NextApiResponse } from "next";
import { Driver } from "../../../../types/drivers";
import { Error } from "../../../../types/error";
import {
  assignPlaceToDrivers,
  setDriverData,
  getSortedDrivers,
} from "../../../../lib/driverHandler";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Driver[] | Error>
) {
  if (req.method === "POST") {
    const {
      query: { place },
    } = req;
    const objectData: Driver[] = assignPlaceToDrivers(Number(place));
    setDriverData(objectData);
    console.log("received driver data", place);
    res.status(200).json(getSortedDrivers(objectData));
  } else {
    res.status(405).json({ message: "Request Method not allowed" });
  }
}
