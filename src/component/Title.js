// src/Title.js
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

const Title = (props) => {
  return (
    <Typography component="h2" variant="h5" style={{ color: 'black' }} gutterBottom>
      {props.children}
    </Typography>
  );
};

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;
