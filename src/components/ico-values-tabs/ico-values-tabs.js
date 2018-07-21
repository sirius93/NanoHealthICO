import React, { Component } from 'react';
import { Tabs , Tab } from 'react-bootstrap';
import './ico-values-tabs.css';
import userValue from '../../assets/images/user-value.png';
import userValue2x from '../../assets/images/user-value@2x.png';
import medicalLogo from '../../assets/images/medical-folder.png';
import medicalLogo2x from '../../assets/images/medical-folder@2x.png';
import symptomLogo from '../../assets/images/symptom-list.png';
import symptomLogo2x from '../../assets/images/symptom-list@2x.png';
import rewardsLogo from '../../assets/images/rewards.png';
import rewardsLogo2x from '../../assets/images/rewards@2x.png';
import serviceProvider from '../../assets/images/service-provider.png';
import serviceProvider2x from '../../assets/images/service-provider@2x.png';
import globeLogo from '../../assets/images/globe.png';
import globeLogo2x from '../../assets/images/globe@2x.png';
import patientsLogo from '../../assets/images/patients.png';
import patientsLogo2x from '../../assets/images/patients@2x.png';
import insurance from '../../assets/images/ic.png';
import insurance2x from '../../assets/images/ic@2x.png';
import frequencyLogo from '../../assets/images/frequency.png';
import frequencyLogo2x from '../../assets/images/frequency@2x.png';
import healthyLogo from '../../assets/images/healthy.png';
import healthyLogo2x from '../../assets/images/healthy@2x.png';
import medicalResearcher from '../../assets/images/medical-researcher.png';
import medicalResearcher2x from '../../assets/images/medical-researcher@2x.png';
import microscopeLogo from '../../assets/images/microscope.png';
import microscopeLogo2x from '../../assets/images/microscope@2x.png';
class IcoValuesTabs extends Component {
  render() {
    return (
      <div className="ico-values-tabs" id="nhct-ecosystem">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
            <h4 class="our-partners-heading">Value the NHCT ecosystem provides to</h4>
            <div className="mobile-only-container">
            <div className="values-content-container">
                <h2 className="value-text-heading user">
                    A User
                  </h2>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <div className="values-image-container">
                  <picture>
                    <source media="(max-width: 767px)" srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' } />
                    <source media="(max-width: 1025px)" srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' } />
                    <source srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' }  />
                    <img width="100%" className="image-card-image" src={userValue} alt="image2"/>
                  </picture>
                </div>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8">
                <div className="values-text-container user">
                  <div className="col-xs-12">
                    <div className="col-xs-12 para">
                      <span>
                        <picture>
                          <source media="(max-width: 767px)" srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' } />
                          <source srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' }  />
                          <img width="10%" className="image-card-image" src={medicalLogo} alt="image2"/>
                        </picture>
                      </span>
                      <p className="value-text-para">Safely and securely stores medical data</p>
                    </div>
                    <div className="col-xs-12 para">
                      <span>
                        <picture>
                          <source media="(max-width: 767px)" srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' } />
                          <source srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' }  />
                          <img width="10%" className="image-card-image" src={symptomLogo} alt="image2"/>
                        </picture>
                      </span>
                      <p className="value-text-para">Gets personalized health and wellness services</p>
                    </div>
                    <div className="col-xs-12 para">
                      <span>
                        <picture>
                          <source media="(max-width: 767px)" srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' } />
                          <source media="(max-width: 1025px)" srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' } />
                          <source srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' }  />
                          <img width="10%" className="image-card-image" src={rewardsLogo} alt="image2"/>
                        </picture>
                      </span>
                      <p className="value-text-para">Rewarded for excercising and getting medical checkups regularly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="values-content-container">
                    <h2 className="value-text-heading service-provider">
                    A Medical or Wellness Service Provider
                    </h2>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="values-image-container">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' } />
                      <source srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' }  />
                      <img width="100%" className="image-card-image" src={serviceProvider} alt="image2"/>
                    </picture>
                  </div>
                </div>
              <div className="col-xs-12 col-sm-8 col-md-8">
                  <div className="values-text-container service-provider">
                    <div className="col-xs-12">
                      <div className="col-xs-12 para">
                        <span>
                          <picture>
                            <source media="(max-width: 767px)" srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' } />
                            <source srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' }  />
                            <img width="10%" className="image-card-image" src={globeLogo} alt="image2"/>
                          </picture>
                        </span>
                        <p className="value-text-para">Access to a global audience (as everyone is using the same currency)</p>
                      </div>
                      <div className="col-xs-12 para">
                        <span>
                          <picture>
                            <source media="(max-width: 767px)" srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' } />
                            <source srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' }  />
                            <img width="10%" className="image-card-image" src={patientsLogo} alt="image2"/>
                          </picture>
                        </span>
                        <p className="value-text-para">Better engagement with users/patients</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="values-content-container">
                    <h2 className="value-text-heading insurance-company">
                      An Insurance Company
                    </h2>
                <div className="col-xs-12 col-sm-4 col-md-4">
                  <div className="values-image-container">
                    <picture>
                      <source media="(max-width: 767px)" srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' } />
                      <source media="(max-width: 1025px)" srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' } />
                      <source srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' }  />
                      <img width="100%" className="image-card-image" src={insurance} alt="image2"/>
                    </picture>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-8 col-md-8">
                  <div className="values-text-container insurance-company">
                    <div className="col-xs-12">
                      <div className="col-xs-12 para">
                        <span>
                          <picture>
                            <source media="(max-width: 767px)" srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' } />
                            <source srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' }  />
                            <img width="10%" className="image-card-image" src={frequencyLogo} alt="image2"/>
                          </picture>
                        </span>
                        <p className="value-text-para">Process claims in seconds</p>
                      </div>
                      <div className="col-xs-12 para">
                        <span>
                          <picture>
                            <source media="(max-width: 767px)" srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' } />
                            <source srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' }  />
                            <img width="10%" className="image-card-image" src={healthyLogo} alt="image2"/>
                          </picture>
                        </span>
                        <p className="value-text-para">Lesser claims as people are more healthy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="values-content-container">
                       <h2 className="value-text-heading medical-researchers">
                        A Medical Researcher
                        </h2>
                <div className="col-xs-12 col-sm-4 col-md-4">
                    <div className="values-image-container">
                      <picture>
                        <source media="(max-width: 767px)" srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' } />
                        <source media="(max-width: 1025px)" srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' } />
                        <source srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' }  />
                        <img width="100%" className="image-card-image" src={medicalResearcher} alt="image2"/>
                      </picture>
                    </div>
                  </div>
                <div className="col-xs-12 col-sm-8 col-md-8">
                    <div className="values-text-container medical-researcher">
                      <div className="col-xs-12">
                        <div className="col-xs-12 para">
                          <span>
                            <picture>
                              <source media="(max-width: 767px)" srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' } />
                              <source media="(max-width: 1025px)" srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' } />
                              <source srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' }  />
                              <img width="10%" className="image-card-image" src={microscopeLogo} alt="image2"/>
                            </picture>
                          </span>
                          <p className="value-text-para"><span>High quality, verified medical and wellness data at scale</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
              <Tabs defaultActiveKey={1} id="ico-values-tabs" className="hidden-xs">
                <Tab tabClassName="user" eventKey={1} title="User">
                  <div className="col-xs-12">
                    <div className="values-content-container">
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="values-image-container">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' } />
                            <source srcset={ userValue + ' 1x' + ',' + userValue2x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={userValue} alt="image2"/>
                          </picture>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-8 col-md-8">
                        <div className="values-text-container user">
                          <div className="col-xs-12">
                            <h2 className="value-text-heading">
                              A User
                            </h2>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' } />
                                  <source srcset={ medicalLogo + ' 1x' + ',' + medicalLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={medicalLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Safely and securely stores medical data</p>
                            </div>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' } />
                                  <source srcset={ symptomLogo + ' 1x' + ',' + symptomLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={symptomLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Gets personalized health and wellness services</p>
                            </div>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' } />
                                  <source srcset={ rewardsLogo + ' 1x' + ',' + rewardsLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={rewardsLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Rewarded for excercising and getting medical checkups regularly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab tabClassName="service-provider" eventKey={2} title="Service Provider">
                <div className="col-xs-12">
                    <div className="values-content-container">
                    <div className="col-xs-12 col-sm-8 col-md-8">
                        <div className="values-text-container service-provider">
                          <div className="col-xs-12">
                            <h2 className="value-text-heading">
                            A Medical or Wellness Service Provider
                            </h2>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' } />
                                  <source srcset={ globeLogo + ' 1x' + ',' + globeLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={globeLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Access to a global audience (as everyone is using the same currency)</p>
                            </div>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' } />
                                  <source srcset={ patientsLogo + ' 1x' + ',' + patientsLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={patientsLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Better engagement with users/patients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="values-image-container">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' } />
                            <source srcset={ serviceProvider + ' 1x' + ',' + serviceProvider2x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={serviceProvider} alt="image2"/>
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab tabClassName="insurance-company" eventKey={3} title="Insurance Company">
                <div className="col-xs-12">
                    <div className="values-content-container">
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="values-image-container">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' } />
                            <source srcset={ insurance + ' 1x' + ',' + insurance2x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={insurance} alt="image2"/>
                          </picture>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-8 col-md-8">
                        <div className="values-text-container insurance-company">
                          <div className="col-xs-12">
                            <h2 className="value-text-heading">
                            An Insurance Company
                            </h2>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' } />
                                  <source srcset={ frequencyLogo + ' 1x' + ',' + frequencyLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={frequencyLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Process claims in seconds</p>
                            </div>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' } />
                                  <source srcset={ healthyLogo + ' 1x' + ',' + healthyLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={healthyLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para">Lesser claims as people are more healthy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab tabClassName="medical-researchers" eventKey={4} title="Medical Researchers">
                <div className="col-xs-12">
                    <div className="values-content-container">
                    <div className="col-xs-12 col-sm-8 col-md-8">
                        <div className="values-text-container medical-researcher">
                          <div className="col-xs-12">
                            <h2 className="value-text-heading">
                            A Medical Researcher
                            </h2>
                            <div className="col-xs-12 para">
                              <span>
                                <picture>
                                  <source media="(max-width: 767px)" srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' } />
                                  <source media="(max-width: 1025px)" srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' } />
                                  <source srcset={ microscopeLogo + ' 1x' + ',' + microscopeLogo2x + ' 2x' }  />
                                  <img width="10%" className="image-card-image" src={microscopeLogo} alt="image2"/>
                                </picture>
                              </span>
                              <p className="value-text-para"><span>High quality, verified medical and wellness data at scale</span></p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-12 col-sm-4 col-md-4">
                        <div className="values-image-container">
                          <picture>
                            <source media="(max-width: 767px)" srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' } />
                            <source media="(max-width: 1025px)" srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' } />
                            <source srcset={ medicalResearcher + ' 1x' + ',' + medicalResearcher2x + ' 2x' }  />
                            <img width="100%" className="image-card-image" src={medicalResearcher} alt="image2"/>
                          </picture>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>    
      </div>
    );
  }
}

export default IcoValuesTabs;
