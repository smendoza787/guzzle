import React, { Component } from 'react'
import RecipeSelector from '../components/RecipeSelector'

class RecipesPage extends Component {
  constructor() {
    super()

    this.state = {
      base: '',
      recipes: []
    }

    this.selectBase = this.selectBase.bind(this)
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

  selectBase(baseAlcohol) {
    this.setState({ base: baseAlcohol })
  }

  render() {
    return (
      <div className="recipes-page">
        <h1>Cocktail Recipes</h1>
        <RecipeSelector selectBase={this.selectBase} />
        <h1>Base: {this.state.base}</h1>
        <div className="recipe-list">
          {this.state.recipes.drinks && this.renderCocktails(this.state.recipes.drinks)}
        </div>
      </div>
    )
  }
}

export default RecipesPage