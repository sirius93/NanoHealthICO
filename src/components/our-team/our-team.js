import React, { Component } from 'react';
import './our-team.css';
import ceo from '../../assets/images/manishranjan.png';
import cto from '../../assets/images/nagarjuna.png';
import business from '../../assets/images/praveen.png';

class OurTeam extends Component {
  render() {
    return (
      <div className="our-team">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <h4 className="our-team-heading">Our Team</h4>
            {/* <div className="col-xs-3">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={teammate} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6>John Appleseed</h6>
                  <p>POSITION</p>
                </div>
              </div>
            </div> */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={ceo} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/manishranjan2/">Manish Ranjan</a></h6>
                  <p>CEO</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={cto} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/nagav/">Nagarjuna Vangala</a></h6>
                  <p>CTO</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={business} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/praveen-dwarakanath-0bb7505/">Praveen Dwarkanath</a></h6>
                  <p>Business and Partnerships</p>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default OurTeam;
