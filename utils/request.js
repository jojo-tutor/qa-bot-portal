import axios from './axios';

const apiRequest = (options, ax = axios) => () => ax(options)
  .then(({ data }) => data)
  .catch((error) => {
    const {
      request, response = {}, name,
    } = error;

    if (request) {
      response.data = JSON.parse(request.response);
    } else if (response.data && typeof response.data === 'string') {
      response.data = {
        name,
        message: response.data,
      };
    }

    return Promise.reject(response.data);
  });

export default apiRequest;
