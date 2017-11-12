import React from 'react'
import FavoriteButton from './FavoriteButton'

const BarDetails = ({ bar, renderStars, matchUrl }) => {
  return (
    <div className="bar-details">
      <h1>{bar.name}</h1>
      <h2>{renderStars(bar.rating)}</h2>
      <h4>{bar.vicinity}</h4>
      <FavoriteButton bar={bar} />
    </div>
  )
}

export default BarDetails
