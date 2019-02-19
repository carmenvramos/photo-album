import React from 'react';
import PropTypes from 'prop-types';
// import tree1 from '../assets/tree1.jpg';
// import tree2 from '../assets/tree2.jpg';


function Dogs({ dogs }) {
      const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
          return<li key={name}>{name}</li>
          });
          return (
            <ul>
              {listOfDogs}
            </ul>
    );

    Dogs.propTypes = {
      dogs: PropTypes.array.isRequired
    };
  }

export default Dogs;