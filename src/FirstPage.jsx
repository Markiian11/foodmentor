import React from 'react';
import Logo from './images/avocado.png';
import Arrow from './images/arrow.png';
import Goal1 from './images/goal-1.png';
import Goal2 from './images/goal-2.png';
import Goal3 from './images/goal-3.png';
import Goal4 from './images/goal-4.png';

const FirstPage = ({ handleBlockClick }) => {
  const handleClick = (goalId) => {
    handleBlockClick(goalId);
  };

  return (
    <div className='section'>
      <div className="title">
        <img src={Arrow} alt="Arrow Image" className="arrow"/>
        <img src={Logo} alt="Avocado Icon" className="avocado"/>
        <span>Food Mentor</span>
      </div>
      <h1>The Goal</h1>
      <p>Focus on the health benefits you need. Balanced nutrition will let you achieve them </p>
      <h2>What are your goals?</h2>
      <div className="goal_container">
        <div className="goal_item" onClick={() => handleClick(1)}>
          <span className='goal_text'>Lose Weight</span>
          <img src={Goal1} alt="Goal Image" className='goal_image'/>
        </div>
        <div className="goal_item" onClick={() => handleClick(2)}>
          <span className='goal_text'>Gain Muscle</span>
          <img src={Goal2} alt="Goal Image" className='goal_image'/>
        </div>
        <div className="goal_item" onClick={() => handleClick(3)}>
          <span className='goal_text-2'>Develop healthy habits</span>
          <img src={Goal3} alt="Goal Image" className='goal_image'/>
        </div>
        <div className="goal_item" onClick={() => handleClick(4)}>
          <span className='goal_text-2'>Develop healthy habits</span>
          <img src={Goal4} alt="Goal Image" className='goal_image'/>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
