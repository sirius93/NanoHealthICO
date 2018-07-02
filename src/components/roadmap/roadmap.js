import React, { Component } from 'react';
import './roadmap.css';

class RoadMap extends Component {
  render() {
    return (
      <div className="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <h4 className="roadmap-heading">Our Roadmap</h4>
            <ul id="progress">
              <li><div class="node year-2014"></div><p></p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round"></div><p>NanoHealth: Wins HULT Prize</p></li>
              <li><div class="divider div-2"></div></li>
              <li><div class="node round right"></div><p className="para-right">Awarded US $1M</p></li>
              <li><div class="divider div-2"></div></li>
              <li><div class="node year-2015"></div><p></p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round right"></div><p className="para-right">NanoHealth app launched</p></li>
              <li><div class="divider div-2"></div></li>
              <li><div class="node year-2017"></div><p></p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round"></div><p> First 10,000 active members registered</p></li>
              <li><div class="divider div-2"></div></li>
              <li><div class="node year-2018"></div><p></p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round"></div><p>Partnership with Telangana State(pop. 35 M)</p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round right"></div><p className="para-right">Active users crosses 75,000</p></li>
              <li><div class="divider div-2"></div></li>
              <li><div class="node round"></div><p>Integrate Wellness services and tracking along with continuous care</p></li>
              <li><div class="divider div-1"></div></li>
              <li><div class="node round right"></div><p className="para-right">Internal exchange of Wawa, Warma and NHCT</p></li>
              <li><div class="divider div-3"></div></li>  
              <li><div class="node year-2019"></div><p></p></li> 
              <li><div class="divider div-4"></div></li>  
              <li><div class="node round right"></div><p className="para-right">Health and wellness data marketplace for researchers, universities and Pharma companies</p></li>
              <li><div class="divider div-5"></div></li>
              <li><div class="node round"></div><p>Integrations of NHCT verified data with other 3rd Party Apps</p></li>
              <li><div class="divider div-6"></div></li>
              <li><div class="node round right"></div><p className="para-right">Developer ecosystem availability</p></li>
              <li><div class="divider div-6"></div></li>
              <li><div class="node year-2020"></div><p></p></li>
            </ul>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default RoadMap;
