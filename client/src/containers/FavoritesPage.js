import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import BarDetails from '../components/BarDetails'
import FavoriteButton from '../components/FavoriteButton'
import FontAwesome from 'react-fontawesome'

class FavoritesPage extends Component {
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
    const renderFavorites = this.props.favoriteBars.map(bar =>
      <div className="favorite-bar">
        <h3><Link key={bar.name} to={`/bars/${bar.id}`}>{bar.name}</Link></h3>
        <p>{this.renderStars(bar.rating)}</p>
        <FavoriteButton bar={bar} />
      </div>
    )

    return (
      <div className="favorites">
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

export default connect(mapStateToProps)(FavoritesPage)
