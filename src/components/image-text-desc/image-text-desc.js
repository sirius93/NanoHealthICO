import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ModalVideo from 'react-modal-video';
import './image-text-desc.css';
import HealthWellness from '../../assets/images/Youtube.png';
import Combinedtext from '../../assets/images/combined-shape.png';


import Investor_deck from '../../assets/images/Investor_deck.png'
import One_pager from '../../assets/images/One_pager.png'
import White_paper from '../../assets/images/White_paper.png'
import Learn from '../../assets/images/Learn.png'
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
        <div className="image-text-desc" >
          <div className="container">
            <div className="row">
              {/*<div className="col-xs-12 col-sm-12 col-md-12">
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
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='HobxKh8xtjc' onClose={() => this.setState({isOpen: false})} />
                </div>
                <div className="youtube-paceholder-image-container">
                    <img className="youtube-paceholder-image" onClick={this.openModal} width="200%" src={HealthWellness} alt="Learn" />
                </div>  
                </div>
              </div>*/}
              <div className="col-xs-12 col-sm-12 col-md-12">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <h4 className="image-text-desc-heading">
                    The Health & Wellness cycle
                  </h4>
                  <p className="image-text-desc-text">
                  Being healthy means continuously working towards it via regular exercise, medical checkups and sometimes taking medicine when necessary. This involves coordination between various Health and Wellness providers and disciplined lifestyle.
                  </p>
                  {/*<div class="combined-text-box">
                    <div className="combined-text-box-container">
                      <img className="combined-text-image" src={Combinedtext} alt="Combinedtext" />
                      <span className="combined-text-description">The NHCT ecosystem makes the change to a Healthy lifestyle frictionless and rewarding.</span>
                    </div>
                  </div>*/}
                  <div className="image-text-desc-white-paper-container hidden-xs">
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-learn">
                          
                            <img src={Learn} />
                            <p>Learn more</p>
                          
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-pager">
                          <a href="https://drive.google.com/open?id=1qB7FCPknuVg3kMmP-C2wRBP5T7YZI3JO" target="_blank" title="One Pager">
                            <img src={One_pager} />
                            <p>One Pager</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-investor-desk">
                          <a href="https://drive.google.com/open?id=1gOm2Hd_HFrLHsroeehtG1KSN6cVi3kce" target="_blank" title="Investor Deck">
                            <img src={Investor_deck} />
                            <p>Investor Deck</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-white-paper">
                          <a href="https://drive.google.com/open?id=1GAqoyOxEKgz8CbXUNw7g0HTh95VpvLh7" target="_blank" title="White Paper">
                            <img src={White_paper} />
                            <p>Whitepaper</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6">
                <div>
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='m9XQzRrRIQ0' onClose={() => this.setState({isOpen: false})} />
                </div>
                <div className="youtube-paceholder-image-container">
                    <img className="youtube-paceholder-image" onClick={this.openModal} width="70%" src={HealthWellness} alt="Learn" />
                </div>  
                </div>
              {/*------------*/}
                <div className="image-text-desc-white-paper-container visible-xs">
                    <div className="row">
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-learn">
                          
                            <img src={Learn} />
                            <p>Learn more</p>
                          
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-pager">
                          <a href="https://drive.google.com/open?id=1qB7FCPknuVg3kMmP-C2wRBP5T7YZI3JO" target="_blank" title="One Pager">
                            <img src={One_pager} />
                            <p>One Pager</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-investor-desk">
                          <a href="https://drive.google.com/open?id=1gOm2Hd_HFrLHsroeehtG1KSN6cVi3kce" target="_blank" title="Investor Deck">
                            <img src={Investor_deck} />
                            <p>Investor Deck</p>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-3 col-md-3">
                        <div className="image-text-desc-white-paper">
                          <a href="https://drive.google.com/open?id=1GAqoyOxEKgz8CbXUNw7g0HTh95VpvLh7" target="_blank" title="White Paper">
                            <img src={White_paper} />
                            <p>Whitepaper</p>
                          </a>
                        </div>
                      </div>
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
