import React from 'react';
import './assets/fonts/Source_Sans_Pro/SourceSansPro-Regular.ttf';

import './App.css';

import { Router } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import ScrollToTop from './helpers/ScrollToTop';
import { Navbar } from './components/general/Navbar';
import { Footer } from './components/general/Footer';

import history from './services/history';
import Routes from './routes';

function App() {
  return (
    <GlobalProvider>
      <Router history={history}>
        <ScrollToTop>
          <Navbar />
            <Routes />
          <Footer />
        </ScrollToTop>
      </Router>
    </GlobalProvider>
  );
}

export default App;
