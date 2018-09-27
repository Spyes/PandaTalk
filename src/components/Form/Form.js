import React from 'react';
import PropTypes from 'react-proptypes';

import { EmailInput, MessageInput } from './';
import './Form.css';
import './Inputs/Inputs.css';

const Form = props => (
  <div className="Form">
    <EmailInput
      placeholder={"Email"}
      onChange={props.onChangeField}
      value={props.email}
    />
    <MessageInput
      placeholder={"Message"}
      onChange={props.onChangeField}
      value={props.body}
    />
    <button onClick={props.onSubmit}>Submit</button>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func,
  onChangeField: PropTypes.func,
  email: PropTypes.string,
  body: PropTypes.string
};

Form.defaultProps = {
  onSubmit: () => {},
  onChangeField: () => {},
  email: '',
  body: ''
}

export default Form;
