const React = require('react');
import {Link} from 'react-router'

const About = React.createClass({
  render: function(){
    return(
      <div>
        <Link to={'/'}>Home</Link>
        <h2>All About me</h2>
      </div>
    );
  }
});

module.exports = About;