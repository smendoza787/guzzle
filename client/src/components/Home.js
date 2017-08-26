import React from 'react';
import FontAwesome from 'react-fontawesome'
import SearchFormContainer from '../containers/SearchFormContainer'

const Home = () => {
	return (
		<div className="home-page">
	  	<h1><strong className="main-header">Thirsty? <FontAwesome name="beer"/></strong></h1>
			<h2 className="main-header"><strong>I sure hope so.</strong></h2>
			<h3 className="main-subheader"><strong>Choose a bar from the list to see more info</strong></h3>
			<SearchFormContainer />
		</div>
	)
}

export default Home;
