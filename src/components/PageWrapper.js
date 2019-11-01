import React from 'react';
import PropTypes from 'prop-types';

const PageWrapper = ({ children, ...props }) => (
  <div className="flex-grow flex-no-shrink" {...props}>
    {children}
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node
};

export default PageWrapper;
