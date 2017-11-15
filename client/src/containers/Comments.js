import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/commentActions'
import Comment from '../components/Comment'

class Comments extends Component {
  constructor() {
    super()

    this.state = {
      author: '',
      comment: ''
    }
  }

  handleOnChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const comment = {
      author: this.refs.author.value,
      comment: this.refs.comment.value,
      barId: this.props.match.params.barId,
      date: new Date().toString()
    }
    this.props.addComment(comment)
    this.refs.commentForm.reset()
  }

  render() {
    return (
      <div className="comments">
        <div className="comment-form-container">
          <h2>Love this place? Let us know!</h2>
          <div className="comment-form">
            <form ref="commentForm" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="author"
                ref="author"
                placeholder="Name"
                onChange={this.handleOnChange} />
              <input
                type="text"
                name="comment"
                ref="comment"
                placeholder="Your thoughts?"
                onChange={this.handleOnChange} />
              <input
                type="submit"
                hidden />
            </form>
          </div>
        </div>
        <h2>Comments for {this.props.bar.name}</h2>
        {this.props.barComments.map(comment => <Comment comment={comment} />)}
      </div>
    )
  }
}

export default connect(null, { addComment })(Comments)
