import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BarDetails from '../components/BarDetails'
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
    if (numOfStars > 0) {
      let faIcons = []
      for (var i = 0; i < numOfStars; i++) {
        faIcons.push(<FontAwesome name="star" />)
      }
      return faIcons
    } else {
      return "No rating"
    }
  }

  render() {
    return (
      <BarDetails
        photo={this.props.photo}
        bar={this.props.bar}
        renderStars={this.renderStars}
        comments={this.props.comments}
        matchUrl={this.props.match}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const bar = state.bars.bars.find(bar => bar.id === ownProps.match.params.barId)
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
