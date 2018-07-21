import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import './image-text-desc.css';
import HealthWellness from '../../assets/images/Youtube.png';
import Combinedtext from '../../assets/images/combined-shape.png';

class ImageTextDesc extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal () {
    this.setState({isOpen: true})
  }
  render() {
    return (
      <div>     
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
                <div>
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='WXfglyRAvqc' onClose={() => this.setState({isOpen: false})} />
                </div>
                <div className="youtube-paceholder-image-container">
                    <img className="youtube-paceholder-image" onClick={this.openModal} width="300%" src={HealthWellness} alt="Learn" />
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

export default ImageTextDesc;
