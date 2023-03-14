import React ,{useState} from 'react'
import './App.css';
import Login from './component/login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './component/register/Register'
import Home from './component/home/Home'

import {
  BrowserRouter as Router, Routes, Route

} from "react-router-dom";

function App() {
  
  const [user ,updateuser] = useState({
  
  });
  console.log(user) ;
  let Tag ;
  if(user&&user._id){
    // console.log("HOME");
    Tag = Home ;
    // updateuser({}) ;
  }else{
    Tag = Login
  }
  
  
  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element={< Tag/>} />
          <Route path = "/login" element = { <Login updateuser={updateuser} />}/>
          
          <Route path = "/register" element = { <Register/>}/>

        </Routes>
      </Router>


    </>




  );
}

export default App;
