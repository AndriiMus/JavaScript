export const parseUser = jsonObj => {
  try {
    const user = JSON.parse(jsonObj);
  } catch {
    return null;
  }
  return JSON.parse(jsonObj);
};
const json = '{"result":true, "count":42';
console.log(parseUser(json));
