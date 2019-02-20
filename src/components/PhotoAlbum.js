import React from 'react';
import PropTypes from 'prop-types';
import Photos from './Photos';
import styles from './PhotoAlbum.css';


function PhotoAlbum({ title, photos }) {
  return (
    <section className={styles.album}>
      <h1>{ title }</h1>
      <Photos urls={photos} />
    </section>
  );
}

PhotoAlbum.propTypes = {
  title: PropTypes.string.isRequired,
  photos: PropTypes.array.isRequired
};

export default PhotoAlbum;
  

