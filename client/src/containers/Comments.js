import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/commentActions'

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

  renderComment = (comment, index) => {
    return (
      <div className="comment-box" key={index}>
        <div className="comment-date">
          {comment.date}
        </div>
        <div className="comment-author-content">
          <div style={{ padding: '10px' }}>
            <img src="http://i.imgur.com/JKNPJij.jpg" height="75" width="75" alt="cat" style={{ borderRadius: '50%'}} />
            <h3>{comment.author}</h3>
          </div>
          <div className="comment-content">
            <h4>{comment.comment}</h4>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="comments">
        <div className="comment-form-container">
          <h1>Leave a Review!</h1>
          <div className="comment-form">
            <form ref="commentForm" onSubmit={this.handleSubmit}>
              <input
              type="text"
              name="author"
              ref="author"
              placeholder="author"
              onChange={this.handleOnChange} />
              <input
              type="text"
              name="comment"
              ref="comment"
              placeholder="comment"
              onChange={this.handleOnChange} />
              <input
              type="submit"
              hidden />
            </form>
          </div>
        </div>
        {this.props.barComments.map(this.renderComment)}
      </div>
    )
  }
}

export default connect(null, { addComment })(Comments)
