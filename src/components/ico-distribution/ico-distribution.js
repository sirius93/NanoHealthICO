import React, { Component } from 'react';
import './ico-distribution.css';
import UseofProceeds from '../../assets/images/group-20.png';
import UseofProceeds2x from '../../assets/images/group-20@2x.png';
import UseofProceedsmobile from '../../assets/images/group-20.svg';
import NHTTokendis from '../../assets/images/group_20.png';
import NHTTokendis2x from '../../assets/images/group_20@2x.png';
import NHTTokendisMobile from '../../assets/images/group-20-copy.svg';
import Wawa from '../../assets/images/group-21.png';
import Wawa2x from '../../assets/images/group-21@2x.png';
import Warma from '../../assets/images/group-21-copy.png';
import Warma2x from '../../assets/images/group-21-copy@2x.png';


class IcoDistribution extends Component {
  render() {
    return (
      <div className="ico-distribution"> 
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/*<div className="ico-distribution-left-image">
                <div className="row">
                  <div className="col-xs-6 col-sm-4 col-md-4 ico-distribution-image">
                  <picture>
                      <source media="(max-width: 767px)" srcset={ UseofProceeds + ' 1x' + ',' + UseofProceeds + ' 2x'} />
                      <source media="(max-width: 1025px)" srcset={ UseofProceeds + ' 1x' + ',' + UseofProceeds2x + ' 2x' } />
                      <source srcset={ UseofProceeds + ' 1x' + ',' + UseofProceeds2x + ' 2x' }  />
                      <img  src={UseofProceeds} alt="Use of Proceeds" />
                  </picture>
                    
                  </div>
                  <div className="col-xs-6 col-sm-8 col-md-8 ico-distribution-text">
                    <div className="col-xs-12">
                      <h2 className="ico-distribution-text-heading">
                        Use of Proceeds
                      </h2>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <p>Technology Development</p>
                      <h5 className="tech-per">35%</h5>
                    </div> 
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <p>Sales and Marketing</p>
                      <h5 className="market-per">35%</h5>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <p>Legal and Consulting</p>
                      <h5 className="legal-con">10%</h5>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6">
                      <p>Ecosystem Development</p>
                      <h5 className="eco-dev">20%</h5>
                    </div> 
                  </div>
                </div>
              </div>*/}
              <div className="ico-distribution-right-image">
                <div className="row">
                <div className="col-xs-6 col-sm-8 col-md-8  ico-distribution-text">
                    <div className="col-xs-12">
                      <h2 className="ico-distribution-text-heading">
                        NHCT Token Distribution
                      </h2>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <p>Crowd Sale</p>
                      <h5 className="tech-per">35%</h5>
                    </div>
                      <div className="col-xs-12 col-sm-4 col-md-4">
                      <p className="biz">User rewards</p>
                    <h5 className="biz-per">30%</h5>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <p className="market">ICO core team</p>
                      <h5 className="market-per">15%</h5>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <p className="legal">Ecosystem development</p>
                      <h5 className="eco-sys">18%</h5>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-4">
                      <p className="legal">BOUNTY TOKENS</p>
                      <h5 className="legal-per">2%</h5>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-4 col-md-4 ico-distribution-image">
                  <picture>
                      <source media="(max-width: 767px)" srcset={ NHTTokendis + ' 1x' + ',' + NHTTokendis + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ NHTTokendis + ' 1x' + ',' + NHTTokendis2x + ' 2x' } />
                      <source srcset={ NHTTokendis + ' 1x' + ',' + NHTTokendis2x + ' 2x' }  />
                      <img  src={NHTTokendis} alt="NHT token distribution" />
                  </picture>
                    {/* <img src={NHTTokendis} alt="NHT token distribution"/> */}
                  </div>
                </div>
              </div> 
              <div className="ico-distribution-double">
                <div className="col-xs-12 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                  <div className="ico-distribution-double-container">
                    <div className="row">
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <picture>
                          <source media="(max-width: 767px)" srcset={ Wawa + ' 1x' + ',' + Wawa2x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ Wawa + ' 1x' + ',' + Wawa2x + ' 2x' } />
                          <source srcset={ Wawa + ' 1x' + ',' + Wawa2x + ' 2x' }  />
                          <img width="100%" src={Wawa} alt="wawa"/>
                        </picture>
                        {/*<p className="wawa100">100%</p>*/}
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4 ico-distribution-double-text">
                        <p className="ico-distribution-double-text-1">Ecosystem development</p>
                        <p className="ico-distribution-double-text-2"> User rewards </p>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <picture>
                          <source media="(max-width: 767px)" srcset={ Warma + ' 1x' + ',' + Warma2x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ Warma + ' 1x' + ',' + Warma2x + ' 2x' } />
                          <source srcset={ Warma + ' 1x' + ',' + Warma2x + ' 2x' }  />
                          <img width="100%" src={Warma} alt="wawa"/>
                        </picture>
                      {/*<p className="warma100">100%</p>*/}
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

export default IcoDistribution;
