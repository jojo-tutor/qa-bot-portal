import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { compose } from 'redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from 'theme';
import createStore from 'redux/store';
import configureStore from 'configureStore';

class MyApp extends App {
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
          <title>My page</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default compose(
  withRedux(configureStore),
)(MyApp);
