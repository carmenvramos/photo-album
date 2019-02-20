import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import monkey from '../assets/monkey.png';
import orangutan from '../assets/orangutan.png';
import Footer from './Footer';
import 'normalize.css';

function App() {
  const photos = [monkey, orangutan];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum title='Animals With An Attitude' photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
