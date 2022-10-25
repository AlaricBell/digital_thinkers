import fs from "fs";
import path from "path";

export const getLocalData = async (
  ...filePath: Array<string>
): Promise<any> => {
  const jsonData: string = fs.readFileSync(
    path.join(process.cwd(), ...filePath),
    "utf-8"
  );
  console.log(...filePath);
  return JSON.parse(jsonData);
};
