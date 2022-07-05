// @ts-nocheck

import React from 'react';
import './css/App.css';
import { LanguageProvider } from './containers/Language';
import Navigation from './components/Navigation';
import MainSection from './components/MainSection'

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <Navigation />
        <MainSection />
      </LanguageProvider>
    </div>
  );
}

export default App;
