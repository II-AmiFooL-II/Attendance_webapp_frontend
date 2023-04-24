import { useState,useEffect } from 'react';
import * as Components from '../../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { Spinner } from '../General/Spinner';
import bg from '../../staticFiles/sHome.jpg'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const StudentsViewAttendance = () =>{
  const [isAvailable, setIsAvailable] = useState(false);
  const [data,setData] = useState([])
  const navigate = useNavigate(); 
  var header  = null;
  useEffect(()=>{
      if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
          alert("please login again")
          navigate("/Login");
      }
      const link = "http://152.70.51.75:5000/students/view_attendance"
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
          console.log(error)
          //console.log(error.response["data"])
          //if(error.response.status===401){
          //  alert("invalid creds"); 
          //}
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
        cursor: 'default'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
  }));
  console.log(data)
  return (
    <div>
      <div style={{minWidth:"100%",minHeight:"5%",backgroundColor:"#213A7C",fontWeight:"900",color:"white",justifyContent:"center",display:"flex"}}>
            <div style={{margin:"10px"}}>
            This website is just and effort to show attendance management using face recognition (Encoder-Decoder Network)
            </div>
        </div>
        <div style={{maxHeight:"30%",backgroundImage:`url(${bg})`,padding: "80px 0px 60px 0px",backgroundAttachment:"fixed"}}>
                <div style={{marginLeft:"auto",marginRight:"auto",paddingLeft:"50px",paddingRight:"15px",width:"100%"}}>
                    <ol style={{backgroundColor:"transparent",fontSize:"15px",marginBottom:"10px",padding:"0px",display:"flex"}}>
                        <li style={{listStyleType:"none"}}>
                            <a href='../../Home' style={{textDecoration:"none",color:"#fff"}}>Home</a>
                        </li>
                        <span style={{color:"#fff",marginLeft:"2px",marginRight:"2px"}}>/</span>
                        <li  style={{listStyleType:"none"}}>
                            <a href='../Student' style={{textDecoration:"none",color:"#fff"}}>Student Home</a>
                        </li>
                        <span style={{color:"#fff",marginLeft:"2px",marginRight:"2px"}}>/</span>
                        <li  style={{listStyleType:"none"}}>
                            <a href='#' style={{textDecoration:"none",color:"#fff"}}>Attendance</a>
                        </li>
                    </ol>
                    <h1 style={{fontSize:"36px",color:"#fff",fontWeight:"500" ,marginBottom:"35px"}}>Your Attendance</h1>
                </div>
        </div>
    <Components.Container style={{backgroundColor: "rgba(255,255,255,0.4)" }}>
    {isAvailable ? (data.length>0)?(<div style={{width:"100%" ,margin:"2.5vw"}}>
                                      <div style={{width:"100%" , textAlign:"center"}}>
                                      <h2>Attendance</h2>
                                    </div>
                                    
                                        <TableContainer component={Paper}>
                                            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                            <TableHead>
                                            <TableRow>
                                                <StyledTableCell>id</StyledTableCell>
                                                <StyledTableCell align="right" >Subject</StyledTableCell>
                                                <StyledTableCell align="right">Classes Held</StyledTableCell>
                                                <StyledTableCell align="right">Classes Attended</StyledTableCell>
                                                <StyledTableCell align="right">Percentage</StyledTableCell>
                                            </TableRow>
                                            </TableHead>
                                            <TableBody>
                                            {data.map((item, index) => (
                                                <StyledTableRow key={item._id} >
                                                <StyledTableCell component="th" scope="row">
                                                    {item._id}
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{item.subject}</StyledTableCell>
                                                <StyledTableCell align="right">{item.classes_taken}</StyledTableCell>
                                                <StyledTableCell align="right">{item.classes_attended}</StyledTableCell>
                                                <StyledTableCell align="right">{(item.classes_attended/item.classes_taken)*100}%</StyledTableCell>
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
  </div>
);
}