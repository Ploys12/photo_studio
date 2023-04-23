import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';


import logo from './img/logo.png'




class App extends React.Component{
  render(){
    return (<div className='wrapper'>
      <Header src={logo}/>
      
      
      <Footer/>
    </div>)
  }
}
export default App