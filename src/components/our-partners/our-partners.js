import React, { Component } from 'react';
import './our-partners.css';
import empowerLabs from '../../assets/images/empower-labs.png';
import empowerLabsLogo from '../../assets/images/Secondary-Logo-vector.png';
import empowerLabsLogo2x from '../../assets/images/Secondary-Logo-vector@2x.png';
import ideaLabs from '../../assets/images/idea-labs.png';
import ideaLabsLogo from '../../assets/images/idea-clinics.png';
import ideaLabsLogo2x from '../../assets/images/idea-clinics@2x.png';
import hccLogo from '../../assets/images/Hcc_logo.png';

class OurTeam extends Component {
  render() {
    return (
      <div className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <h4 className="our-partners-heading">Our partners</h4>
            <p className="our-partners-subheading">The NHCT ecosystem partners today have more than 0.5 million touchpoints and growing</p>
            {/* <div className="col-xs-12 col-sm-4 col-md-4">
              <div class="our-partners-section-container">
                <div class="our-partners-image-container" href="/content/lcbo/en.html" target="_self">
                    <img class="our-partners-selector-image" src={empowerLabs} alt="empowerlabs" />
                </div> 
                <div class="our-partners-logo-name-container">
                  <picture>
                        <source media="(max-width: 767px)" srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' } />
                        <source srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' }  />
                        <img class="our-partners-logo" src={empowerLabsLogo} alt="empowerlabs" />
                  </picture>
                  <p class="our-partners-name">Empower Labs</p>
                </div>
              </div>
            </div> */}
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div class="our-partners-section-container">
                {/*<div class="our-partners-image-container" href="/content/lcbo/en.html" target="_self">
                    <img class="our-partners-selector-image" src={ideaLabs} alt="empowerlabs" />
                </div> */}
                <div class="our-partners-logo-name-container">
                  <picture>
                        <source media="(max-width: 767px)" srcset={ ideaLabsLogo + ' 1x' + ',' + ideaLabsLogo2x + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ ideaLabsLogo + ' 1x' + ',' + ideaLabsLogo2x + ' 2x' } />
                        <source srcset={ ideaLabsLogo + ' 1x' + ',' + ideaLabsLogo2x + ' 2x' }  />
                        <img class="our-partners-logo" src={ideaLabsLogo} alt="empowerlabs" />
                  </picture>
                  <p class="our-partners-name">Idea Clinics</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div class="our-partners-section-container">
                {/*<div class="our-partners-image-container" href="/content/lcbo/en.html" target="_self">
                    <img class="our-partners-selector-image" src={empowerLabs} alt="empowerlabs" />
                </div> */}
                <div class="our-partners-logo-name-container">
                  <picture>
                        <source media="(max-width: 767px)" srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' } />
                        <source srcset={ empowerLabsLogo + ' 1x' + ',' + empowerLabsLogo2x + ' 2x' }  />
                        <img class="our-partners-logo" src={empowerLabsLogo} alt="empowerlabs" />
                  </picture>
                  <p class="our-partners-name">Empower Labs</p>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4">
              <div class="our-partners-section-container">
                {/*<div class="our-partners-image-container" href="/content/lcbo/en.html" target="_self">
                    <img class="our-partners-selector-image" src={empowerLabs} alt="empowerlabs" />
                </div> */}
                <div class="our-partners-logo-name-container">
                  <picture>
                        <source media="(max-width: 767px)" srcset={ hccLogo + ' 1x' + ',' + hccLogo + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ hccLogo + ' 1x' + ',' + hccLogo + ' 2x' } />
                        <source srcset={ hccLogo + ' 1x' + ',' + hccLogo + ' 2x' }  />
                        <img class="our-partners-logo" src={hccLogo} alt="hcc" />
                  </picture>
                  <p class="our-partners-name">Hyderabad Cricket Club</p>
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
