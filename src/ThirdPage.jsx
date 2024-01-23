import React, { useState } from 'react';
import FourthPage from './FourthPage';
import Logo from './images/avocado.png';
import Arrow from './images/arrow.png';
import Icon1 from './images/icon-1.png';
import Icon2 from './images/icon-2.png';
import Icon3 from './images/icon-3.png';
import Icon4 from './images/icon-4.png';
import Icon5 from './images/icon-5.png';
import Icon6 from './images/icon-6.png';

const ThirdPage = ({ handleGoBack }) => {
  const [boxStates, setBoxStates] = useState(Array(6).fill(false));
  const [currentPage, setCurrentPage] = useState(3);
  
  const handleBoxClick = (index) => {
    const activeBoxesCount = boxStates.filter((isActive) => isActive).length;

    if (activeBoxesCount < 3 || boxStates[index]) {
      const newBoxStates = [...boxStates];
      newBoxStates[index] = !newBoxStates[index];
      setBoxStates(newBoxStates);
    }
  };
  
  const isButtonActive = boxStates.some((isActive) => isActive);

  const buttonStyle = {
    backgroundColor: isButtonActive ? 'rgba(95, 203, 57)' : 'rgba(95, 203, 57, 0.3)',
  };

  const handleButtonClick = () => {
    if (isButtonActive) {
      setCurrentPage(4);
    }
  };

  const iconImages = [Icon1, Icon2, Icon3, Icon4, Icon5, Icon6];
  const textArray = [
    "I don't rest enough",
    'I have a sweet tooth',
    'I have too much soda',
    'I eat many salty foods',
    'I enjoy midnight snacks',
    'None of the above',
  ];

  return (
    <div className='section'>
      {currentPage === 3 && (
        <>
          <div className="title">
            <img src={Arrow} alt="Arrow Image" className="arrow"  onClick={handleGoBack}/>
            <img src={Logo} alt="Avocado Icon" className="avocado"/>
            <span>Food Mentor</span>
          </div>
          <h1>Destructive Behaviors</h1>
          <p>We all have them! Which are yours?</p>
          <div className='destr_container'>
            {boxStates.map((isActive, index) => (
              <div
                className='destr'
                key={index}
                style={{
                  backgroundColor: isActive ? '#dff5d7' : 'transparent',
                }}
                onClick={() => handleBoxClick(index)}
              >
                <img src={iconImages[index]} alt={`Icon ${index + 1}`} />
                <h4>{textArray[index]}</h4>
              </div>
            ))}
          </div>
          <button className='continue_btn' style={buttonStyle} onClick={handleButtonClick}>
            Continue
          </button>
        </>
      )}
      {currentPage === 4 && <FourthPage  handleGoBack={handleGoBack} />}
    </div>
  );
};

export default ThirdPage;
