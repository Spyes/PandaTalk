import React from 'react';
import PropTypes from 'react-proptypes';

const Message = ({ value, onChange, placeholder }) =>
  <textarea
    name="body"
    rows={3}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />

Message.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

Message.defaultProps = {
  value: "",
  onChange: () => {},
  placeholder: ""
};

export default Message;
