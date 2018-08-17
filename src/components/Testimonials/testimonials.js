import React, { Component } from 'react';
import './testimonials.css';
import road_map from '../../assets/images/road_map.png';
import road_map_mobile from '../../assets/images/road_map_mobile.png';
import Slider from 'react-slick';
import Praveen from '../../assets/images/Praveen.jpg';
import vijaya_lakshmi from '../../assets/images/vijaya_lakshmi.jpg';
import O_ram from '../../assets/images/O_ram.jpg';
import tejabhiram from '../../assets/images/tejabhiram.jpeg';
import profile_pic_icon_male from '../../assets/images/profile_pic_icon_male.svg';
import profile_pic_icon_female from '../../assets/images/profile_pic_icon_female.svg';
import adam from '../../assets/images/adam.jpg';

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

class Testimonials extends Component {
  render() {

    var settings = {
      dots: true,
      infinite: true,
      speed: 900,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      rtl: false,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };

    return (
      <div className="testimonial-container">
        <div className="container">
          <div className="row">
            <h4 className="testimonial-container-header">Testimonials</h4>
            <div className="col-xs-12">
              
              <Slider {...settings}>
                <div>
                  <div className="testimonial">
                      <p className="content">
                        The way in which verification takes place in the NHCT ecosystem, makes the data highly reliable. I am willing to use this data in my future research work and pay a mutually agreeable royalty on commerciable patents to the NHCT ecosystem
                      </p>
                      <div className="name">
                        <label>Tejabhiram Yadavalli</label>, Postdoc in Virology, University of Chicago
                      </div>
                  </div>
                  <div className="profile-pic">
                    <img alt='' src={tejabhiram} />
                  </div>
                </div>
                <div>
                  <div className="testimonial">
                      <p className="content">
                        I have been with NanoHealth for almost a year. Earlier I used to spend almost a whole day visiting the lab and then going to the doctor for my monthly tests. Taking an appointment from the lab and doctor and then spending hours in the traffic to get there used to be a stressful event for me and my family. Now, everything is done in the comfort of my home.
                      </p>
                      <div className="name">
                        <label>Vijaylakshmi</label>, School Principal
                      </div>
                  </div>
                  <div className="profile-pic">
                    <img alt='' src={vijaya_lakshmi} />
                  </div>
                </div>
                <div>
                  <div className="testimonial">
                      <p className="content">
                        I was aware of my condition before NanoHealth reached me. I joined NanoHealth for the convenience of monthly tests at my doorstep but what I received from them was so much more. Their Saathi keeps my schedule in mind and comes early in the morning. All her guidance with regards to my diet has helped me manage my disease better. Earlier I used to keep forgetting to take my medicines, but now with NanoHealth's home delivery of medications, I don't have to be worried about that anymore.
                      </p>
                      <div className="name">
                        <label>O Ram</label>, Entrepreneur
                      </div>
                  </div>
                  <div className="profile-pic">
                    <img alt='' src={O_ram} />
                  </div>
                </div>
                <div>
                  <div className="testimonial">
                      <p className="content">
                        This platform uses third party unbiased reviews for their healthcare providers and makes up-front out of pocket costs visible to the consumer. It is an interesting proposition for sure.
                      </p>
                      <div className="name">
                        <label>Yvette Simon</label>, Director at UX Bold Insight human factors research company
                      </div>
                  </div>
                  <div className="profile-pic">
                    <img alt='' src={profile_pic_icon_female} />
                  </div>
                </div>
                <div>
                  <div className="testimonial">
                      <p className="content">
                        We know from research in behavioral economics that it is important to provide people with short-term incentives in order to help them achieve long-term goals, as people have a tendency to discount rewards that are far in the future. The token architecture utilized by the NHCT Ecosystem takes this into consideration. Personally-verified and community-verified activities yield immediate incentives in the form of Wawa and Warma, while substantial improvements in health, which likely take time to achieve, are rewarded with NHCT. Thus, the NHCT Ecosystem motivates health through a combination of both short-term and long-term rewards.
                      </p>
                      <div className="name">
                        <label>Adam Powell</label>, President of Payer+Provider Syndicate Measuring & Improving the Quality of Care
                      </div>
                  </div>
                  <div className="profile-pic">
                    <img alt='' src={adam} />
                  </div>
                </div>
                
              </Slider>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Testimonials;
