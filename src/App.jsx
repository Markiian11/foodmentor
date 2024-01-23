import React, { useState } from 'react';
import FirstPage from './FirstPage';
import SecondPage from './SecondPage';
import ThirdPage from './ThirdPage';
import FourthPage from './FourthPage';

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockClick = (blockNumber) => {
    setSelectedBlock(blockNumber);
    setCurrentPage(2); 
  };

  const handleGoBack = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const pages = [
    <FirstPage handleBlockClick={handleBlockClick} />,
    <SecondPage selectedBlock={selectedBlock} handleGoBack={handleGoBack} />,
    <ThirdPage handleGoBack={handleGoBack} />,
    <FourthPage handleGoBack={handleGoBack} />,
  ];

  return <div>{pages[currentPage - 1]}</div>;
};

export default App;
