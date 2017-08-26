import React from 'react'
import FavoriteButton from '../components/FavoriteButton'

const FavoriteBar = ({ bar, renderStars }) => {
  return (
    <div className="favorite-bar">
      <h3>{bar.name}</h3>
      <p>{renderStars(bar.rating)}</p>
      <p>{bar.vicinity}</p>
      <FavoriteButton bar={bar} />
    </div>
  )
}

export default FavoriteBar
