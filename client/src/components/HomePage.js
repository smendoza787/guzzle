import React from 'react';
import FontAwesome from 'react-fontawesome'
import SearchFormContainer from '../containers/SearchFormContainer'

const Home = () => {
	return (
		<div className="home-page">
	  	<h1><strong className="main-header">Thirsty? <FontAwesome name="beer"/></strong></h1>
			<h2 className="main-header"><strong>I sure hope so.</strong></h2>
			<SearchFormContainer />
		</div>
	)
}

export default Home;
