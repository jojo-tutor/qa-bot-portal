import axios from './axios';

const apiRequest = (options, ax = axios) => () => ax(options)
  .then(({ data }) => data)
  .catch((error) => {
    const {
      request, response = {}, name, message,
    } = error;

    if (request) {
      response.data = {
        name,
        message,
      };
    } else if (response.data && typeof response.data === 'string') {
      response.data = {
        name,
        message: response.data,
      };
    }

    return Promise.reject(response.data);
  });

export default apiRequest;
