import React, { Component } from 'react';
import Sidebar from "./components/home/Sidebar"
import Landing from './components/home/Landing';
import Competences from './components/compétences/Competences';
import Projets from './components/projets/Projets';
import About from './components/about/About';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Sidebar/>
          <Landing/>
          <Competences/>
          <Projets/>
          <About/>
        </div>
    );
  }
}

export default App;
