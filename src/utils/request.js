import axios from './axios';

const request = (options, ax = axios) => () => ax(options)
  .then(res => res.data)
  .catch(({ response, name, message }) => (response ? response.data : { name, message }));

export default request;
