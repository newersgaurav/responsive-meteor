import React, { Component } from 'react';
import Header from './component/Header/Header'
import Banner from './component/Banner/Banner'
import './scss/mainStyle.css';
import StyleHunter from './component/StyleHunter/StyleHunter';
import LifeStyle from './component/LifeStyle/LifeStyle';
import Celebrity from './component/Celebrity/Celebrity';
import Videos from './component/Videos/Videos';
import './App.css';
import Footer from './component/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <Header/>
        <Banner/>
        <div className="main-body">
          <div className="wrapper">
            <StyleHunter/>
            <LifeStyle/>
            <Celebrity/>
            <Videos/>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
