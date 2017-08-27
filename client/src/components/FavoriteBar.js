import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteButton from '../components/FavoriteButton'

const FavoriteBar = ({ bar, renderStars }) => {
  return (
    <div className="favorite-bar">
      <Link key={bar.name} to={`/bars/${bar.id}`}><h3>{bar.name}</h3></Link>
      <p>{renderStars(bar.rating)}</p>
      <p>{bar.vicinity}</p>
      <FavoriteButton bar={bar} />
    </div>
  )
}

export default FavoriteBar
