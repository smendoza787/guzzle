import React from 'react'
import FavoriteButton from './FavoriteButton'
import Comments from '../containers/Comments'

const BarDetails = ({ photo, bar, renderStars, comments, matchUrl }) => {
  return (
    <div className="bar-show">
      <div className="bar-show-top-row">
        <img className="bar-photo" src={photo.photo.url} alt="unsplash photography" />
        <div className="bar-details">
          <h1>{bar.name}</h1>
          <h2>{renderStars(bar.rating)}</h2>
          <h4>{bar.vicinity}</h4>
          <FavoriteButton bar={bar} />
        </div>
      </div>
      <Comments barComments={comments} match={matchUrl} />
    </div>
  )
}

export default BarDetails
