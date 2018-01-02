import React, { Component } from 'react'

class Cocktail extends Component {
  render() {
    return (
      <div className="drink">
        <h2>{this.props.recipe.strDrink}</h2>
        <img src={this.props.recipe.strDrinkThumb} alt="drink thumbnail" height="150" width="150" />      
      </div>
    )
  }
}

export default Cocktail