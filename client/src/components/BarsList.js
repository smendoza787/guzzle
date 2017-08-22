import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from 'material-ui/MenuItem'
import FontAwesome from 'react-fontawesome'

const BarsList = ({ bars, favoriteBars }) => {
  let renderBars

  if (bars.length > 0) {
    renderBars = bars.map(bar => {
      if (favoriteBars.includes(bar)) {
        return (
          <MenuItem>
            <FontAwesome name='star' /> <Link key={bar.name} to={`/bars/${bar.id}`}>{bar.name}</Link>
          </MenuItem>
        )
      } else {
        return (
          <MenuItem>
            <Link key={bar.name} to={`/bars/${bar.id}`}>{bar.name}</Link>
          </MenuItem>
        )
      }
    })
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
