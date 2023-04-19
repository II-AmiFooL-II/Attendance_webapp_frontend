import { useState,useEffect } from 'react';

import * as Components from '../../stylesheets/Style_components'
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Masonry from '@mui/lab/Masonry';
import { Spinner } from '../General/Spinner';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import '../../stylesheets/th.scss'

export const AvailableSubjects = ()=>{
    const [open, setOpen] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);
    const [data,setData] = useState([])
    const navigate = useNavigate(); 
    var header  = null;
    useEffect(()=>{
        if(localStorage.getItem("x-access-token")===null || localStorage.getItem("uname")===null){
            console.log("wtf")
            alert("please login again")
            navigate("/Login");
        }
        const link = "http://152.70.51.75:5000/students/list_all_subjects"
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
            console.log(error.response.data)
            alert(error.response.data.Error); 
          })
    },[]);

    const handle_click = (index)=>{
        setOpen(!open);
        const link = "http://152.70.51.75:5000/students/subscribe_to_class"
        const formData = {"uname":localStorage.getItem("uname"),"subject_id":data[index]["_id"]}
        header = {
            "x-access-token":localStorage.getItem("x-access-token"),
            "Content-Type": "application/json"
        }
        axios({
            mode: 'no-cors',
            method: 'post',
            headers: header,
            url:link,
            data: {formData}
          })
          .then((e)=>{
            console.log(e);
            if (e.status===201){
                setOpen(false);
                alert("Registered")
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
          
    }
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
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
        <Components.Container style={{"backgroundColor": "rgba(255,255,255,0.4)"}}>
            {isAvailable ? (data.length>0)?(<div style={{width:"100%" ,margin:"2.5vw"}}>
                                                <div style={{width:"100%" , textAlign:"center"}}>
                                                    <h2>Subjects Available</h2>
                                                </div>
                                                <TableContainer component={Paper}>
                                                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                                    <TableHead>
                                                    <TableRow>
                                                        <StyledTableCell>Subject</StyledTableCell>
                                                        <StyledTableCell align="right">Teacher Name</StyledTableCell>
                                                        <StyledTableCell align="right">Teachers Email</StyledTableCell>
                                                        <StyledTableCell align="right">Classes Taken</StyledTableCell>
                                                        <StyledTableCell align="right">Register</StyledTableCell>
                                                    </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                    {data.map((item, index) => (
                                                        <StyledTableRow key={item._id} >
                                                        <StyledTableCell component="th" scope="row" sx={{ cursor: 'default' }}>
                                                            {item.subject}
                                                        </StyledTableCell>
                                                        
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{item.uname}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{item.email}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'default' }}>{item.classes_taken}</StyledTableCell>
                                                        <StyledTableCell align="right" sx={{ cursor: 'pointer' }} onClick={()=>handle_click(index)}>Click To Register</StyledTableCell>
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
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </Components.Container>
    );
}