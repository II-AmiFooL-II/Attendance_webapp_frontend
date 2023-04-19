import React, { useState } from 'react';
import * as Components from '../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function Login() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate(); 

  const OnSubmitHandler = (e) => {
    e.preventDefault();
    setOpen(!open);
    var link = ""
    //alert(logintype)
    if(logintype==="students"){
      link = "http://152.70.51.75:5000/students/login"
    }
    else{
      link = "http://152.70.51.75:5000/teachers/login"
    }
     
    //alert(JSON.stringify(formData));
    axios({
      mode: 'no-cors',
      method: 'post',
      url:link,
      data: {formData} ,
      headers: {
        // 'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json'
      } 
    })
    .then((e)=>{
      //console.log(e);
      setOpen(false);
      localStorage.setItem("x-access-token",e["data"]["token"])
      localStorage.setItem("uname",formData["uname"])
      if (e.status===200){
        //console.log(e["data"])
        if(logintype==="students"){
          navigate("/Student");
        }
        else{
          navigate("/Teacher");
        }
      }
    })
    .catch((error)=>{
      setOpen(false);
      console.log(error.response.data)
      alert(error.response.data.Error); 
    })
  }

  const loginInittvalue  = {
    uname:"",
    password:""
  }
  const [formData,setFormData] = useState(loginInittvalue);
  const [logintype,setLogintype] = useState("students");
  return (
    <div >
        <div >  
        <Components.Container style ={{display:"grid",justifyContent:"center",alignItems:"center"}}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={OnSubmitHandler} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="uname"
              label="User Name"
              name="uname"
              autoComplete="uname"
              onChange={(e)=>setFormData({...formData,uname:e.target.value})}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={(e)=>setFormData({...formData,password:e.target.value})}
              autoComplete="current-password"
            />
            <FormLabel id="demo-controlled-radio-buttons-group">Login Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={(e)=>setLogintype(e.target.value)}
            >
              <FormControlLabel value="teachers" control={<Radio />} label="Teacher" />
              <FormControlLabel value="students" control={<Radio />} label="Student" />
            </RadioGroup>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/Register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
          </Box>
          <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          >
              <CircularProgress color="inherit" />
          </Backdrop>
        </Components.Container>
      </div>
    </div>
  );
}

export default Login;