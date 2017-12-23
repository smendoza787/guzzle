import React, { Component } from 'react'

class RecipeSelector extends Component {
  constructor(props) {
    super(props)

    this.handleButtonClick = this.handleButtonClick.bind(this)
  }

  
  handleButtonClick(event) {
    this.props.selectBase(event.target.value)
  }

  render() {
    return (
      <div className="recipe-selector">
        <button onClick={this.handleButtonClick} value="Vodka">Vodka</button>
        <button onClick={this.handleButtonClick} value="Gin">Gin</button>
        <button onClick={this.handleButtonClick} value="Rum">Rum</button>
        <button onClick={this.handleButtonClick} value="Tequila">Tequila</button>
        <button onClick={this.handleButtonClick} value="Bourbon">Bourbon</button>
        <button onClick={this.handleButtonClick} value="Scotch">Scotch</button>
      </div>
    )
  }
}

export default RecipeSelector