import React from 'react';
import '../styles/Letters.scss';

function SolutionLetters({ renderSolutionLetters }) {
  return (
    <div className='solution'>
      <h2 className='title'>Solución:</h2>
      <ul className='letters'>{renderSolutionLetters()}</ul>
    </div>
  );
}

export default SolutionLetters;
