import fs from "fs";
import path from "path";

export const getLocalData = (...filePath: Array<string>): any => {
  const jsonData: string = fs.readFileSync(
    path.join(process.cwd(), ...filePath),
    "utf-8"
  );
  return JSON.parse(jsonData);
};

export const setLocalData = (
  data: string,
  ...filePath: Array<string>
): void => {
  fs.writeFileSync(path.join(process.cwd(), ...filePath), data);
};
