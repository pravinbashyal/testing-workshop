import { uniqueId } from "lodash";
import { db } from "./db";

export const remoteAdd = async (value) => {
  return new Promise((res) => {
    setTimeout(() => {
      db.push({
        ...value,
        id: uniqueId("user-"),
      });
      res(db);
    }, 500);
  });
};

export const remoteFetch = async () => {
  return new Promise((res) => {
    setTimeout(() => {
      res(db);
    }, 500);
  });
};
