import type { NextApiRequest, NextApiResponse } from "next";
import { Driver } from "../../../../types/drivers";
import { Error } from "../../../../types/error";
import {
  assignPlaceToDrivers,
  assignCustomPlaceToDrivers,
  assignStaticImageToDrivers,
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
    const { added } = req.body;

    const objectData: Driver[] = added
      ? assignCustomPlaceToDrivers(Number(place), Number(added))
      : assignPlaceToDrivers(Number(place));
    setDriverData(objectData);

    console.log(
      `Driver #${place} overtook the #${
        added ? Number(place) - Number(added) : Number(place) - 1
      } place`
    );
    res
      .status(200)
      .json(getSortedDrivers(assignStaticImageToDrivers(objectData)));
  } else {
    res.status(405).json({ message: "Request Method not allowed" });
  }
}
