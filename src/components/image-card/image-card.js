import React, { Component } from 'react';
import './image-card.css';
import UseofProceeds from '../../assets/images/group-20.png';
import Image1 from '../../assets/images/award-image.png';
import Image2 from '../../assets/images/rectangle-16-copy-2.png';
import Image22x from '../../assets/images/rectangle-16-copy-2@2x.png';
import Image3 from '../../assets/images/rectangle-16-copy-4.png';
import Image32x from '../../assets/images/rectangle-16-copy-4@2x.png';
import Image4 from '../../assets/images/rectangle-16-copy-6.png';
import Image42x from '../../assets/images/rectangle-16-copy-6@2x.png';
import Play from '../../assets/images/play.png';
import Play2x from '../../assets/images/play@2x.png';
import TelegramButton from '../../components/telegram-button/telegram-button';

class ImageCard extends Component {
  render() {
    return (
      <div className="image-card">
        <div className="container">
          <div className="row">
            {/*<div className="col-xs-12 col-sm-12 col-md-12">
              
              <h4 className="image-card-sub-header">NHCT is backed by NanoHealth</h4>
              <p className="image-card-para">NanoHealth leverages a unique combination of community health workers called “Health Coaches” and a proprietary technology platform to facilitate early diagnosis and continuous management of chronic NCDs such as Diabetes and Hypertension.</p>
              <div className="image-card-container">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <img className="image-card-image image-card-image-1" src={Image1} alt="image1"/>
                    <div className="image-card-text-1">
                      <h4>HULT prize winners 2014</h4>
                      <p>Only team from India to win it.</p>
                      <a href="https://www.youtube.com/watch?v=8K1mQs1NYok"><img width="46px" src={Play}/> Watch the video</a>
                    </div>
                  </div>
              </div>
              <div className="image-card-container">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' } />
                      <source srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' }  />
                      <img width="100%" className="image-card-image" src={Image2} alt="image2"/>
                    </picture>
                    
                    <div className="image-card-text-2">
                      <h4>Raised $1 million</h4>
                      <p>From HULT Prize in 2014.</p>
                    </div>
                  </div>
              </div>
              <div className="image-card-container">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' } />
                      <source srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' }  />
                      <img width="100%" className="image-card-image" src={Image3} alt="image3"/>
                    </picture>
                    <div className="image-card-text-3">
                      <h4>Already touched 75,000 lives</h4>
                      <p>and growing.</p>
                    </div>
                  </div>
              </div>
              <div className="image-card-container">
                  <div className="col-xs-12 col-sm-6 col-md-6">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' } />
                      <source srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' }  />
                      <img width="100%" className="image-card-image" src={Image4} alt="image1"/>
                    </picture>
                    <div className="image-card-text-4">
                      <h4>Successful projects run with Telangana Govt (Pop. 35 million), Leading Insurance company, and other Corporates</h4>
                    </div>
                  </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xs-12 nomral-button-container">
                    <TelegramButton isNormalButton ={true} isTeleButton ={false} /> 
                  </div>
                </div>
              </div>                           
            </div>*/}


            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12 col-md-6">
                <h4 className="image-card-sub-header">NHCT is backed by NanoHealth</h4>
                <p className="image-card-para">NanoHealth leverages a unique combination of community health workers called “Health Coaches” and a proprietary technology platform to facilitate early diagnosis and continuous management of chronic NCDs such as Diabetes and Hypertension.</p>
                
                <div className="hidden-xs">
                  <div className="">
                    <div className="col-sm-12 col-md-6 nomral-button-container">
                      <TelegramButton isNormalButton ={true} isTeleButton ={false} /> 
                    </div>
                  </div>
                </div> 
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6">
                <div className="row">
                  
                    <div className="image-card-container">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <img className="image-card-image image-card-image-1" src={Image1} alt="image1"/>
                          <div className="image-card-text-1 image-card-desc">
                            <h4>HULT prize winners 2014</h4>
                            <p>Only team from India to win it.</p>
                            <a href="https://www.youtube.com/watch?v=8K1mQs1NYok"><img width="46px" src={Play}/> Watch the video</a>
                          </div>
                        </div>
                    </div>
                    <div className="image-card-container">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' } />
                            <source srcset={ Image2 + ' 1x' + ',' + Image22x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={Image2} alt="image2"/>
                          </picture>
                          
                          <div className="image-card-text-2 image-card-desc">
                            <h4>Raised $1 million</h4>
                            <p>From HULT Prize in 2014.</p>
                          </div>
                        </div>
                    </div>
                    <div className="image-card-container">
                        <div className="col-xs-12 col-sm-6 col-md-6">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' } />
                            <source srcset={ Image3 + ' 1x' + ',' + Image32x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={Image3} alt="image3"/>
                          </picture>
                          <div className="image-card-text-3 image-card-desc">
                            <h4>Already touched 75,000 lives</h4>
                            <p>and growing.</p>
                          </div>
                        </div>
                    </div>
                    <div className="image-card-container">
                      <div className="col-xs-12 col-sm-6 col-md-6">
                        <picture>
                          <source media="(max-width: 767px)" srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' } />
                          <source srcset={ Image4 + ' 1x' + ',' + Image42x + ' 2x' }  />
                          <img width="100%" className="image-card-image" src={Image4} alt="image1"/>
                        </picture>
                        <div className="image-card-text-4 image-card-desc">
                          <h4>Successful projects run with Telangana Govt (Pop. 35 million), Leading Insurance company, and other Corporates</h4>
                        </div>
                      </div>
                    </div>
                  
                </div>
              </div>
              <div className="container visible-xs">
                <div className="row">
                  <div className="col-xs-12 nomral-button-container">
                    <TelegramButton isNormalButton ={true} isTeleButton ={false} /> 
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

export default ImageCard;
