import React, { useState ,useEffect } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import * as Components from '../../stylesheets/Style_components'
import '../../stylesheets/a.scss'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

export const LinkFace = ()=>{
  const [open, setOpen] = useState(false);
  const [cam ,setCam] = useState(false)
  const permission = ()=>{navigator.permissions.query( { name: "camera" } ).then((e)=>setCam(e.state==="granted"?"true":"fasle"))}
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
  permission();
  var header = null
  const webcamRef = React.useRef(null);
  const navigate = useNavigate();
  const capture = React.useCallback(
    () => {
      setOpen(!open);
      const imageSrc = webcamRef.current.getScreenshot();
      console.log(header)
      const formData = {"img":imageSrc,"uname":localStorage.getItem("uname")}
      
      
      axios({
          mode: 'no-cors',
          method: 'post',
          url:"http://127.0.0.1:5000/students/link_face ",
          data: {formData} ,
          headers: header
        })
        .then((e)=>{
          console.log(e);
          if (e.status===201){
              setOpen(false);
              console.log("done");
              alert("done")
              navigate("/Student");
          }
          else{
              setOpen(false);
              alert(e["data"]["Error"]);
          }
        })
        .catch((error)=>{
          setOpen(false);
          console.log(error.response.data)
          alert(error.response.data.Error); 
        })
    },
    [webcamRef]
  );

  useEffect(()=>{
    setOpen(!open);
    if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
        alert("Please login again")
        navigate("/Login");
    }
    //const link = "http://127.0.0.1:5000/students/link_face "
    header = {
        "x-access-token":localStorage.getItem("x-access-token"),
        "Content-Type": "application/json"
    }
    
    setOpen(false);
    }
    ,[]
  )
  return (

    <Components.HomeImg>
      <div style={{"minWidth":"100%" ,"minHeight":"10%",justifyContent:"center",alignItems:"center",textAlign:"center"}}>
        <h2>To mark attendance you need to Link Face</h2>
      </div>
      {cam?(
      <div style={{"maxWidth":"100%" ,"minHeight":"90%",marginTop:"2.5%",display:"flex"}}>
        <div style={{"float":"left","maxWidth":"50%"}}>
          <Webcam
            audio={false}
            height={"70%"}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={"100%"}
            videoConstraints={videoConstraints}
            style ={{borderRadius: '29px'}}
          />
          <div className='button -dark center' onClick={capture}>Capture photo</div>
        </div>
        <div style={{"float":"right","minWidth":"50%",marginLeft:"2.5%"}}>
          <h3 style={{justifyContent:"center",alignItems:"center",textAlign:"center"}}>Do's and Dont's</h3>
          <ul style={{fontSize:"20px"}}>
            <li>Make sure you are against a light source and capture photo in ample light</li>
            <li>Make sure you are the only one photo to avoid failures</li>
            <li>Make sure you are capturing photo against constant background and not changing background</li>
            <li>Make sure you use clean the before capturing lense dust might cause failures</li>
            <li>Avoid using glasses/specs as they reflect light into camera and cause failures</li>
            <li>Avoid multiple people in single frame</li>
            <li>In case of failures retry capturing photo</li>
          </ul>
        </div>
      </div>):(<div style={{"minWidth":"100%" ,"minHeight":"90%"}}> permission denied</div>)}
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
      >
          <CircularProgress color="inherit" />
      </Backdrop>
    </Components.HomeImg>
  );    
}