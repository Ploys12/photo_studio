import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import First from './img/first.jpg'
import Second from './img/third.jpg'
import Third from './img/fourth.jpg'
import Fourth from './img/fiveth.jpg'
import Trust from './img/trust.jpg'
import Our_Job from './Components/Our_Job';
import Feedback from './Components/Feedback';
import first_family from './img/first_family.png'
import second_family from './img/second_family.jpg'
import third_family from './img/third_family.jpg'
import fourth_family from './img/fourth_family.jpg'
import logo from './img/logo.png'





class App extends React.Component{
  render(){
    return (<div className='wrapper'>
      <Header src={logo}/>
      <Our_Job first={First} second={Second} third={Third} fourth={Fourth} alt="photo"/>
      <Feedback src={Trust} first_family={first_family} alt="" second_family={second_family} third_family={third_family}
       fourth_family={fourth_family}/>
      <Footer/>
    </div>)
  }
}
export default App