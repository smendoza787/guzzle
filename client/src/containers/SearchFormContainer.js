import React, { Component } from 'react'

class SearchFormContainer extends Component {
  constructor() {
    super()

    this.state = {
      city: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      city: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label>
          {this.state.city}
          <input
            type="text"
            name="city"
            value={this.state.city}
            onChange={this.handleOnChange}
            placeholder="Enter City To Search"
          />
        </label>
      </form>
    )
  }
}

export default SearchFormContainer
