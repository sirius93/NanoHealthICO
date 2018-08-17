import React, { Component } from 'react';
import './our-partners.css';
import Slider from 'react-slick';
import empowerLabs from '../../assets/images/empower-labs.png';
import empowerLabsLogo from '../../assets/images/Secondary-Logo-vector.png';
import empowerLabsLogo2x from '../../assets/images/Secondary-Logo-vector@2x.png';
import ideaLabs from '../../assets/images/idea-labs.png';
import ideaLabsLogo from '../../assets/images/idea-clinics.png';
import ideaLabsLogo2x from '../../assets/images/idea-clinics@2x.png';
import hccLogo from '../../assets/images/Hcc_logo.png';
import fundamatics from '../../assets/images/fundamatics.svg';
import businessline from '../../assets/images/businessline.png';
import financialexpress from '../../assets/images/financialexpress.svg';
import pharmabiz from '../../assets/images/pharmabiz.jpg';
import telangana_today from '../../assets/images/telangana-today.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#539afd",marginRight: "20px" }}
      onClick={onClick}
    >
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#539afd",marginLeft: "20px" }}
      onClick={onClick}
    >
    </div>
  );
}
class OurTeam extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      rtl: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div>
       <div className="press-coverage-container">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12">
                <h6 className="press-coverage-heading">Press Coverage </h6>
                  <div className="press-coverage-links">
                    {/*<span className="press-coverage-link">
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
                    </span>*/}
                    {/*<span className="press-coverage-link">
                      <a href="https://telanganatoday.com/nanocare-to-focus-on-preventive-care" target="_blank">
                        <img width="20%" src={telangana_today} alt="twitter" />
                      </a>
                    </span>*/}
                    <Slider {...settings}>
                      <div>
                        <span className="press-coverage-link">
                          <a href="http://www.fundamatics.net/the-nanohealth-story-a-new-way-to-look-at-your-health/" target="_blank">
                              <img width="60%" src={fundamatics} alt="telegram" />
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="press-coverage-link">
                          <a href="https://www.thehindubusinessline.com/news/national/nanohealth-gvk-bio-to-take-healthcare-to-slum-dwellers/article23111584.ece" target="_blank">
                              <img width="60%" src={businessline} alt="facebook" />
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="press-coverage-link">
                          <a href="https://www.financialexpress.com/industry/nanohealths-doc-in-a-bag-breaks-economic-barriers/108240/" target="_blank">
                            <img width="60%" src={financialexpress} alt="twitter" />
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="press-coverage-link">
                          <a href="http://www.pharmabiz.com/NewsDetails.aspx?aid=84336&sid=1" target="_blank">
                            <img width="60%" src={pharmabiz} alt="twitter" />
                          </a>
                        </span>
                      </div>
                      <div>
                        <span className="press-coverage-link">
                          <a href="https://telanganatoday.com/nanocare-to-focus-on-preventive-care" target="_blank">
                            <img width="60%" src={telangana_today} alt="twitter" />
                          </a>
                        </span>
                      </div>
                      
                    </Slider>

                  </div>
              </div>
            </div>
          </div>
        </div>   
      <div className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <h4 className="our-partners-heading">Our Partners</h4>
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
    </div>  
    );
  }
}

export default OurTeam;
