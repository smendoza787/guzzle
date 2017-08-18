import React from 'react'
import FontAwesome from 'react-fontawesome'

const AboutPage = () =>
  <div className="about-page">
    <h1>About DrinkUp</h1>
    <div className="about-links">
    <a href="https://github.com/smendoza787/drinks-on-me-client"><FontAwesome name="github-square" /></a>
    <a href="http://smendoza.me/blog/2017/08/16/riding-react-on-rails.html"><FontAwesome name="pencil-square-o" /></a>
    <a href="https://twitter.com/swergi0"><FontAwesome name="twitter-square" /></a>
    </div>
    <h4>DrinkUp was made after getting tired of using the same similarly themed
    app that rhymes with "Melp". It returned almost too much information; I just
    want to know where the nearest bar is, so that me and my friends can go grab some drinks already.</h4>
    <h2>DrinkUp was built with React, manages state with Redux, and persists data with Rails.</h2>
    <div className="tech-logos">
      <img src="http://i.imgur.com/oUflins.png" alt="javascript" height="50px" />
      <img src="http://i.imgur.com/geWkuUy.png" alt="react" height="50px" />
      <img src="http://i.imgur.com/WtUycbs.png" alt="redux" height="50px" />
      <img src="http://i.imgur.com/bAcwrt0.png" alt="ruby" height="50px" />
      <img src="http://i.imgur.com/x5wQWpK.png" alt="rails" height="50px" />
    </div>
  </div>

export default AboutPage