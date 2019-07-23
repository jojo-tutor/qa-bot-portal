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
  baseUrl: 'http://localhost:3001/',
  paramsSerializer,
});

export default instance;
