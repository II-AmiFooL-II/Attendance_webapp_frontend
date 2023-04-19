import { useState,useEffect } from 'react';
import { CardMedia, CardContent,Card,Typography,Modal} from '@mui/material'
import * as Components from '../../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Masonry from '@mui/lab/Masonry';
import { Spinner } from '../General/Spinner';
import { margin } from '@mui/system';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


export const TeachersViewAttendance = ()=>{
    const [isAvailable, setIsAvailable] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate(); 
    var header  = null;
    useEffect(()=>{
        if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
            alert("please login again")
            navigate("/Login");
        }
        const link = "http://152.70.51.75:5000/teachers/view_attendance"
        header = {
            "x-access-token":localStorage.getItem("x-access-token"),
            "Content-Type": "application/json"
        }
        //alert(formData);
        axios({
            mode: 'no-cors',
            method: 'get',
            headers: header,
            url:link,
            params: {"uname":localStorage.getItem("uname")}
          })
          .then((e)=>{
            //console.log(e);
            if (e.status===200){
                setIsAvailable(true);
                setData(e["data"])
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
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    return(
        <Components.Container style={{backgroundColor: "rgba(255,255,255,0.4)" }}>
        {isAvailable ? (Object.keys(data).length>0)?(<div style={{width:"100%" ,margin:"2.5vw"}}>
                                      <div style={{width:"100%" , textAlign:"center"}}>
                                      <h2>Students Attendance</h2>
                                    </div>
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Subject</StyledTableCell>
                                                <StyledTableCell align="right">Student Name</StyledTableCell>
                                                <StyledTableCell align="right">Classes Held</StyledTableCell>
                                                <StyledTableCell align="right">Classes Attended</StyledTableCell>
                                                <StyledTableCell align="right">Percentage</StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {Object.keys(data["attendence_data"]).map((key, index) => (
                                                <StyledTableRow key={key} >
                                                <StyledTableCell component="th" scope="row">
                                                    {data["subject"]}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{key}</StyledTableCell>
                                                <StyledTableCell align="right">{data["classes_taken"]}</StyledTableCell>
                                                <StyledTableCell align="right">{data["attendence_data"][key]}</StyledTableCell>
                                                <StyledTableCell align="right">{(data["attendence_data"][key]/data["classes_taken"])*100}%</StyledTableCell>
                                                </StyledTableRow>
                                                    ))}
                                              </TableBody>
                                              </Table>
                                          </TableContainer>
                                    </div>
                                    )
                                    :(
                                      <div style={{width:"100%" , textAlign:"center"}}>
                                        <h2>No Attendence records yet</h2>
                                      </div>
                                    )
                    :(
                      <Spinner isavi={isAvailable} />
                    )
    }
  </Components.Container>
    );
}