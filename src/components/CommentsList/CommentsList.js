import React from 'react';
import PropTypes from 'react-proptypes';

import { Comment, Filter } from './';

const CommentsList = ({ comments, onChangeFilter, onClickComment }) =>
  <div className="CommentsList">
    <Filter onChange={onChangeFilter} />
    { comments.map(comment =>
        <Comment key={comment._id} onClick={onClickComment} {...comment} />)
    }
  </div>

CommentsList.propTypes = {
  comments: PropTypes.array,
  onChangeFilter: PropTypes.func,
  onClickComment: PropTypes.func
};

CommentsList.defaultProps = {
  comments: [],
  onChangeFilter: () => {},
  onClickComment: () => {}
};

export default CommentsList;
