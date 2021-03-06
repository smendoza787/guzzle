import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPlaces } from '../actions/locationActions'

class SearchFormContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      address: '',
      latitude: '',
      longitude: ''
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.latitude !== prevState.latitude || this.state.longitude !== prevState.longitude) {
      this.props.fetchPlaces(this.state.latitude, this.state.longitude)
    }
  }

  getGeocode = (address) => {
    var objectToFormData = require('object-to-formdata')
    var object = { location: { address: address } }
    var formData = objectToFormData(object)

    fetch("/api/coordinates", {
      method: "POST",
      body: formData
    }).then(response => response.json())
      .then(location => {
        this.setState({
          latitude: location.latitude,
          longitude: location.longitude
        })
      })
  }

  handleOnChange = event => {
    this.setState({
      address: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.getGeocode(this.state.address)
    this.setState({
      address: ''
    })
  }

  render() {
    const style = {
      backgroundColor: '#fff',
      padding: '10px',
      width: '90%',
      borderRadius: '7px',
      color: 'rgba(0,0,0,0.5)',
      textAlign: 'center',
      margin: '10px',
      fontSize: '1em'
    }

    return (
      <form onSubmit={this.handleOnSubmit} className="search-bar">
        <input
          style={style}
          type="text"
          name="address"
          value={this.state.address}
          onChange={this.handleOnChange}
          placeholder="Type in address, city, or zip to search"
        />
      </form>
    )
  }
}

export default connect(null, { fetchPlaces })(SearchFormContainer)
