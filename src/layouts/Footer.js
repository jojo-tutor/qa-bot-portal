import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright 2019. '}
    <Link color="inherit" href="https://qa-bot.com/" target="_blank">
        QA Boot Portal.
    </Link>
    {' All rights reserved.'}
  </Typography>
);

export default Footer;
