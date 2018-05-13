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
            <div class="wrapper">
              <ul class="StepProgress">
                <li class="StepProgress-item current"></li>
                <li class="StepProgress-item in-between left"><span>Integrate Wellness services and tracking along with continuous care</span>
                </li>
                <li class="StepProgress-item next"></li>
                <li class="StepProgress-item in-between left"><span>Internal exchange of Wawa, Warma and NHT</span></li>
                <li class="StepProgress-item in-between right"><span>Health and wellness data marketplace for researchers, universities and Pharma companies</span></li>
                <li class="StepProgress-item next-to-next"></li>
                <li class="StepProgress-item in-between left"><span>Integrations of NHT verified data with other 3rd Party Apps</span></li>
              </ul>
            </div>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default RoadMap;
