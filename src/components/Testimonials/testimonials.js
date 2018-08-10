import React, { Component } from 'react';
import './testimonials.css';
import road_map from '../../assets/images/road_map.png';
import road_map_mobile from '../../assets/images/road_map_mobile.png';
import Slider from 'react-slick';


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e5f2f7" }}
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
      style={{ ...style, display: "block", background: "#e5f2f7" }}
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
                          I am a 31-year old entrepreneur. Having a startup meant working long without counting hours. I immersed into an extremely hectic lifestyle which eventually had a toll on my health. My genetic disposition to diabetes and cholesterol worsened my health. That's when I came across NanoHealth - I was screened to be at high-risk for cholesterol. Thankfully, the screening was a wakeup call for me! I signed up for NanoSafe plan. I take video consultation with NanoHealth doctor and my health coach visits me regularly. As a result, my cholesterol and diabetes have come under control. I must say, NanoHealth is the perfect partner to keep me healthy- efficiently and worry-free!
                      </p>
                      <div className="name">
                          <label>Ramasiva</label>, IT
                      </div>
                  </div>
                  <div className="profile-pic">
                      <img alt='' src="" />
                  </div>
                </div>
                <div>
                  <h3>2</h3>
                </div>
                <div>
                  <h3>3</h3>
                </div>
                <div>
                  <h3>4</h3>
                </div>
                <div>
                  <h3>5</h3>
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
