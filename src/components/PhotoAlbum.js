import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';


function PhotoAlbum({ title, photos }) {
  return (
    <Fragment>
      <h1>{ title }</h1>
      <Photos urls={photos} />
    </Fragment>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
  

