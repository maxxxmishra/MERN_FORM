import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css";
import { useNavigate } from 'react-router-dom';

const Home = ({updateuser}) => {
  // console.log(updateuser);
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center">
  <div className="row min-vh-100 w-50 ">
    
    <div className="col align-self-center bg-light text-center m-3 ">
      <div >
        <img className="img" src="./images/logo.png" alt="err" />
      </div>
      <div className="heading m-3 display-4">
        Welcome to Sumit's site
      </div>
      <div className="user m-3 display-6">
        Successfully login Mr/Mrs Sumit mishra
      </div>
      <div className="button m-3">
        <button className="btn btn-outline-primary" onClick={()=>{navigate("/login")}} >Log out</button>
      </div>
      

    </div>
    
  </div>
</div>
    </>
  )
}

export default Home
