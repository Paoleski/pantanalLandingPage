import React from 'react';
import '../styles/section3.css';
import image1 from '../img/pantanal-comparsion1-1.jpg';
import image2 from '../img/pantanal-comparsion1-2.jpg';
import image3 from '../img/pantanal-comparsion3-1.jpg';
import image4 from '../img/pantanal-comparsion3-2.jpg';

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from 'react-compare-slider';

function Section3() {
  return (
    <div className="section3">
      <div className="section3__container">
        <h2 className="section2__title">Fire and Destruction</h2>
        <div className="section3__sliderContainer">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={image1} alt="one" />}
            itemTwo={<ReactCompareSliderImage src={image2} alt="two" />}
            style={{
              display: 'flex',
              width: '100%',
              height: '70vh',
            }}
          ></ReactCompareSlider>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src={image4} alt="one" />}
            itemTwo={<ReactCompareSliderImage src={image3} alt="two" />}
            style={{
              display: 'flex',
              width: '100%',
              height: '70vh',
            }}
          ></ReactCompareSlider>
        </div>
        <div className="section3__info">
          <h3 style={{ textAlign: 'center' }}>
            The blazes in Brazil, often intentionally set, have scorched a
            record-setting 23% percent of the Pantanal.
          </h3>
          <p style={{marginTop:10}}>
            During the wet season from October to March, most of the Pantanal
            region floods with water that otherwise might overwhelm populations
            downstream. As the Pantanal dries from April to September, it
            provides a much-needed source of water for those same populations.
            But the Pantanal, like much of Brazil, has been mired in drought
            this year, with below-normal rainfall and near-record temperatures
            during the wet season.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
