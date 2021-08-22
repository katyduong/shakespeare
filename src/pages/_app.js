/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

function App({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Component {...pageProps} />
    </React.StrictMode>
  );
}

export default App;
