import React, { Component } from 'react';
import './our-team.css';
import ceo from '../../assets/images/manishranjan.png';
import cto from '../../assets/images/nagarjuna.png';
import business from '../../assets/images/praveen.png';
import teamimage from '../../assets/images/team-image.jpg';
import david from '../../assets/images/david.jpg';
import siddalingesh from '../../assets/images/siddalingesh.jpg';
import adam from '../../assets/images/adam.jpg';

class OurTeam extends Component {
  render() {
    const marginStyle = {
      marginTop: '50px'
    }
    const paraStyle = {
      textTransform : 'unset',
      fontFamily: 'Din Next',
      letterSpacing: 'unset'
    }
    return (
      <div className="our-team" id="our-team">
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
                  <p>nhct Ecosystem growth</p>
                </div>
              </div>
            </div>
            {/* <div className="col-xs-12">
              <div className="team-image">
                <img width="100%" src={teamimage} alt="team-image" />
              </div>
            </div> */}
            <div className="col-xs-12">
              <h4 style={marginStyle} className="our-team-heading">Our Advisors</h4>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={siddalingesh} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/sidduzalaki/">Siddalingesh</a></h6>
                  <p style={paraStyle}>Certified Bitcoin professional and an ICO advisor, comes in with over 10 years of experience in building products for the BFSI sector.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={adam} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/adamcpowell/">Adam Powell</a></h6>
                  <p style={paraStyle}>Dr. Powell is a health care economist and President of Payer+Provider Syndicate Measuring &amp; Improving the Quality of Care.</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div className="image-text-container">
                <div className="image-container">
                  <img width="100%" src={david} alt="teammate"/>
                </div>
                <div className="text-container">
                  <h6><a target="_blank" href="https://www.linkedin.com/in/wrightdr/">David</a></h6>
                  <p style={paraStyle}>McKinsey alum, with 15 years of leading strategic growth and M&A across 5 continents has helped create $70Bn in opportunities in technology and finance sectors</p>
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
