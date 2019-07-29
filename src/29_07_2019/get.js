// @flow
type GetType = (obj: Object, path: string | Array<string>, dft?: any) => any;

export const get:GetType = (obj, path, dft) => {
  const pathArray = Array.isArray(path) ? path : path.match(/[\w-]+/g);
  if (!pathArray || obj === undefined) {
    return dft;
  }
  if (!pathArray.length) {
    return obj;
  }
  return get(obj[pathArray.shift()], pathArray, dft);
};
