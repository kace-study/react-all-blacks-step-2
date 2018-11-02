import React, { Component } from 'react';
import PanelList from './components/PanelList/PanelList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>ALL BLACKS</h1>
          <button>Start</button>
        </header>
        <PanelList />
      </div>
    );
  }
}

export default App;