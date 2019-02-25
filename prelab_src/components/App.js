// *** 1st React App ***
// import React from 'react';

// function App() {
//   return (
//     <h1>I am a Title</h1>
//   );
// }

// export default App;

// *** 2nd React App ***
// import React from 'react';

// function App() {
//   const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
//     return<li key={name}>{name}</li>
//   });
//   return (
//     <ul>
//       {listOfDogs}
//     </ul>
//   );
// }

// export default App;

// *** 3rd React App ***
// import React, { Fragment } from 'react';

// function App() {
//   const listOfDogs = ['rover', 'spot', 'bingo'].map(name => {
//   return<li key={name}>{name}</li>
//   });
//   return (
//     <Fragment>
//     <header>
//       <h1>My Site</h1>
//     </header>
//     <ul>
//       {listOfDogs}
//     </ul>
//     <footer>
//       <h2>Carmen</h2>
//     </footer>
//     </Fragment>
//   );
// }

// *** Extract components to each file ***

import React, { Fragment } from 'react';
import Header from './Header';
import Dogs from './Dogs';
import Footer from './Footer';
import 'normalize.css';
  
function App() {
  const dogNames = ['rover', 'spot', 'bingo'];

  return (
    <Fragment>
      <Header />
      <Dogs dogs={dogNames} />
      <Footer />
    </Fragment>
  );
}

export default App;
