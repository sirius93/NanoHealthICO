import React, { Component } from 'react';
import './proof-of-health.css';
import wawa from '../../assets/images/wawa.png';
import wawa2x from '../../assets/images/wawa@2x.png';
import warma from '../../assets/images/warma.png';
import warma2x from '../../assets/images/warma@2x.png';
import nhct from '../../assets/images/nhct.png';
import nhct2x from '../../assets/images/nhct@2x.png';
import tokenflow from '../../assets/images/token-flow.png';
import tokenflow2x from '../../assets/images/token-flow@2x.png';
import uthDiagram from '../../assets/images/group-43.png';
import uthDiagram2x from '../../assets/images/group-43@2x.png'

class ProofOfHealth extends Component {
  render() {
    return (
      <div className="parent-container">
        <div className="proof-of-health">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h4 className="image-card-sub-header">Proof of Total Health</h4>
              <p className="image-card-para">An innovative 3 token incentive model, to ensure high quality health and wellness data</p>
              <div className="proof-of-health-content">
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <h6 className="poh-heading">Wawa</h6>
                  <picture>
                    <source media="(max-width: 767px)" srcset={ wawa + ' 1x' + ',' + wawa2x + ' 2x' } />
                    <source media="(max-width: 1025px)" srcset={ wawa + ' 1x' + ',' + wawa2x + ' 2x' } />
                    <source srcset={ wawa + ' 1x' + ',' + wawa2x + ' 2x' }  />
                    <img width="50%" className="poh-image" src={wawa} alt="image2"/>
                  </picture>
                  <p className="poh-para">Self Verified Fitness Data</p>
                  <p className="poh-para">Least Authentic</p>
                  <p className="poh-para">Incentivised using Wawa Token</p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 dotted-line">
                  <h6 className="poh-heading">Warma</h6>
                  <picture>
                    <source media="(max-width: 767px)" srcset={ warma + ' 1x' + ',' + warma2x + ' 2x' } />
                    <source media="(max-width: 1025px)" srcset={ warma + ' 1x' + ',' + warma2x + ' 2x' } />
                    <source srcset={ warma + ' 1x' + ',' + warma2x + ' 2x' }  />
                    <img width="50%" className="poh-image" src={warma} alt="image2"/>
                  </picture>
                  <p className="poh-para">Community Verified Wellness Data</p>
                  <p className="poh-para">Authentic but does not capture complete health</p>
                  <p className="poh-para">Incentivised Using Warma Token</p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 dotted-line">
                  <h6 className="poh-heading">NHCT</h6>
                  <picture>
                    <source media="(max-width: 767px)" srcset={ nhct + ' 1x' + ',' + nhct2x + ' 2x' } />
                    <source media="(max-width: 1025px)" srcset={ nhct + ' 1x' + ',' + nhct2x + ' 2x' } />
                    <source srcset={ nhct + ' 1x' + ',' + nhct2x + ' 2x' }  />
                    <img width="50%" className="poh-image" src={nhct} alt="image2"/>
                  </picture>
                  <p className="poh-para">Medical Tests/Checkups Verified Medical Data</p>
                  <p className="poh-para">Highest Degree of Authenticity</p>
                  <p className="poh-para">Incentivised using NHCT Token</p>
                </div>
              </div>
              <div  className="col-xs-12">
                <div className="token-flow-image-container">
                    <h4 className="token-flow-header">
                      Token Flow
                    </h4>
                    <div className="token-flow-image">
                      <picture>
                        <source media="(max-width: 767px)" srcset={ tokenflow + ' 1x' + ',' + tokenflow2x + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ tokenflow + ' 1x' + ',' + tokenflow2x + ' 2x' } />
                        <source srcset={ tokenflow + ' 1x' + ',' + tokenflow2x + ' 2x' }  />
                        <img width="100%" className="token-flow-image" src={tokenflow} alt="image2"/>
                      </picture>
                    </div>
                    <p className="token-flow-para">You can only convert Wawa & Warma into NHCT by providing via updated medical records, improvement in health and maintaining good health</p>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
        <div className="uth-diagram-container">
          <div className="container">
            <div className="row">
              {/*<div className="col-xs-12">
                <h2 className="heading">
                  Under the hood
                </h2>
                <div className="uth-diagram-image">
                  <picture>
                    <source media="(max-width: 767px)" srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' } />
                    <source media="(max-width: 1025px)" srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' } />
                    <source srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' }  />
                    <img width="80%" className="poh-image" src={uthDiagram} alt="image2"/>
                  </picture>
                </div>
                <div className="uth-para-container">
                  <div className="col-xs-12 col-sm-4 col-md-4 col-md-offset-1">
                    <span className="number">
                      1
                    </span>
                    <span className="text-para">
                    Hyperledger manages all healthcare data users and roles, proprietary algorithms for healthcare management and prediction
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-3">
                    <span className="number">
                      2
                    </span>
                    <span className="text-para">
                    Public Ethereum blockchain for managing NHCT utility tokens
                    </span>
                  </div>
                  <div className="col-xs-12 col-sm-4 col-md-4">
                    <span className="number">
                      3
                    </span>
                    <span className="text-para">
                    Hybrid storage management architecture based on data partitioning with IPFS, DDMS and Blockchain native stores
                    </span>
                  </div>
                </div>
              </div>*/}

              <div className="col-xs-12">
                <h2 className="heading">
                  Under the hood
                </h2>
                <div className="col-xs-12 col-sm-8 col-md-8">
                  <div className="uth-diagram-image">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' } />
                      <source srcset={ uthDiagram + ' 1x' + ',' + uthDiagram2x + ' 2x' }  />
                      <img width="85%" className="poh-image" src={uthDiagram} alt="image2"/>
                    </picture>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="uth-para-container">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <span className="number">
                        1
                      </span>
                      <span className="text-para">
                      Hyperledger manages all healthcare data users and roles, proprietary algorithms for healthcare management and prediction
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <span className="number">
                        2
                      </span>
                      <span className="text-para">
                      Public Ethereum blockchain for managing NHCT utility tokens
                      </span>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12">
                      <span className="number">
                        3
                      </span>
                      <span className="text-para">
                      Hybrid storage management architecture based on data partitioning with IPFS, DDMS and Blockchain native stores
                      </span>
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

export default ProofOfHealth;
