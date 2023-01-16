import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import Ball from './components/Ball.js';
import Bat from './components/Bat.js';

import store from './redux/store.js'

function App() {

  return (
    <>
      <Provider store={store}>
        <Bat />
        <Ball />

      </Provider>
    </>
  );
}
export default App;
