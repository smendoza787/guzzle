import React from 'react'

const Comment = ({ comment }) =>
  <div className="comment-box">
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

export default Comment