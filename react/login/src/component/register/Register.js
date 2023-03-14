import React ,{useState} from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [User , UpdateUser] = useState({
    fname : "",
    lname : "",
    email : "",
    psw : "",
    cpsw : ""
});

const letsee = (kuch)=>{
  
  const {name , value} = kuch.target ;
  UpdateUser((old)=>{
    return({
      ...old , [name] :value 
    }
    )
  })
}

const click = (e)=>{
  e.preventDefault();
  // console.log("clicked");
  const {fname ,lname ,email ,psw ,cpsw } = User
  
  if(fname &&lname &&email &&psw &&(cpsw===psw) ){
    axios.post("http://localhost:9002/register",User).then((res)=>{
      alert(res.data) ;
    })
  }
  else {
    alert("invalid input");
  }
}
  
  
  return (
    <>
      <section className="wrapper">
      <div className="container p-xl-5 p-lg-5">
        <div className="col-xl-6 offset-xl-3 col-sm-8 offset-sm-2 justify-content-center text-center h-40" id="beechwala">
          <div id ="logo">
            <img
              className="logo-image"
              src="../images/sign-up-concept-illustration_114360-7875.webp"
              alt="logo"
            />
          </div>
          <div className="text-center shadow m-4 ">
            <p className="mt-5 fw-bold pt-2"><h4>Create an Account</h4> </p>
            <p className="text-muted mt-2">
              Already have an account? <span ><a className="text-decoration-none signlink" onClick = {()=>{navigate("/")}}>Sign in here</a></span>
              <p className = "text-muted mb-2">OR</p>
              {/* <a className="btn btn-light mt-2 mb-3 ssbtn shadow"href="" target="_blank"><img src="../images/google-icon.svg" alt="google"/> Sign-up with google</a> */}

              <form action="" className="align-center col-lg-10 offset-lg-1 pt-3">
                <div className="form-floating mb-3 ">
                  <input type="text" className="form-control" id="nameinput" placeholder="name@example.com" name="fname"  value ={User.fname} onChange={letsee} />
                  <label for="floatingInput">First Name</label>
                </div>
                
                <div className="form-floating mb-3 ">
                  <input type="text" className="form-control" id="nameinput" placeholder="name@example.com" name="lname" onChange={letsee} value ={User.lname}/>
                  <label for="floatingInput">Last Name</label>
                </div>

                <div className="form-floating mb-3 ">
                  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" name="email" onChange={letsee} value ={User.email}/>
                  <label for="floatingInput">Email address</label>
                </div>
                
                <div className="form-floating ">
                  <input type="password" className="form-control" id="floatingPassword" placeholder="Password" name="psw" onChange={letsee} value ={User.psw}/>
                  <label for="floatingPassword">Password</label>
                </div>
                
                <div className="text-muted text-left pb-4">Use 8 or more characters with mix of a special characters</div>

                <div className="form-floating ">
                  <input type="password" className="form-control" id="floatingconPassword" placeholder="Password" name="cpsw" onChange={letsee} value ={User.cpsw}/>
                  <label for="floatingconPassword">Confirm-Password</label>
                </div>

                <div className="col-lg-8 offset-lg-2  col-sm-12 offset-sm-0 mt-3 mb-2 pb-2 ">
                  <div className="form-check">
                    <input className="form-check-input ms-2" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label pt-2" for="gridCheck">
                      I agree to <a className = " text-decoration-none"href="#">terms and conditions.</a>
                    </label>
                  </div>
                </div>

                <div className="col-12 pb-5">
                  <button type="submit" className="btn btn-primary" onClick={click} >Sign up</button>
                </div>
                  


              </form>

            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Register
