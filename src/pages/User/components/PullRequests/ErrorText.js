import React from 'react';
import PropTypes from 'prop-types';

const ErrorText = ({ errorMessage }) => (
  <p className="text-center" style={errorTextStyle}>
    {errorMessage}
  </p>
);

ErrorText.propTypes = {
  errorMessage: PropTypes.node
};

ErrorText.defaultProps = {
  errorMessage: "Couldn't find any data or we hit an error, try again?"
};

const errorTextStyle = {
  color: '#C0392B'
};

export default ErrorText;
