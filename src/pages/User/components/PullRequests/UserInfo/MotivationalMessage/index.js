import React from 'react';
import PropTypes from 'prop-types';
import getMessage from './getMessage';

const MotivationalMessage = ({ pullRequestCount, otherReposCount }) => (
  <p className="font-medium text-green-darker text-xl m-3">{getMessage(pullRequestCount, otherReposCount)}</p>
);

MotivationalMessage.propTypes = {
  pullRequestCount: PropTypes.number,
  otherReposCount: PropTypes.number
};

export default MotivationalMessage;
