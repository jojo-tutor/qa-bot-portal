import express from 'express';
import proxy from 'http-proxy-middleware';

const app = express();

app.use(
  '/api',
  proxy({
    target: process.env.API_HOST,
    changeOrigin: true,
    pathRewrite: {
      '^/api': '',
    },
  }),
);

export default app;
