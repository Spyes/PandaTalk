import React, { Component } from 'react';

import Modal from 'react-modal';
import WithComments from './HOC/WithComments';
import Form from './components/Form';
import CommentsList, { Comment } from './components/CommentsList';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latest: undefined,
      errorMessage: '',
      comments: [],
      form: {
        email: '',
        body: ''
      }
    };
  }

  componentDidMount() {
    this.props
      .getComments()
      .then(comments => this.setState({ comments }))
      .catch(({ error }) => this.setState({ errorMessage: error }));
  }

  submitComment = () => {
    this.props
      .postComment(this.state.form)
      .then(comment => {
        const comments = [...this.state.comments, comment];
        this.setState({ comments, form: { email: '', body: '' } });
      })
      .catch(({ error }) => this.setState({ errorMessage: error }))
  }

  onChangeFilter = email => {
    this.props
      .getComments(email)
      .then(comments => this.setState({ comments }))
      .catch(({ error }) => this.setState({ errorMessage: error }));
  }

  onChangeCommentField = ({ target: { name, value } }) => {
    this.setState({ form: { ...this.state.form, [name]: value } })
  }

  closeModal = () => this.setState({ latest: undefined, errorMessage: '' });

  selectAuthor = email => {
    this.props
      .getComments(email, true)
      .then(latest => {
        this.setState({ latest });
      })
  }

  _modal = () => (
    <Modal
      isOpen={this.state.latest !== undefined || this.state.errorMessage !== ''}
      style={customStyles}
      onRequestClose={this.closeModal}
    >
      <div>
        { this.state.latest &&
          <Comment
            email={this.state.latest.email}
            body={`Last active: ${this.state.latest.posted}`}
            avatar={this.state.latest.avatar}
          />
        }
        { this.state.errorMessage && this.state.errorMessage }
      </div>
    </Modal>
  );

  render() {
    return (
      <div className="App">
        { this._modal() }
        <div className="content">
          <Form
            email={this.state.form.email}
            body={this.state.form.body}
            onSubmit={this.submitComment}
            onChangeField={this.onChangeCommentField}
          />
          <CommentsList
            comments={this.state.comments}
            onChangeFilter={this.onChangeFilter}
            onClickComment={this.selectAuthor}
          />
        </div>
      </div>
    );
  }
}

export default WithComments(App);
