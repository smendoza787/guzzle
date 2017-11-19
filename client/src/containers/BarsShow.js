import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import BarDetails from '../components/BarDetails'
import { fetchPhoto } from '../actions/photoActions'
import FontAwesome from 'react-fontawesome'
import Comments from './Comments'
import BarMap from './BarMap'

class BarsShow extends Component {
  componentWillMount() {
    this.props.fetchPhoto()
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.barId !== prevProps.match.params.barId) {
      this.props.fetchPhoto()
    }
  }

  renderStars(rating) {
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
    if (!this.props.photo) {
      return (
        <div className="bar-show">
        <BarDetails
          bar={this.props.bar}
          renderStars={this.renderStars} />
        <BarMap
          coordinates={{ lat: this.props.bar.lat, lng: this.props.bar.lng }} 
          containerElement={<div className="google-map" style={{ height: `450px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPoE2MRiJslI7MdbnsW32xvgCIHvLssBg&v=3.exp&libraries=geometry,drawing,places"          
          loadingElement={<div style={{ height: `100%` }} />}
          isMarkerShown />
        <Comments barComments={this.props.comments} bar={this.props.bar} match={this.props.match} />
      </div>
      )
    } else {
      return (
        <div className="bar-show">
          <div className="bar-photo">
            <img src={this.props.photo.photo.url} alt="unsplash photography" />
          </div>
          <BarDetails
            bar={this.props.bar}
            renderStars={this.renderStars} />
          <BarMap
            coordinates={{ lat: this.props.bar.lat, lng: this.props.bar.lng }} 
            containerElement={<div className="google-map" style={{ height: `450px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPoE2MRiJslI7MdbnsW32xvgCIHvLssBg&v=3.exp&libraries=geometry,drawing,places"          
            loadingElement={<div style={{ height: `100%` }} />}
            isMarkerShown />
          <Comments barComments={this.props.comments} bar={this.props.bar} match={this.props.match} />
        </div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  const bar = state.bars.fetchedBars.find(bar => bar.id === ownProps.match.params.barId)
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
