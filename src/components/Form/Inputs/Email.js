import React from 'react';
import PropTypes from 'react-proptypes';

const Email = ({ value, onChange, placeholder }) =>
  <input
    type="email"
    name="email"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />

Email.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

Email.defaultProps = {
  value: "",
  onChange: () => {},
  placeholder: ""
};

export default Email;
