import React from 'react'
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from 'react-google-maps'

const BarMap = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={10}
    defaultCenter={props.coordinates} >
      {props.isMarkerShown && <Marker position={props.coordinates} />}
  </GoogleMap>
))

export default BarMap