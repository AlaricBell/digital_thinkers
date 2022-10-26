import { setLocalData, getLocalData } from "./fileHandler";
import { Driver } from "../types/drivers";

export const assignPlaceToDrivers = (currentPlace: number): Driver[] => {
  const driversWithNewPlace: Driver[] = getDriverData().map((driver) => {
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

export const assignCustomPlaceToDrivers = (
  currentPlace: number,
  addedPlace: number
): Driver[] => {
  const driversWithNewPlace: Driver[] = getDriverData().map((driver) => {
    if (driver.place === currentPlace) {
      return { ...driver, place: currentPlace - addedPlace };
    } else if (
      driver.place < currentPlace &&
      driver.place >= currentPlace - addedPlace
    ) {
      return { ...driver, place: driver.place + 1 };
    }
    return {
      ...driver,
    };
  });
  return driversWithNewPlace;
};

export const assignStaticImageToDrivers = (drivers: Driver[]): Driver[] => {
  const driversWithImage: Driver[] = drivers.map((driver) => {
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
