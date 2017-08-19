import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavoriteBar, removeFavoriteBar } from '../actions/barActions'
import RaisedButton from 'material-ui/RaisedButton'

class FavoriteButton extends Component {

  onAddFavClick = () => {
    this.props.addFavoriteBar(this.props.bar)
  }

  onRemoveFavClick = () => {
    this.props.removeFavoriteBar(this.props.bar)
  }

  render() {
    if (this.props.favoriteBars.includes(this.props.bar)) {
      return (
        <RaisedButton
        label="Remove From Favorites"
        onClick={this.onRemoveFavClick} />
      )
    } else {
      return (
        <RaisedButton
        label="Add To Favorites"
        primary={true}
        onClick={this.onAddFavClick} />
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    favoriteBars: state.bars.favoriteBars
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addFavoriteBar: addFavoriteBar,
    removeFavoriteBar: removeFavoriteBar
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteButton)
