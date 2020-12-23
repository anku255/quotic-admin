import { filter, omit, path, pick } from "ramda";

export const accessDeepObject = (arr, obj) =>
  path(Array.isArray(arr) ? arr : arr.split("."), obj);

export const ArrayMaybe = (arr) => arr || [];
export const ObjectMaybe = (obj) => obj || {};
export const StringMaybe = (str) => str || "";

export const pickWrapper = (keys, object) => pick(keys, object);
export const omitWrapper = (keys, object) => omit(keys, object);
export const isNotEmptyArray = (x) => x && x.length > 0;
export const isNotEmptyObject = (obj) =>
  !!obj &&
  Object.keys(obj).length > 0 &&
  Object.values(obj).some((x) => x !== null && x !== "");
export const removeNonTrueValuesFromObject = (obj) => filter(Boolean, obj);
