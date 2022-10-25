import { setLocalData, getLocalData } from "./fileHandler";
import { Driver } from "../types/drivers";

export const assignPlaceToDrivers = (drivers: Driver[]): Driver[] => {
  const driversWithPlace: Driver[] = drivers.map((driver, index) => {
    return {
      ...driver,
      place: Math.ceil(Math.random() * (drivers.length - 0) + 0),
    };
  });
  return driversWithPlace;
};

export const assignStaticImageToDrivers = (drivers: Driver[]): Driver[] => {
  const driversWithImage: Driver[] = drivers.map((driver, index) => {
    return {
      ...driver,
      imgUrl: `static/${driver.code.toLowerCase()}.png`,
    };
  });
  return driversWithImage;
};

export const setDriverData = (drivers: Driver[]): void => {
  setLocalData(
    JSON.stringify(drivers),
    "public",
    "assets",
    "formula1",
    "drivers.json"
  );
};

export const getDriverData = (): Driver[] => {
  return getLocalData("public", "assets", "formula1", "drivers.json");
};
