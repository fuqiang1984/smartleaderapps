import React, { Component } from 'react';

//import '../css/homePage.css';
import tdpball from '../images/tdp/tdp-ball.png';

class Home extends Component {
  render() {
    return (
      <div id='notsidebar' className='nosidebar'>
    <div id='header'>
      <div id='dark'><a id='menubutton' onClick='sidebar();'><img src={tdpball} alt='Team Dynamic Profiler | ISL TDP'  /></a></div>          
      <div id='companyname'><div id='companynameheading'>&nbsp; ISL</div> Team Dynamic Profiler</div>
    </div>
  </div>
    );
  }
}

export default Home;