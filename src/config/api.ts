import axios from "axios";
interface IApiSetting {
  url: string;
}
interface IApiConfig {
  development: IApiSetting;
  production: IApiSetting;
}
let systemApi =
  "https://pt504ydu4f.execute-api.ap-south-1.amazonaws.com/dev/systemapis";
const ApiConfig: IApiConfig = {
  development: {
    url: "https://ntitme1fgf.execute-api.ap-south-1.amazonaws.com/dev/brand",
  },
  production: {
    url: "https://<URL>",
  },
};

export const Http = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT",
    "Access-Control-Allow-Headers": "Content-Type",
  },
  baseURL: ApiConfig.development.url,
});
export default Http;
