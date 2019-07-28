import axios from 'axios';
import qs from 'query-string';

const paramsSerializer = (params) => {
  const stringified = qs.stringify(
    Object.entries(params).reduce((acc, [key, value]) => {
      if (value && typeof value === 'object') {
        return {
          ...acc, [key]: JSON.stringify(value),
        };
      }
      return {
        ...acc, [key]: value,
      };
    }, {}),
  );
  return stringified;
};

const instance = axios.create({
  paramsSerializer,
});

instance.interceptors.request.use(
  (config) => {
    if (!process.browser) {
      config.url = `${config.headers.HostUrl}${config.url}`;
    }
    return config;
  },
);

export default instance;
