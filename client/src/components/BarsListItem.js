import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router-dom'

const BarsListItem = ({ bar, isFavorite }) => {
  if (isFavorite) {
    return (
      <div className="favorite-bar-item bar-item">
        <Link key={bar.name} to={`/bars/${bar.place_id}`}>
          <h3>{bar.name}</h3>
          {bar.vicinity}
        </Link>
      </div>
    )
  } else {
    return (
      <div className="bar-item">
        <Link key={bar.name} to={`/bars/${bar.place_id}`}>{bar.name}</Link>
      </div>
    )
  }
}

export default BarsListItem