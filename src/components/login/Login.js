
import { Routes, Route, Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import React,{useState} from 'react'
import "./login.css"
// import API from "../API/API.js"

function Login() {
  // const formvalidationSchema = yup.object({
  //   email: yup
  //     .string()
  //     .required("Plz Fill up the Username")
  //     .min(4, "Needed long username"),
  //   password: yup
  //     .string()
  //     .required("Plz Fill up the Username")
  //     .min(4, "Needed long password"),
  // });
  // const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
  //   useFormik({
  //     initialValues: {
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: formvalidationSchema,
  //     onSubmit: () => navigate("/Home"),
  //   });
 const API = "https://my-third-project.herokuapp.com"

  const navigate =useNavigate()

    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");

   const signin = async(e) => {
    e.preventDefault();
    
      try{
        const fix= await fetch(`${API}/login`, {
        method: "POST",
        body: JSON.stringify({
          username:values.email,
          password:values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    //   if(exist.status==200){
    // window.alert("user exist")
    //   }else{
    //     window.alert("user not exist")
    //   }
    
      if(fix.status === 400 || !fix) {
        window.alert("Invalid credentials");
      } else {
        // localStorage.setItem("username", values.temuser);
        window.alert("login successfull");
    navigate("/home")
    
      }
      }
      catch(err){
        console.log(err)
      }
    }
   const reset = async(e) => {
    e.preventDefault();
    
      try{
        const fix= await fetch(`${API}/resetpassword`, {
        method: "POST",
        body: JSON.stringify({
          username:values.email,
          password:values.password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    //   if(exist.status==200){
    // window.alert("user exist")
    //   }else{
    //     window.alert("user not exist")
    //   }
    
      if(fix.status === 400 || !fix) {
        window.alert("Invalid username");
      } else {
        // localStorage.setItem("username", values.temuser);
        window.alert("password reset successfull");
    
    
      }
      }
      catch(err){
        console.log(err)
      }
    }

   

const signup = async(e) =>{
  e.preventDefault();
    
  try{
    const fix= await fetch(`${API}/signup`, {
    method: "POST",
    body: JSON.stringify({
      username:values.email,
      password:values.password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
//   if(exist.status==200){
// window.alert("user exist")
//   }else{
//     window.alert("user not exist")
//   }

  if(fix.status === 400 || !fix) {
    window.alert("username already exist try new username");
  } else {
    // localStorage.setItem("username", values.temuser);
    window.alert("signup successfull,login now");
// navigate("/")

  }
  }
  catch(err){
    console.log(err)
  }
}
const formvalidationSchema = yup.object({
  email: yup
    .string()
    .required("Plz Fill up the Username")
    .min(4, "Needed long username"),
  password: yup
    .string()
    .required("Plz Fill up the Username")
    .min(4, "Needed long password"),
});
const { handleChange, handleBlur, values, errors, touched, handleSubmit } =
  useFormik({
    initialValues: {
      email:"",
      password:"",
    },
    validationSchema: formvalidationSchema,
    // onSubmit: () => navigate("/Home"),
  });

  return (
    <div className='login'>
      <Link to="/">
        <img src="https://www.the-sun.com/wp-content/uploads/sites/6/2022/02/NINTCHDBPICT000561981244.jpg" alt="amazon-logo" className="login_logo"/>
      </Link>
      <div className="login_container">
        <h1>signIn</h1>
        <form>
            <h5>
                E-mail
            </h5>
            <input type={"text"}  
            name="email"
            value={values.email}
            error={errors.email && touched.email}
            helperText={
              errors.email && touched.email ? errors.email : ""
            }
            onBlur={handleBlur}
             onChange={handleChange} required="true" />
            <h5>
                Password
            </h5>
            <input type="password" value={values.password} 
             name="password"
            error={errors.password && touched.password}
            helperText={
              errors.password && touched.password ? errors.password : ""
            }
            onBlur={handleBlur}  onChange={handleChange} required="true" />
            <button className="login_signin" onClick={signin} type="submit">Sign IN</button>

        </form>
        <p>
            If you already a amazon-clone user sigIn here or create a account by using the below button signup.If you forgot your password use "forgot password" button to rest your password
        </p>
        <button className="login_signup" onClick={signup}>Create New Account</button>
        <button className="forgot" onClick={reset}>Forgot password</button>
      </div>
    </div>
  )
}

export default Login











