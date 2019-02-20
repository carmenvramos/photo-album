import React, { Fragment } from 'react';
import Header from './Header';
import PhotoAlbum from './PhotoAlbum';
import monkey from '../assets/monkey.png';
import orangutan from '../assets/orangutan.png';
import panda from '../assets/panda.png';
import owl from '../assets/owl.png';
import leopard from '../assets/leopard.png';
import fennecfox from '../assets/fennecfox.png';
import tiger from '../assets/tiger.png';
import Footer from './Footer';
import 'normalize.css';

function App() {
  const photos = [monkey, orangutan, panda, owl, leopard, fennecfox, tiger];
  return (
    <Fragment>
      <Header />
      <PhotoAlbum title='Animals With An Attitude' photos={photos} />
      <Footer />
    </Fragment>
  );
}

export default App;
