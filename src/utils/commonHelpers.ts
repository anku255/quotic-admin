import { filter, omit, path, pick } from "ramda";
import queryString from "query-string";

export const accessDeepObject = (arr, obj) => path(Array.isArray(arr) ? arr : arr.split("."), obj);

export const ArrayMaybe = (arr) => arr || [];
export const ObjectMaybe = (obj) => obj || {};
export const StringMaybe = (str) => str || "";

export const pickWrapper = (keys, object) => pick(keys, object);
export const omitWrapper = (keys, object) => omit(keys, object);
export const isNotEmptyArray = (x) => x && x.length > 0;
export const isNotEmptyObject = (obj) => !!obj && Object.keys(obj).length > 0 && Object.values(obj).some((x) => x !== null && x !== "");
export const removeNonTrueValuesFromObject = (obj) => filter(Boolean, obj);

export const stringifyQueryParams = (qp: { [key: string]: string }, url = "") => {
  const truthyQueryParams = removeNonTrueValuesFromObject(qp);
  if (!isNotEmptyObject(truthyQueryParams)) return "";

  return url.includes("?") ? `&${queryString.stringify(truthyQueryParams)}` : `?${queryString.stringify(truthyQueryParams)}`;
};

export const parseQueryParams = (str: string) => queryString.parse(str);
