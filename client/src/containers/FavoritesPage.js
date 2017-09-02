import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFavoriteBars } from '../actions/barActions'
import FavoriteBar from '../components/FavoriteBar'
import FontAwesome from 'react-fontawesome'

class FavoritesPage extends Component {
  componentWillMount = () => {
    this.props.fetchFavoriteBars()
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
    let renderFavorites

    if (this.props.favoriteBars.length > 0) {
      var sortedByRating = this.props.favoriteBars.sort(function(a,b) {
        return b.rating - a.rating
      })

      renderFavorites = sortedByRating.map(bar =>
        <FavoriteBar bar={bar} renderStars={this.renderStars} />
      )
    } else {
      renderFavorites = [<h2>You don't have any favorite bars yet.</h2>, <img src="https://media.giphy.com/media/9J7tdYltWyXIY/giphy.gif" alt="no-bars-yet" className="no-favorite-bars" />]
    }

    return (
      <div className="favorites">
        <h1>Favorite Bars</h1>
        {renderFavorites}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBars: state.bars.favoriteBars
  }
}

export default connect(mapStateToProps, { fetchFavoriteBars })(FavoritesPage)
