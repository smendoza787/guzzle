import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getGeocode } from '../actions/locationActions'

class SearchFormContainer extends Component {
  constructor() {
    super()

    this.state = {
      location: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      location: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { getGeocode } = this.props
    getGeocode(this.state.location)
    this.setState({
      location: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          {this.state.location}
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleOnChange}
            placeholder="Enter City To Search"
          />
        </label>
      </form>
    )
  }
}

export default connect(null, { getGeocode })(SearchFormContainer)
