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
    onProxyReq: (proxyReq) => {
      // set Basic Auth
      const authString = `${process.env.AUTH_USER}:${process.env.AUTH_PASSWORD}`;
      proxyReq.setHeader(
        'Authorization',
        `Basic ${Buffer.from(authString).toString('base64')}`,
      );
    },
  }),
);

export default app;
