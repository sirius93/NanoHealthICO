import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import './image-text-desc.css';
import HealthWellness from '../../assets/images/Youtube.png';
import fundamatics from '../../assets/images/fundamatics.svg';
import businessline from '../../assets/images/businessline.png';
import financialexpress from '../../assets/images/financialexpress.svg';
import pharmabiz from '../../assets/images/pharmabiz.jpg';
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
        <div className="press-coverage-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h6 className="press-coverage-heading">Press coverage </h6>
                  <div className="press-coverage-links">
                    <span className="press-coverage-link">
                      <a href="http://www.fundamatics.net/the-nanohealth-story-a-new-way-to-look-at-your-health/" target="_blank">
                          <img width="20%" src={fundamatics} alt="telegram" />
                      </a>
                    </span>
                    <span className="press-coverage-link">
                      <a href="https://www.thehindubusinessline.com/news/national/nanohealth-gvk-bio-to-take-healthcare-to-slum-dwellers/article23111584.ece" target="_blank">
                          <img width="20%" src={businessline} alt="facebook" />
                      </a>
                    </span>
                    <span className="press-coverage-link">
                      <a href="https://www.financialexpress.com/industry/nanohealths-doc-in-a-bag-breaks-economic-barriers/108240/" target="_blank">
                        <img width="20%" src={financialexpress} alt="twitter" />
                      </a>
                    </span>
                    <span className="press-coverage-link">
                      <a href="http://www.pharmabiz.com/NewsDetails.aspx?aid=84336&sid=1" target="_blank">
                        <img width="20%" src={pharmabiz} alt="twitter" />
                      </a>
                    </span>
                  </div>
              </div>
            </div>
          </div>
        </div>      
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
