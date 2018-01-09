import React, { Component } from 'react'
import RecipeSelector from '../components/RecipeSelector'
import RecipeList from '../components/RecipeList'
import Cocktail from '../components/Cocktail'

class RecipesPage extends Component {
  constructor() {
    super()

    this.state = {
      base: '',
      recipes: []
    }

    this.selectBase = this.selectBase.bind(this)
  }

  componentDidMount() {
    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Scotch')
      .then(resp => resp.json())
      .then(cocktails => this.setState({ recipes: cocktails }))
  }

  renderCocktails(recipes) {
    return recipes.map(recipe => <Cocktail recipe={recipe} /> )
  }

  selectBase(baseAlcohol) {
    this.setState({ base: baseAlcohol })
    fetch('http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + this.state.base)
      .then(resp => resp.json())
      .then(cocktails => this.setState({ recipes: cocktails }))
  }

  render() {
    return (
      <div className="recipes-page">
        <h1>Cocktail Recipes</h1>
        <RecipeSelector selectBase={this.selectBase} />
        <RecipeList base={this.state.base} />
        <div className="recipe-list">
          {this.state.recipes.drinks && this.renderCocktails(this.state.recipes.drinks)}
        </div>
      </div>
    )
  }
}

export default RecipesPage