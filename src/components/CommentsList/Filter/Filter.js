import React from 'react';
import PropTypes from 'react-proptypes';
import { DebounceInput } from 'react-debounce-input';

const Filter = ({ onChange }) => (
  <div className="filter">
    <DebounceInput
      minLength={1}
      debounceTimeout={300}
      onChange={({ target: { value } }) => onChange(value)}
      placeholder={"Filter"}
    />
  </div>
);

Filter.propTypes = {
  onChange: PropTypes.func
};

Filter.defaultProps = {
  onChange: () => {}
}

export default Filter;
