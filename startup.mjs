import fs from "fs";
import path from "path";

/************************************************************************* 
 REPEATED CODE BECAUSE LOCAL MODULES ARE NOT ALWAYS AVAILABLE BEFORE BUILD
*************************************************************************/

let driverData = fs.readFileSync(
  path.join(process.cwd(), "public", "assets", "formula1", "drivers.json"),
  "utf-8"
);
driverData = JSON.parse(driverData);

// CREATES A NEW ARRAY FOR THE DRIVER PLACES STARTING FROM 1
const placeArray = [...Array(driverData.length + 1).keys()];
placeArray.shift();

driverData = driverData.map((driver, index) => {
  const placeIndex = Math.floor(Math.random() * (placeArray.length - 0) + 0);
  const place = placeArray[placeIndex];
  placeArray.splice(placeIndex, 1);
  return {
    ...driver,
    place,
  };
});

fs.writeFileSync(
  path.join(process.cwd(), "public", "assets", "formula1", "drivers.json"),
  JSON.stringify(driverData)
);
console.log("place and imgUrl was modified in drivers.json");
