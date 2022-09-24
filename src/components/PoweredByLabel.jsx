import React from 'react';
import PropTypes from 'prop-types';

function PoweredByLabel({ className }) {
  return (
    <h5 className={`text-gray-700 font-light text-sm ${className}`}>
      Maksymilian Cegiełka 94210
    </h5>
  );
}

PoweredByLabel.propTypes = {
  className: PropTypes.string,
};

PoweredByLabel.defaultProps = {
  className: '',
};

export default PoweredByLabel;
