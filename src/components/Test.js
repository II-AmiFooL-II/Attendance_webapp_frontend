import * as React from 'react';
import {useState} from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {DateTimePicker} from '@mui/x-date-pickers';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import MomentUtils from '@date-io/moment'
import enGB from 'date-fns/locale/en-GB';
import * as Components from '../stylesheets/Style_components'

export const Test = ()=>{
    const [value, setValue] = useState(new Date());
    const navigate = useNavigate();
    
    const handleChange = (newValue) => {
      console.log(value)
      setValue(newValue);
      console.log(newValue)
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      alert(JSON.stringify(value));
      axios({
        mode: 'no-cors',
        method: 'post',
        url:"http://152.70.51.75:5000/teachers/create_class ",
        data: {value} ,
        headers: {
          // 'Authorization': `bearer ${token}`,
          'Content-Type': 'application/json'
        } 
      })
      .then((e)=>{
        console.log(e);
        if (e.status===200){
          navigate("/Home");
        }
        else{
          alert("invalid creds");
        }
      })
      .catch((error)=>{
        console.log(error.response.data)
        if(error.response.status===401){
          alert("invalid creds"); 
        }
      })
    }
    return(
        <div style={{margin: "5% 40%"}}>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={enGB} >
        <Stack spacing={3}>
          <form onSubmit={handleSubmit}>
          <DateTimePicker
            label="Date&Time picker"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField {...params} 
            utils={MomentUtils}/>}
          />
          <button>submit</button>
          </form>
        </Stack>
      </LocalizationProvider>
    </div>
    );

}