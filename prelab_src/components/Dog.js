import React from 'react';
import PropTypes from 'prop-types';

function Dog({ name }) {
  return (
    <>
     <p>This is my dog {name} </p>
     </>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired
};

export default Dog;
