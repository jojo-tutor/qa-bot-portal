import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'layouts/theme';
import axios from 'utils/axios';
import createStore from 'redux/store';
import GlobalStyles from 'layouts/Global';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { isServer, req } = ctx;

    if (isServer) {
      // get & set cookie for server request
      axios.defaults.headers.Cookie = req.headers.cookie;

      // get & set baseUrl for server request
      axios.defaults.headers.HostUrl = `${req.headers['x-forwarded-proto']}://${req.headers['x-forwarded-host']}`;
    }

    // wait for server-side request to resolve
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Head>
          <title>QA Bot Portal</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default compose(
  withRedux(createStore),
  withReduxSaga,
)(MyApp);
