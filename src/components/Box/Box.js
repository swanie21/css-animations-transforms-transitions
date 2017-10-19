import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Box.scss';

function Box (props) {
  return (
    <div className={ Styles[props.action] }></div>
  );
}

Box.propTypes = {
  action: PropTypes.string
};

export default Box;
