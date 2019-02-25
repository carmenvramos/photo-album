import React from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo';
// import './Photos.css';

function Photos({ urls }) {
  const listOfUrls = urls.map(url => {
    return (
      <li key={url}>
        <Photo url={url}/>
      </li>
    );
  });

  return (
    <ul>
      {listOfUrls}
    </ul>
  );
}

Photos.propTypes = {
  urls: PropTypes.array.isRequired
};

export default Photos;
