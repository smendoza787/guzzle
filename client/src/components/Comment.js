import React from 'react'
import moment from 'moment'


const Comment = ({ comment }) =>
  <div className="comment">
    <div className="comment-content">
      <p>{comment.comment}</p>
    </div>
    <div className="comment-date">
      <p>{moment(comment.date).fromNow()}</p>
    </div>
    <div className="comment-author">
      <img src="http://i.imgur.com/JKNPJij.jpg" height="50" width="50" alt="cat"/>
      <p>{comment.author}</p>
    </div>
  </div>

export default Comment