import React, { Component } from 'react';
import './image-text-desc.css';
import HealthWellness from '../../assets/images/health-wellness.png';
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
                  Your Health and Wellness is in your Hands
                </h4>
                <p className="image-text-desc-text">
                Being healthy means continuously working towards it via regular exercise, medical checkups and sometimes taking medicine when necessary. This involves coordination between various Health and Wellness providers and adherence to schedule.
                </p>
                <div class="combined-text-box">
                  <div className="combined-text-box-container">
                    <img className="combined-text-image" src={Combinedtext} alt="Combinedtext" />
                    <span className="combined-text-description">The NHCT platform makes the above process Frictionless and Rewarding</span>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <img width="100%" src={HealthWellness}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageTextDesc;
