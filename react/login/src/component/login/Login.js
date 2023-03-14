import React ,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./login.css" ;





const Login = ({updateuser}) => {
  // console.log(props.updateuser) ;
  const navigate = useNavigate();
  const [Login , UpdateLogin] = useState({
    
    email : "",
    psw : ""
    
});

const letseelogin = (kuch)=>{
  const {name , value} =  kuch.target ;
  UpdateLogin((old)=>{
    return(
      {
        ...old , [name]:value 
      }
    )
  })

}

const clicked = (e)=>{
  // e.preventDefault();
  const {email , psw} = Login 
  // axios.post("http://localhost:9002/login",Login).then((res)=>{ 
  //       alert(res.data.message) 
  // })
  if(email && psw){
    axios.post("http://localhost:9002/login",Login).then((res)=>{ 
      alert(res.data.message)  
      updateuser(res.data.user)  
      navigate("/") ;
       
})
  }else{
    alert("Please enter Password")
  }

}

  
  return (
    <>
      <section class = "wrapper">
        <div class="container">
            <div class="col-xl-4 offset-xl-4 col-sm-8 offset-sm-2 justify-content-center text-center h-40" id="beechwala">
                <div class="logo">
                    <img class="img-fluid logoimg" src="/images/logo.png" alt="logo"/>
                </div>
                
                <form class="bg-white shadow p-3">
                    <h3 class="text-dark fw-bolder fs-4 mb-2 ">Sign in to Mishra's</h3>
                    <div class="fw-normal text-muted mb-4">New here?<a  class="text-primary fw-bold text-decoration-none registerlink" onClick={()=>{navigate("/register")}}>Create an account</a>

                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value = {Login.email}  name = "email" onChange={letseelogin} />
                        <label for="floatingInput">Email address</label>
                      </div>
                      
                      <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" value = {Login.psw} name = "psw" onChange={letseelogin}/>
                        <label for="floatingPassword">Password</label>
                      </div>
                      
                      <div class="text-end mt-3"><a href="http://127.0.0.1:5500/forgotpsw/psw.html?" target="_blank" class="text-primary fw-bold text-decoration-none ">Forget password?</a></div>
                      <button type="submit" class="btn btn-primary w-100 mt-2 mb-2" onClick={clicked}>Continue</button>
                      <div class="">or</div>
                      <a href="" target= '_blank'class="btn btn-light w-100 mb-3 shadow ssbtn">
                        <img src="../images/google-icon.svg" class = "me-3"alt="google"/>Continue with Google
                      </a>
                      <a href="https://www.facebook.com/" target="_blank" class="btn btn-light w-100 mb-3 shadow ssbtn">
                        <img src="../images/facebook-icon.svg"  class = "me-3"alt="google"/>Continue with Facebook
                      </a>
                      <a href="https://www.linkedin.com/login" target="_blank" class="btn btn-light w-100 mb-5 shadow ssbtn">
                        <img src="../images/linkedin-icon.svg" class = "me-3 "alt="google"/>Continue with Linkedin
                      </a>


                </form>
                <section class="footer">
        <h4>About us</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          eligendi culpa distinctio in quis provident.
        </p>
  
        <div className="icon ">
          <i className="fa-brands fa-facebook icon"></i>
          <i className="fa-brands fa-instagram-square icon"></i>
          <i className="fa-brands fa-linkedin icon"></i>
          <i className="fa-brands fa-twitter-square icon"></i>
        </div>
        <p class="heart">
          made with <i class="fa-solid fa-heart"></i> by SUMIT MISHRA
        </p>
      </section>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Login
