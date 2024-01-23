import React, { useState } from 'react';
import ThirdPage from './ThirdPage';
import Logo from './images/avocado.png';
import Arrow from './images/arrow.png';

const SecondPage = ({ selectedBlock, handleGoBack }) => {
  const [measurementType, setMeasurementType] = useState(null);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [buttonColor, setButtonColor] = useState('rgba(95, 203, 57, 0.3)');
  const [heightLabel, setHeightLabel] = useState('Height(ft)');
  const [weightLabel, setWeightLabel] = useState('Current Weight(ft)');
  const [moveToThirdPage, setMoveToThirdPage] = useState(false);
  const [currentColor, setCurrentColor] = useState('rgba(95, 203, 57, 0.20)');

  const handleButtonClick = () => {
    const newColor = currentColor === 'rgba(95, 203, 57, 0.20)' ? 'white' : 'rgba(95, 203, 57, 0.20)';
    setCurrentColor(newColor);
  };

  const handleMeasurementChange = (type) => {
    setMeasurementType(type);

    if (type === 'imperial') {
      setHeightLabel('Height(ft)');
      setWeightLabel('Current Weight(ft)');
    } else {
      setHeightLabel('Height(kg)');
      setWeightLabel('Current Weight(kg)');
    }
  };

  const handleInputChange = (inputType, value) => {
    const regex = /^[0-9]{1,3}$/;
    if (value === '' || regex.test(value)) {
      if (inputType === 'height') {
        setHeight(value);
      } else if (inputType === 'weight') {
        setWeight(value);
      }

      setButtonColor(height.trim() !== '' && weight.trim() !== '' ? 'rgba(95, 203, 57)' : 'rgba(95, 203, 57, 0.3)');
    }
  };

  const handleNextButtonClick = () => {
    if (height.trim() !== '' && weight.trim() !== '') {
      setMoveToThirdPage(true);
    } else {
      console.log('Please fill in both height and weight');
    }
  };

  return (
    <div className='section'>
      {moveToThirdPage ? (
        <ThirdPage handleGoBack={handleGoBack}/>
      ) : (
        <div>
          <div className="title">
            <img src={Arrow} alt="Arrow Image" className="arrow" onClick={handleGoBack}/>
            <img src={Logo} alt="Avocado Icon" className="avocado"/>
            <span>Food Mentor</span>
          </div>
          <h1>Measure Yourself</h1>
          <p>What are you height and body weight?</p>
          <div className='measure_btns'>
            <button style={{ 
              backgroundColor: currentColor === 'rgba(95, 203, 57, 0.20)' ? 'rgba(95, 203, 57, 0.20)' : 'white' }} 
              className='measure_btn' 
              onClick={() => {
              handleButtonClick();
              handleMeasurementChange('imperial');
            }}>Imperial</button>
            <button style={{ 
              backgroundColor: currentColor === 'rgba(95, 203, 57, 0.20)' ? 'white' : 'rgba(95, 203, 57, 0.20)' }} 
              className='measure_btn-2' 
              onClick={() => {
              handleButtonClick();
              handleMeasurementChange('metric');
            }}>Metric</button>
          </div>
            <div>
              <input
                type="text"
                placeholder={heightLabel}
                value={height}
                onChange={(e) => handleInputChange('height', e.target.value)}
              />
              <input
                type="text"
                placeholder={weightLabel}
                value={weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
              />
              <button className='continue_btn' style={{ backgroundColor: buttonColor }} onClick={handleNextButtonClick}>
                Continue
              </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default SecondPage;
