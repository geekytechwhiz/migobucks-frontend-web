import Http from "../config/api";

export const GetDomains = async () => {
  let brandId = "B00002";
  return await Http.get('/domains');
};
