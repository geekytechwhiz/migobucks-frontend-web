
import axios from "axios";
interface IApiSetting {
    url: string;
}
 interface IApiConfig {
    development: IApiSetting;
    production: IApiSetting;
}

const ApiConfig: IApiConfig = {
  development: {
    url: 'http://localhost:8000',
  },
  production: {
    url: 'https://<URL>', 
  },
};

export const Http= axios.create({
  baseURL:ApiConfig.development.url,
  headers: {
    "Content-type": "application/json"
  }
});
export default Http;
