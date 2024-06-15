import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { fetchPostData } from '../../../client/client.jsx';
import { useNavigate } from 'react-router';
const AuthLogin=()=>{
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [errors,setErrors]=useState({email:'',password:''});
  const [loginError,setLoginError]=useState('');
  const navigate=useNavigate();

  useEffect(()=>{
    const isLoggedIn=localStorage.getItem('token');
    if(!isLoggedIn){
      navigate('/login');
    }else{
      navigate('/');
    }
  },[])

  const validateEmail=()=>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

  }

  const validatePassword=()=>{
     return password.length>=6&&password.length<=25;
  }

  const handleLogin=async ()=>{
    setErrors({email:'',password: ""});


    //validation
    if(!validateEmail()){
      setErrors((prevErrors)=>({ ...prevErrors,email:"invalid email format"}));
      return;
    }

    if(!validatePassword()){
      setErrors((prevErrors)=>({ ...prevErrors, password: "Password must be at least 6 chareacters"}))
      return;
      }

    console.log("logging in with:",email,password);
    // ur login logic here
    fetchPostData("/auth/token",{email,password})
      .then((response)=>{
        const { token }=response.data;
        setLoginError('');
        localStorage.setItem('token',token);
        navigate("/");
        window.location.reload();
      }).catch((error)=>{
        console.error("login error",error);
        setLoginError("An error occured during login")
    })



  }
  // console.log("base:",process.env.REACT_APP_BASE_URL)

  return(
     <Container component="main" maxWidth="xs">
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        error={!!errors.email}
        helperText={errors.email}
      />
       <TextField
         variant="outlined"
         margin="normal"
         fullWidth
         label="Password"
         type="Password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         error={!!errors.password}
         helperText={errors.password }
       />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
       {loginError && <p style={{color:"red"}}>{loginError}</p>}
     </Container>
  );
}

export default AuthLogin;