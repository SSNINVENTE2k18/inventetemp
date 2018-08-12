import React, {
  Component
} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import cloud from'./assests/cloud.svg';
import stone from './assests/stone.svg';
import left from './assests/leftent.svg';
import right from './assests/rightent.svg';
import bulb from './assests/bulb.svg';
import name from './assests/3.0.svg';
class App extends Component {
  

  render() {

    return ( 
         <div class="home">
      <div id="homepage-div">
      <div id="cloud-div">
              <img src={cloud} id="cloud-css3" height="400px" width="200px" alt="newclouds"/></div>
        <div id="logo">
          <img src={bulb} id="bulb-css"  alt="bulb"/>
        </div>
         <div className="flex-box">
         <div className="ent-flex">
         </div>
            <div className="ent-flex">
                  <img src={left} id="left-css" width="400px"alt="clouds"/>
            </div>
           <img src={name} id="name-css"  alt="name"/>
          <div className="ent-flex">
              <img src={right} id="right-css" width="400px" alt="clouds"/>
         </div>
       </div>
       <div id="dates-css"><h2>September 21 & 22</h2></div>
       <div id="pp-css"><Link to="/events-pp"><img src={require("./assests/pp.svg")} id="pp-img"  alt="img-data" /></Link></div>
       <div id="stone-div">
       <img src={stone} id="stone-css"  alt="clouds"/>
       </div>
       <img src={cloud} id="cloud-css" className="size-adjust" alt="newclouds"/>
      <img src={cloud} id="cloud-css1" className="size-adjust" alt="newclouds"/>
      <img src={cloud} id="cloud-css2" className="size-adjust" alt="newclouds"/>
      <div id="notes-detail">Click on the center image to view the paper presentation</div>
     </div>
     </div>
    )
  }
}

export default App;