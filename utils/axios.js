import axios from 'axios';
import qs from 'query-string';

const instance = axios.create({
  baseURL: process.env.PORTAL_HOST,
  paramsSerializer: (params) => {
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
  },
});

export default instance;
