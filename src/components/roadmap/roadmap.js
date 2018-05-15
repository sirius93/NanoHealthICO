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
              <li><div class="node current"></div><p></p></li>
              <li><div class="divider"></div></li>
              <li><div class="node round"></div><p>Integrate Wellness services and tracking along with continuous care</p></li>
              <li><div class="divider"></div></li>
              <li><div class="node next"></div><p></p></li> 
              <li><div class="divider"></div></li>  
              <li><div class="node round"></div><p>Internal exchange of Wawa, Warma and NHCT</p></li>
              <li><div class="divider"></div></li>  
              <li><div class="node round right"></div><p className="para-right">Health and wellness data marketplace for researchers, universities and Pharma companies</p></li>
              <li><div class="divider"></div></li>
              <li><div class="node next-to-next"></div><p></p></li>
              <li><div class="divider"></div></li>
              <li><div class="node round"></div><p>Integrations of NHCT verified data with other 3rd Party Apps</p></li>
            </ul>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default RoadMap;
