import { useState,useEffect } from 'react';
import * as Components from '../../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Spinner } from '../General/Spinner';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const AvailableClasses = (props) =>{
    const [isAvailable, setIsAvailable] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate(); 

    useEffect(()=>{
        if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
            alert("please login again")
            navigate("/Login");
        }
        const link = "http://152.70.51.75:5000/students/list_all_classes"
        const header = {
            "x-access-token":localStorage.getItem("x-access-token"),
            "Content-Type": "application/json"
        }
        const formData = {}
        //alert(formData);
        axios({
            mode: 'no-cors',
            method: 'get',
            headers: header,
            url:link,
            headers: {
                // 'Authorization': `bearer ${token}`,
                'Content-Type': 'application/json',
                'x-access-token':localStorage.getItem("x-access-token")
            }, 
            params:{"uname":localStorage.getItem("uname")}
          })
          .then((e)=>{
            console.log(e);
            if (e.status===200){
                setIsAvailable(true);
                setData(e["data"]["data"])
            }
            else{
              alert("Token Details mismatch please relogin or try again");
            }
          })
          .catch((error)=>{
            console.log(error.response.data)
            alert(error.response.data.Error); 
          })
    },[]);

    const handle_click = (index)=>{
        console.log({"data":data[index]})
        navigate("/Student/Attend_class", {state:{id:data[index]}})
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
          cursor: 'default'
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
      
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        cursor: 'default' 
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    }
    }));
    
    const viewLocation = (location)=>{
        navigate("/Student/ViewLocation",{state:location})
    }

    return(
        <Components.Container style={{backgroundColor: "rgba(255,255,255,0.4)" }}>
            {isAvailable ? (data.length>0)?(<div style={{width:"100%" ,margin:"2.5vw"}}>
                                                <div style={{width:"100%" , textAlign:"center"}}>
                                                    <h2>Classes To Attend</h2>
                                                </div>

                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                    <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>Subject</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>Duration&nbsp;(min)</StyledTableCell>
                                                        <StyledTableCell align="right">StartTime</StyledTableCell>
                                                        <StyledTableCell align="right">StartDate</StyledTableCell>
                                                        <StyledTableCell align="right">Location</StyledTableCell>
                                                        <StyledTableCell align="right">attendance Before</StyledTableCell>
                                                    </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                    {data.map((item, index) => (
                                                        <StyledTableRow key={item._id} >
                                                        <StyledTableCell component="th" scope="row" sx={{ cursor: 'pointer' }} onClick={()=>handle_click(index)}>
                                                            {item.subject}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{item.duration}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{new Date(item.start_time).toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'})}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{new Date(item.start_time).toLocaleDateString()}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'pointer' }} onClick={()=>{viewLocation(item.location)}}>View Location</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{new Date(item.attendance_before).toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'})}</StyledTableCell>
                                                        </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                        </Table>
                                                    </TableContainer>

                                            </div>
                                            )
                                            :(
                                                <div style={{width:"100%" , textAlign:"center"}}>
                                                    <h2>No Classes To Attend</h2>
                                                </div>
                                            )

                            :(
                                <Spinner isavi={isAvailable} />
                            )
            }
            
        </Components.Container>
    );
}