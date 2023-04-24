import { useState } from 'react';
import * as Components from '../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import logo from '../staticFiles/au.png'
import RegisterBG from '../staticFiles/mrbg.jpeg'

const Register = () =>{
    const [open, setOpen] = useState(false);
    const [formData,setFormData] = useState([]);
    const [registerType,setRegisterType] = useState("students");
    const navigate = useNavigate(); 

    const OnSubmitHandler = (e) => {
        e.preventDefault();
        setOpen(!open);
        alert(JSON.stringify(formData));
        var link = ""
        if(registerType==="students"){
        link = "http://152.70.51.75:5000/students/register"
        }
        else{
        link = "http://152.70.51.75:5000/teachers/register"
        }
        console.log(formData)
        axios({
            mode: 'no-cors',
            method: 'post',
            url:link,
            data: {formData} ,
            headers: {
                'Content-Type': 'application/json'
            } 
            })
            .then((e)=>{
            setOpen(false);
            localStorage.setItem("x-access-token",e["data"]["token"])
            localStorage.setItem("uname",formData["uname"])
            console.log(e);
            if (e.status===201){
                if(registerType==="students"){
                    navigate("/Student");
                  }
                  else{
                    navigate("/Teacher");
                  }
            }
            else{
                alert("invalid creds");
            }
            })
            .catch((error)=>{
                setOpen(false);
                console.log(error.response.data)
                alert(error.response.data.Error); 
        })
    }

    const clearFields = ()=>{
        console.log("hi")
        document.getElementById("registerForm").reset();
    }
    return(
        <div>
            <div style={{minWidth:"100%",minHeight:"5%",backgroundColor:"#213A7C",fontWeight:"900",color:"white",justifyContent:"center",display:"flex"}}>
            <div style={{margin:"10px"}}>
            This website is just and effort to show attendance management using face recognition (Encoder-Decoder Network)
            </div>
        </div>
        
        <Components.Container >
            <Components.Card flexlen="50%" style={{minWidth:"40%",backgroundImage:`url(${RegisterBG})`,backgroundSize:"cover",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"}}><img src={logo} style={{width:"30%",height:"35%"}}/><h3 >Welcome to A.U.C.E(A)</h3></Components.Card>
            <Components.Card flexlen="50%" style={{backgroundColor:"rgba(0,0,0, .1)"}}>
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
            >
            <Typography component="h1" variant="h5" marginTop="10px">
                Sign up
            </Typography>
            <FormLabel id="demo-controlled-radio-buttons-group">Login Type</FormLabel>
            <RadioGroup
                row
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={(e)=>{setRegisterType(e.target.value);setFormData([]);clearFields();}}
            >
              <FormControlLabel value="teachers" control={<Radio />} checked={registerType==="teachers"} label="Teacher" />
              <FormControlLabel value="students" control={<Radio />} checked={registerType==="students"} label="Student" />
            </RadioGroup>
            
            {registerType==="students"?(
                                        <Box id ="registerForm" component="form" onSubmit={OnSubmitHandler} noValidate sx={{ mt: 1}} style={{alignItems: 'center',
                                        justifyContent: 'center',display:'flex',flexDirection:"column",minWidth:"60%"}}>
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
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                                                autoFocus
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Roll Number"
                                                label="Roll Number"
                                                name="Roll Number"
                                                onChange={(e)=>setFormData({...formData,roll_no:Number(e.target.value)})}
                                                autoFocus
                                                type="number"
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
                                            <Button
                                                type="submit"
                                                size='large'
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                                >
                                                Sign Up
                                            </Button>
                                        </Box>
                                        )
                                    :(
                                        <Box  id ="registerForm" component="form" onSubmit={OnSubmitHandler} noValidate sx={{ mt: 1 }} style={{alignItems: 'center',
                                        justifyContent: 'center',display:'flex',flexDirection:"column",minWidth:"60%"}}>
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
                                                id="email"
                                                label="Email Address"
                                                name="email"
                                                autoComplete="email"
                                                onChange={(e)=>setFormData({...formData,email:e.target.value})}
                                                autoFocus
                                            />
                                            <TextField
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="Subject"
                                                label="Subject"
                                                name="Subject"
                                                onChange={(e)=>setFormData({...formData,subject:e.target.value})}
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
                                            <Button
                                                type="submit"
                                                size='large'
                                                variant="contained"
                                                sx={{ mt: 3, mb: 2 }}
                                                >
                                                Sign up
                                            </Button>
                                        </Box>
                                    )}
                    <br></br>
                    <p>Already a member? <a href="/Login">SignIn</a></p>
                </Box>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </Components.Card>
        </Components.Container>
        </div>
    );
};  

export default Register;