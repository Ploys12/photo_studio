import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import First from './img/first.jpg'
import Second from './img/third.jpg'
import Third from './img/fourth.jpg'
import Fourth from './img/fiveth.jpg'
import Our_Job from './Components/Our_Job';
import Feedback from './Components/Feedback';
import logo from './img/logo.png'





class App extends React.Component{
  render(){
    return (<div className='wrapper'>
      <Header src={logo}/>
      <Our_Job first={First} second={Second} third={Third} fourth={Fourth} alt="photo"/>
      <Feedback/>
      <Footer/>
    </div>)
  }
}
export default App