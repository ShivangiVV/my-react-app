import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
      }
    )
    setTimeout(()=>{
      setAlert(null);
    },1000)
   
  }

 const[mode,setMode]= useState("light")// whether dark is enabled or not.
 let toggleMode1=()=>{
  if(mode==="light"){
    setMode("dark")
    document.body.style.background="#042743"
    showAlert("Dark mode has been enabled","success")
    document.title="TextUtils- Dark Mode"
    // setInterval(()=>{
    //   document.title="TextUtils- is amazing Mode";

    // },2000);
    // setInterval(()=>{
    //   document.title="Install TextUtils now";

    // },1500);
  }
  else{
    setMode("light")
    document.body.style.background="#fff"
    showAlert("Light mode has been enabled","success")
    document.title="TextUtils- Light Mode"
    
  }
 }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode2={toggleMode1}/>
      <Alert alert={alert}/>
      <div className='cotainer mx-5'>
         {/* <TextForm heading="Enter your text here" mode={mode} showAlert={showAlert}/> */}
        <About/> 
<h1>gn</h1>
      </div>
    </>
  );
}

export default App;
