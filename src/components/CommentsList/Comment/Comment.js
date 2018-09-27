import React from 'react';
import PropTypes from 'react-proptypes';

import './Comment.css';

const Comment = ({ email, body, avatar, onClick }) =>
  <div className="Comment">
    <div className="avatar" onClick={() => onClick(email)}>
      <img src={avatar} alt={email} />
    </div>
    <div className="content">
      <div className="email">
        { email }
      </div>
      <div className="body">
        { body }
      </div>
    </div>
  </div>

Comment.propTypes = {
  email: PropTypes.string,
  avatar: PropTypes.string,
  body: PropTypes.string,
  onClick: PropTypes.func
};

Comment.defaultProps = {
  email: "",
  avatar: "",
  body: "",
  onClick: () => {}
}

export default Comment;
