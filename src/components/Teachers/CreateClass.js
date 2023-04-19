import { useEffect, useState } from "react";
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import MomentUtils from '@date-io/moment'
import enGB from 'date-fns/locale/en-GB';
import * as Components from '../../stylesheets/Style_components'
import {GetLocation}  from "../General/GetLocation";
import Map from 'ol/Map';
import View from 'ol/View';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM'
import Overlay from "ol/Overlay";
import {fromLonLat,toLonLat} from 'ol/proj'
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";

export const CreateClass = () =>{
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(new Date());
  const [valueb, setValueb] = useState(new Date());
  const [location,setLocation] = useState(null);
  const [flocation,setFlocation] = useState(null);
  const [status,setStatus] = useState(0);
  const [radio, setRadio] = useState(1);
  const [dur, setDur] = useState(null);
  const navigate = useNavigate();
  
  var header = null;
  const handleChange = (newValue) => {
    console.log("date")
    console.log(value)
    setValue(newValue);
    console.log(newValue)
  }
  const handleChangeb = (newValue) => {
    console.log("date")
    console.log(valueb)
    setValueb(newValue);
    console.log(newValue)
  }

  const map = new Map({
    target: null,
    layers: [
      new Tile({
        source: new OSM()
      }),
    ],
    view: new View({
      center: fromLonLat([83.319914,17.729132]),
      zoom: 18
    }),
  });
  var pos = fromLonLat([83.319914,17.729132]);
  
  var marker = null

  map.on("click", function(evt) {
    setRadio(2)
    console.log(evt.coordinate)
    var coordinate =  toLonLat(evt.coordinate);
    console.log(fromLonLat(coordinate))
    marker.setPosition(evt.coordinate);
    setFlocation(coordinate);
  });
  
  useEffect(()=>{
    setOpen(!open);
    map.setTarget("map");
    var marker_el = document.getElementById('marker');
    marker = new Overlay({
      position: pos,
      positioning: 'center-center',
      element: marker_el,
      stopEvent: false,
      dragging: false
    });
    map.addOverlay(marker);
    GetLocation({"setStatus":setStatus,"setLocation":setLocation})
    setFlocation(location)
    if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
      alert("Please login again")
      navigate("/Login");
    }
    const link = "http://10.0.0.238/teachers/create_class";
    header = {
        "x-access-token":localStorage.getItem("x-access-token"),
        "Content-Type": "application/json"
    }
    console.log("after")
    console.log(header)
    setOpen(false);
  },[])
  
  const handle_current_location = ()=>{
    console.log(  fromLonLat( [ Number(location["longitude"]),Number(location["latitude"])]  )  )
    marker.setPosition(fromLonLat( [ Number(location["longitude"]),Number(location["latitude"])]  ));
    setFlocation(location);
  }
  
  const OnSubmitHandler = ()=>{
    setOpen(!open);
    const formData = {
      "uname":localStorage.getItem("uname"),
      "duration":dur,
      "start_time":value,
      "location":flocation,
      "attendance_before":valueb
    }
    header = {
      "x-access-token":localStorage.getItem("x-access-token"),
      "Content-Type": "application/json"
  }
    console.log("later")
    console.log(header)
    axios({
      mode: 'no-cors',
      method: 'post',
      url:"http://10.0.0.238/teachers/create_class",
      data: {formData} ,
      headers: header
      })
      .then((e)=>{
      console.log(e);
      if (e.status===201){
          setOpen(false);
          alert("done")
          console.log("done")
          navigate("/Teacher");
      }
      })
      .catch((error)=>{
          setOpen(false);
          console.log(error.response.data)
          alert(error.response.data.Error); 
      
      })
  }
  return(
    <Components.Container>
      <Components.Card flexlen="50%">
        {status===0  ? (<div> geolocation not supported =</div>)
                    : status ===1 ? (<div>Loading...</div>) 
                                :(
                                <div style={{margin:"2.5%",justifyContent:"center",alignItems:"center",display:"grid",minWidth:"100%"}}>
                                  <h3>Create Class</h3>
                                  <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB} >
                                      <form >
                                        <div style={{display:"flex",minheight:"20%",minWidth:"100%"}}>
                                          <div style={{"float":"left" ,margin:"10px"}}>Start Time</div>
                                          
                                          <DateTimePicker
                                            label="Date&Time picker"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} 
                                            utils={MomentUtils}/>}
                                            style={{"float":"right"}}
                                          /><br></br>
                                        </div>
                                        <br></br>
                                        <div style={{display:"flex",minheight:"20%",minWidth:"100%"}}>
                                          <div style={{"float":"left" ,margin:"10px"}}>Mark Attendance Before</div>
                                          <DateTimePicker
                                            label="Date&Time picker"
                                            value={valueb}
                                            onChange={handleChangeb}
                                            renderInput={(params) => <TextField {...params} 
                                            utils={MomentUtils}/>}
                                            style={{"float":"right"}}
                                          /><br></br>
                                        </div><br></br>
                                        <div style={{display:"flex",minheight:"20%",minWidth:"100%"}}>
                                          <div style={{"float":"left" ,margin:"10px"}}> <label >Duration(In minutes):</label><br/></div>
                                          <input type="text" id="uname" className="btn btn-default" placeholder="50" style={{"float":"right"}} onChange={(e)=>setDur(e.target.value)}/><br/><br/>
                                        </div>
                                        <div style={{display:"flex",minheight:"20%",minWidth:"100%"}}>
                                          <div>Location:</div>
                                          <div className="form-check" style={{"marginLeft":"1%"}}>
                                            <input type="radio" className="form-check-input" id="radio1" onChange={(e)=>{setRadio(1);handle_current_location();}} checked={radio===1} value="option1"/>
                                            <label className="form-check-label" >current Location</label>
                                          </div>
                                          <div className="form-check" style={{"marginLeft":"2%"}}>
                                            <input type="radio" className="form-check-input" id="radio2" onChange={(e)=>{setRadio(2)}} checked={radio===2} value="option2"/>
                                            <label className="form-check-label" >Pick on Map</label>
                                          </div>
                                        </div>
                                        <br></br>
                                        <div className='button -dark center' onClick={OnSubmitHandler}>Submit</div>
                                      </form>
                                  </LocalizationProvider>
                                </div>
                              )
        }
      </Components.Card>
      
      <Components.Card flexlen="50%">
        <div id="map" className="map" style={{"height":"100%","width":"100%"}}></div>
        <div id="marker" title="Marker"></div>
      </Components.Card>
      <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
      >
          <CircularProgress color="inherit" />
      </Backdrop>
    </Components.Container>
  );
}
