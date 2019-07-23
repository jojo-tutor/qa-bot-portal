import axios from './axios';

const request = (options, ax = axios) => () => ax(options)
  .then(({ data }) => data)
  .catch((error) => {
    const { response, name } = error;
    if (response.data && typeof response.data === 'string') {
      response.data = {
        name,
        message: response.data,
      };
    }

    return Promise.reject(response.data);
  });

export default request;
