import React from 'react';
import PropTypes from 'prop-types';
import animal1 from '../assets/animal1.jpg';
import animal2 from '../assets/animal2.jpg';

function Animals({ animals }) {
  const listOfAnimals = animals.map(name => {
    // const li = document.createElement('li');
    // li.textContent = name;
    return <li key={name}>{name}</li>;
  });
  return (
    <ul>
      <img src={animal1} />
      <img src={animal2} />
      {listOfAnimals}
    </ul>
  );
}

Animals.propTypes = {
  animals: PropTypes.array.isRequired
};

