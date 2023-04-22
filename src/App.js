import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import logo from './img/logo.png'

class App extends React.Component{
  render(){
    return (<div>
      <Header src={logo}></Header>
      <Footer></Footer>
    </div>)
  }
}
export default App