import React from 'react'
import FontAwesome from 'react-fontawesome'

const AboutPage = () =>
  <div className="about-page">
    <h1>About Guzzle</h1>
    <h4>
      Guzzle is intended to be a one-stop shop for bartenders and service professionals, complete with 
      drink recipes, a tip calculator, tip tracker, and being able to search for bars within your area. 
      Guzzle was previously named DrinksUp and only provided local bar information using the Google Places API.
      <br/><br/>
      But as a developer, I believe an application geared towards bartenders and cocktail enthusiasts should be more than a Yelp clone, 
      and more of a tool for anything they could possibly need when entertaining guests or having a moment to themselves to enjoy a nice beverage.
    </h4>
    <div className="about-links">
      <a href="https://github.com/smendoza787/guzzle"><FontAwesome name="github-square" /> Github Repo</a>
      <a href="http://smendoza.me/blog/2017/08/16/riding-react-on-rails.html"><FontAwesome name="pencil-square-o" /> Blog Post</a>
    </div>
  </div>

export default AboutPage
