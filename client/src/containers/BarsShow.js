import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Comments from './Comments'
import { fetchPhoto } from '../actions/barActions'
import FontAwesome from 'react-fontawesome'

class BarsShow extends Component {
  componentDidMount() {
    this.props.fetchPhoto()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.barId !== prevProps.match.params.barId) {
      this.props.fetchPhoto()
    }
  }

  renderStars = (rating) => {
    let numOfStars = parseInt(rating)
    let faIcons = []
    for (var i = 0; i < numOfStars; i++) {
      faIcons.push(<FontAwesome name="star" />)
    }
    return faIcons
  }

  render() {
    return (
      <div className="bar-show">
        <div className="bar-show-top-row">
          <img className="bar-photo" src={this.props.photo.photo.url} alt="bar photo" />
          <div className="bar-details">
          <h1>{this.props.bar.name}</h1>
          <h2>{this.renderStars(this.props.bar.rating)}</h2>
          <h3>{this.props.bar.vicinity}</h3>
          </div>
        </div>
        <Comments barComments={this.props.comments} match={this.props.match} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const bar = state.bars.find(bar => bar.id === ownProps.match.params.barId)
  const comments = state.comments.filter(comment => comment.barId === ownProps.match.params.barId)

  if (bar) {
    return {
      bar: bar,
      comments: comments,
      photo: state.photo
    }
  } else {
    return { bar: {} }
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPhoto: fetchPhoto
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BarsShow)
