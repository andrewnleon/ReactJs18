import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/App.css';
import App from './App';
import SSRProvider from 'react-bootstrap/SSRProvider';
import {Helmet} from "react-helmet";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SSRProvider>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Andrew Leonberger | Portfolio</title>
          <link rel="canonical" href="http://www.andrewnl.com" />
          <meta charset="utf-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=0, shrink-to-fit=no" />
          <meta name="author" content="Andrew Nelson Leonberger" />
          <meta name="description" content="" />
          {/* <meta name="robots" content="index, follow" /> */}
          <meta name="copyright" content="" />
      </Helmet>
      <App />
    </SSRProvider>
  </React.StrictMode>
);