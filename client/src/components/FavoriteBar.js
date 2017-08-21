import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton'

const FavoriteBar = ({ bar, renderStars }) => {
  return (
    <div className="favorite-bar">
      <h3><Link key={bar.name} to={`/bars/${bar.id}`}>{bar.name}</Link></h3>
      <p>{renderStars(bar.rating)}</p>
      <FavoriteButton bar={bar} />
    </div>
  )
}

export default FavoriteBar
