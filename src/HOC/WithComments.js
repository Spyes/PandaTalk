import React from 'react';

function WithComments(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { comments: [] };
    }

    getComments = (email = "", latest = false) =>
      fetch(`http://localhost:8080/comments?email=${email}&latest=${latest}`)
        .then(r => r.json())
        .catch(err => {
          throw { error: err.toString() }
        });

    postComment = comment =>
      fetch('http://localhost:8080/comment', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(comment)
      })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) throw resp.error;
        return resp
      })
      .catch(err => {
        throw { error: err.toString() }
      });

    render() {
      return <WrappedComponent getComments={this.getComments} postComment={this.postComment} />
    }
  }
}

export default WithComments;
