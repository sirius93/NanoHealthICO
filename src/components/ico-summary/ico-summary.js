import React, { Component } from 'react';
import './ico-summary.css';
import UseofProceeds from '../../assets/images/group-20.png';
import icosummary from '../../assets/images/ICO_Summary.svg';
import icosummary2x from '../../assets/images/ICO_Summary@2x.png';
import Token_Distribution from '../../assets/images/Token_Distribution.png';
import Token_Distribution2x from '../../assets/images/Token_Distribution@2x.svg';
/*import icosummary from '../../assets/images/ICO_Summary.svg';
import icosummary2x from '../../assets/images/ICO_Summary@2x.svg';
import Token_Distribution from '../../assets/images/Token_Distribution.svg';
import Token_Distribution2x from '../../assets/images/Token_Distribution@2x.svg';*/
/*import icosummary from '../../assets/images/ico-summary.svg';
import icosummary2x from '../../assets/images/ico-summary@2x.svg';*/

class IcoSummary extends Component {
  render() {
    return (
      <div className="ico-summary-div">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              {/*<div className="ico-summary-container">
                <div className="col-xs-12 ico-summary-heading">
                    <h4>ICO Summary</h4>
                    <p></p>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 ico-summary-token-name">
                  <h4> ERC 20 token</h4>
                    <p>(NHCT) NanoHealthCare Token</p>
                </div>
                <div className="col-xs-12 col-sm-3 col-md-3 ico-summary-token-count">
                  <h4>$9 million</h4>
                  <p>Hard Cap</p>
                </div>
                <div className="col-xs-12 col-sm-4 col-md-4 ico-summary-token-count">
                  <h4>$1 million</h4>
                  <p>Soft Cap</p>
                </div>
                <div className="col-xs-12 col-sm-5 col-md-5 ico-summary-token-circulation">
                  <h4>1,000,000,000</h4>
                  <p>No of Token in circulation</p>
                </div>
                <div className="col-xs-12 col-sm-7 col-md-7 ico-summary-token-price">
                  <h4>$0.032</h4>
                  <p>BASE PRICE</p>
                </div>
              </div>*/}
            {/*2nd version*/}
              {/*<div className="ico-summary-container">
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <h4 className="ico-summary-sub-header">ICO Summary</h4>
                  <div className="ico-summary-diagram-image">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' }  />
                      <img width="85%" className="poh-image" src={icosummary} alt="image2"/>
                    </picture>
                  </div>
                </div>
              </div>*/}

              <div className="ico-summary-container-div">
                <div className="col-xs-12 col-sm-6 col-md-6">
                  <h4 className="ico-summary-sub-header">ICO Summary</h4>
                  <div className="ico-summary-diagram-image">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' } />
                      <source srcset={ icosummary + ' 1x' + ',' + icosummary2x + ' 2x' }  />
                      <img width="100%" className="poh-image" src={icosummary} alt="image2"/>
                    </picture>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 ico-dotted-line">
                  <h4 className="ico-summary-sub-header">NHCT Token Distribution</h4>
                  <div className="ico-summary-diagram-image">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ Token_Distribution + ' 1x' + ',' + Token_Distribution2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ Token_Distribution + ' 1x' + ',' + Token_Distribution2x + ' 2x' } />
                      <source srcset={ Token_Distribution + ' 1x' + ',' + Token_Distribution2x + ' 2x' }  />
                      <img width="100%" className="poh-image" src={Token_Distribution} alt="image2"/>
                    </picture>
                  </div>
                </div>

                {/*<div className="col-xs-12 col-sm-12 col-md-12">
                  <h4 className="ico-summary-sub-header">ICO Sale Timelines</h4>
                  <div className="ico-sale-container">
                    <table className="tg">
                      <tr>
                        <th className="tg-0lax ico-header" colspan="5"><span>ICO Sale Timelines</span><br/></th>
                      </tr>
                      <tr className="ico-sub-header">
                        <td className="tg-s268"><span>Period</span></td>
                        <td className="tg-s268"><span>Investment</span></td>
                        <td className="tg-s268"><span>Bonus (%)</span></td>
                        <td className="tg-s268"><span>Dates</span></td>
                        <td className="tg-s268"><span>Strategic Investor Protection</span></td>
                      </tr>
                      <tr className="private-sale">
                        <td className="tg-0lax">Private Sale</td>
                        <td className="tg-0lax">Minimum $20K</td>
                        <td className="tg-0lax">Minimum 40%</td>
                        <td className="tg-0lax">From 3 Aug, 2018</td>
                        <td className="tg-0lax">Yes</td>
                      </tr>
                      <tr>
                        <td className="tg-0lax ico-header" colspan="5"><span>Whitelisting for Pre and Public Sale opens on 1 Sept, 2018</span></td>
                      </tr>
                      <tr className="pre-sale">
                        <td className="tg-0lax">Pre-ICO – First 2 weeks</td>
                        <td className="tg-0lax">Minimum $10K</td>
                        <td className="tg-0lax">35%</td>
                        <td className="tg-0lax">1 Oct' 18 to 15 Oct' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                      <tr className="pre-sale">
                        <td className="tg-0lax">Pre-ICO - Last 2 weeks</td>
                        <td className="tg-0lax">Minimum $5K</td>
                        <td className="tg-0lax">25%</td>
                        <td className="tg-0lax">16 Oct' 18 to 31 Oct' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="tg-0lax">Main Sale – 1st week<br/></td>
                        <td className="tg-0lax">Minimum $10</td>
                        <td className="tg-0lax">20%</td>
                        <td className="tg-0lax">15 Nov' 18 to 22 Nov' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="tg-0lax">Main Sale – 2nd week</td>
                        <td className="tg-0lax">Minimum $10</td>
                        <td className="tg-0lax">15%</td>
                        <td className="tg-0lax">23 Nov' 18 to 30 Nov' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="tg-0lax">Main Sale – 3rd week</td>
                        <td className="tg-0lax">Minimum $10</td>
                        <td className="tg-0lax">10%</td>
                        <td className="tg-0lax">1 Dec' 18 to 7 Dec' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="tg-0lax">Main Sale – 4th week</td>
                        <td className="tg-0lax">Minimum $10</td>
                        <td className="tg-0lax">0%</td>
                        <td className="tg-0lax">8 Dec' 18 to 15 Dec' 18</td>
                        <td className="tg-0lax">No</td>
                      </tr>
                    </table>
                  </div>
                </div>*/}
                <div className="col-xs-12 col-sm-12 col-md-12">
                  <h4 className="ico-summary-sub-header">ICO Sale Timelines</h4>
                  <div className="ico-sale-container">
                    <table className="ico-table">
                      <tr className="ico-header">
                        <td className="ico-header-cell"><span>Period</span></td>
                        <td className="ico-header-cell"><span>Investment</span></td>
                        <td className="ico-header-cell"><span>Bonus (%)</span></td>
                        <td className="ico-header-cell"><span>Dates</span></td>
                        <td className="ico-header-cell"><span>Strategic Investor Protection</span></td>
                      </tr>
                      <tr className="private-sale">
                        <td className="ico-td">Private Sale</td>
                        <td className="ico-td">Minimum $20K</td>
                        <td className="ico-td">Negotiable</td>
                        <td className="ico-td">From 3 Aug, 2018</td>
                        <td className="ico-td">Yes</td>
                      </tr>
                      <tr className="ico-header">
                        <td className="ico-header-cell" colspan="5"><span>Whitelisting for Pre and Public Sale opens on 1 Sept, 2018</span></td>
                      </tr>
                      <tr className="pre-sale">
                        <td className="ico-td">Pre-ICO – First 2 weeks</td>
                        <td className="ico-td">Minimum $10K</td>
                        <td className="ico-td">35%</td>
                        <td className="ico-td">1 Oct' 18 to 15 Oct' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                      <tr className="pre-sale">
                        <td className="ico-td">Pre-ICO - Last 2 weeks</td>
                        <td className="ico-td">Minimum $5K</td>
                        <td className="ico-td">25%</td>
                        <td className="ico-td">16 Oct' 18 to 31 Oct' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="ico-td">Main Sale – 1st week<br/></td>
                        <td className="ico-td">Minimum $10</td>
                        <td className="ico-td">20%</td>
                        <td className="ico-td">15 Nov' 18 to 22 Nov' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="ico-td">Main Sale – 2nd week</td>
                        <td className="ico-td">Minimum $10</td>
                        <td className="ico-td">15%</td>
                        <td className="ico-td">23 Nov' 18 to 30 Nov' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="ico-td">Main Sale – 3rd week</td>
                        <td className="ico-td">Minimum $10</td>
                        <td className="ico-td">10%</td>
                        <td className="ico-td">1 Dec' 18 to 7 Dec' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                      <tr className="main-sale">
                        <td className="ico-td">Main Sale – 4th week</td>
                        <td className="ico-td">Minimum $10</td>
                        <td className="ico-td">0%</td>
                        <td className="ico-td">8 Dec' 18 to 15 Dec' 18</td>
                        <td className="ico-td">No</td>
                      </tr>
                    </table>
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

export default IcoSummary;
