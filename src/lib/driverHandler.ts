import { setLocalData, getLocalData } from "./fileHandler";
import { Driver } from "../types/drivers";

export const assignPlaceToDrivers = (currentPlace: number): Driver[] => {
  const driversWithNewPlace: Driver[] = getDriverData().map((driver, index) => {
    if (driver.place === currentPlace) {
      return { ...driver, place: currentPlace - 1 };
    } else if (driver.place === currentPlace - 1) {
      return { ...driver, place: currentPlace };
    }
    return {
      ...driver,
    };
  });
  return driversWithNewPlace;
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
