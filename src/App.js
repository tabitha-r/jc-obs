import React from 'react';
import './App.css';
import { Settings } from './components/settings/Settings';
import { InformationDisplay } from './components/screen/informationContainer';

function App() {
  return (
    <div className="App">
      <InformationDisplay />
      <Settings />
    </div>
  );
}

export default App;
