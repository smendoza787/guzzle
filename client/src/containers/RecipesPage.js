import React, { Component } from 'react'

class RecipesPage extends Component {
  constructor() {
    super()

    this.state = {
      recipes: []
    }
  }

  componentWillMount() {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka')
      .then(resp => resp.json())
      .then(cocktails => this.setState({ recipes: cocktails }))
  }

  renderCocktails(recipes) {
    return recipes.map(recipe =>
      <div className="drink">
        <h2>{recipe.strDrink}</h2>
        <img src={recipe.strDrinkThumb} alt="drink thumbnail" height="150" width="150" />      
      </div>
    )
  }

  render() {
    console.log("RECIPEZ", this.state.recipes);
    return (
      <div>
        <h1>Cocktail Recipes</h1>
        <div className="recipe-list">
          {this.state.recipes.drinks && this.renderCocktails(this.state.recipes.drinks)}
        </div>
      </div>
    )
  }
}

export default RecipesPage