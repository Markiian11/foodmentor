import React, { useState } from 'react';
import Congratulation from './CongratulationsPage'; 
import Logo from './images/avocado.png';
import Arrow from './images/arrow.png';
import Girl from './images/girl.png';

const FourthPage = ({ handleGoBack }) => {
  const [boxStates, setBoxStates] = useState(Array(4).fill(false));
  const [redirectToCongratulations, setRedirectToCongratulations] = useState(false);

  const handleBoxClick = (index) => {
    const newBoxStates = Array(4).fill(false);
    newBoxStates[index] = true;
    setBoxStates(newBoxStates);
    setRedirectToCongratulations(true);
  };

  const textArray = ['Hardly at all', 'Fitness 1-2 times a week', 'Fitness 3-5 times a week', 'Fitness 5-7 times a week'];

  if (redirectToCongratulations) {
    return <Congratulation />;
  }

  return (
    <div className='section'>
      <div className="title">
        <img src={Arrow} alt="Arrow Image" className="arrow" onClick={handleGoBack}/>
        <img src={Logo} alt="Avocado Icon" className="avocado"/>
        <span>Food Mentor</span>
      </div>
      <h1>Physical exercise</h1>
      <p>Physical exercise means a lot for a woman who wants to lose kilos and works at the office</p>
      <h2>How active are you during the day?</h2>
      <div className="girl">
        <img src={Girl} alt="Girl Image"/>
      <div>
      {boxStates.map((isActive, index) => (
        <div
          className='physical_box'
          key={index}
          onClick={() => handleBoxClick(index)}
        >
          <h3>{textArray[index]}</h3>
        </div>
      ))}
      </div>
      </div>
    </div>
  );
};

export default FourthPage;
