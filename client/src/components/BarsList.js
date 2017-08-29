import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import FontAwesome from 'react-fontawesome'

const BarsList = ({ bars, favoriteBars }) => {
  let renderBars, nonFavBars


  if (bars.length > 0) {
    debugger
    nonFavBars = bars.filter(bar => {
      for (var i = 0; i < favoriteBars.length; i++) {
        if (bar.name === favoriteBars[i].name) {
          return false
        }
      }
      return true
    })

    nonFavBars = nonFavBars.map(bar =>
      <MenuItem>
        <Link key={bar.name} to={`/bars/${bar.place_id}`}>{bar.name}</Link>
      </MenuItem>
    )

    favoriteBars = favoriteBars.map(bar =>
      <MenuItem>
        <FontAwesome name='star' /> <Link key={bar.name} to={`/bars/${bar.place_id}`}>{bar.name}</Link>
      </MenuItem>
    )

    renderBars = favoriteBars.concat(nonFavBars)
  } else {
    renderBars = <p className="loading-bars">Getting nearby business information...</p>
  }



  return (
    <div className="sidebar">
      <h3 style={{ color: '#b1b1b1' }}>
        Your Local Bars <FontAwesome name='glass' />
      </h3>
      {renderBars}
    </div>
  )
}

export default BarsList
