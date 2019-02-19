import React, { Fragment } from 'react';
import Header from './Header';
// import PhotoAlbum from './PhotoAlbum';
import Footer from './Footer';
import 'normalize.css';

function App() {
  // const animalNames = ['monkey', 'orangutan'];
  return (
    <Fragment>
      <Header />
      {/* <PhotoAlbum animals={animalNames} /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
