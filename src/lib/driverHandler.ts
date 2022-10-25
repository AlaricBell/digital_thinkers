import { setLocalData, getLocalData } from "./fileHandler";
import { Driver } from "../types/drivers";
import path from "path";

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
      imgUrl: `/assets/formula1/${driver.code.toLowerCase()}.png`,
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

export const sortDriverByPlace = () => {
  return (a: Driver, b: Driver) => {
    if (!a.place || !b.place) {
      return -1;
    }
    if (a.place > b.place) {
      return 1;
    }
    if (a.place < b.place) {
      return -1;
    }
    return 0;
  };
};

export const getSortedDrivers = (drivers: Driver[]): Driver[] => {
  drivers.sort(sortDriverByPlace());
  return drivers;
};
