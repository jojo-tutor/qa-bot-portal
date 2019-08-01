import React, { useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const key = 'session';
const Authenticated = (props) => {
  const { children } = props;
  const [loaded, setLoaded] = useState();
  const router = useRouter();
  const page = useSelector(state => state[key]);

  useEffect(() => {
    if (!page.data.email) {
      router.push('/login');
    }
    setLoaded(true);
  }, []);


  return (loaded && page.data.email) ? children : <CircularProgress />;
};

export const withAuthentication = WrappedComponent => props => (
  <Authenticated>
    <WrappedComponent {...props} />
  </Authenticated>
);

export default Authenticated;
