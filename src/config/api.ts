export interface IApiSetting {
    url: string;
}

export interface IApiConfig {
    development: IApiSetting;
    production: IApiSetting;
}

const apiConfig: IApiConfig = {
  development: {
    url: 'http://localhost:8000',
  },
  production: {
    url: 'https://<URL>', // TODO: Add server URL
  },
};

export default apiConfig;
