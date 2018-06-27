import React, { Component } from 'react';
import './image-text-desc.css';
import HealthWellness from '../../assets/images/health-wellness.png';
import HealthWellness2x from '../../assets/images/health-wellness@2x.png';
import HealthWellnessMobile from '../../assets/images/health_Wellness_mobile.png';
import HealthWellnessMobile2x from '../../assets/images/health_Wellness_mobile@2x.png';
import Combinedtext from '../../assets/images/combined-shape.png';

class ImageTextDesc extends Component {
  render() {
    return (
      <div className="image-text-desc">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-8 col-md-8">
                <h4 className="image-text-desc-heading">
                  The Health & Wellness cycle
                </h4>
                <p className="image-text-desc-text">
                Being healthy means continuously working towards it via regular exercise, medical checkups and sometimes taking medicine when necessary. This involves coordination between various Health and Wellness providers and disciplined lifestyle.
                </p>
                <div class="combined-text-box">
                  <div className="combined-text-box-container">
                    <img className="combined-text-image" src={Combinedtext} alt="Combinedtext" />
                    <span className="combined-text-description">The NHCT ecosystem makes the change to a Healthy lifestyle frictionless and rewarding.</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                {/* <img width="100%" src={HealthWellness}/> */}
                <picture>
                  <source media="(max-width: 767px)" srcset={ HealthWellnessMobile + ' 1x' + ',' + HealthWellnessMobile2x + ' 2x' } />
                  <source media="(max-width: 1025px)" srcset={ HealthWellness + ' 1x' + ',' + HealthWellness2x + ' 2x' } />
                  <source srcset={ HealthWellness + ' 1x' + ',' + HealthWellness2x + ' 2x' }  />
                  <img width="100%" src={HealthWellness} alt="Learn" />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageTextDesc;
