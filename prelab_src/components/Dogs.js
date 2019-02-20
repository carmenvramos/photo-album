import React from 'react';
import PropTypes from 'prop-types';
import Dog from './Dog';
import tree1 from '../assets/tree1.jpg';
import tree2 from '../assets/tree2.jpg';


function Dogs({ dogs }) {
  const listOfDogs = dogs.map(name => {
    // const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
    // li.textContent = name;
    return <li key={name}><Dog name={name} /></li>;
  });
  return (
    <ul>
      <img src={tree1} />
      <img src={tree2} />
      {listOfDogs}
    </ul>
  );
}
Dogs.propTypes = {
  dogs: PropTypes.array.isRequired
};


export default Dogs;
