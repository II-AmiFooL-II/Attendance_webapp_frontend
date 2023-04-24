import * as Components from '../../stylesheets/Style_components'
import logo from '../../staticFiles/teacher.png';
import sstat from '../../staticFiles/sstat.png'
import classes from '../../staticFiles/attendclass.png'
import { useNavigate } from 'react-router-dom';
import img from '../../staticFiles/h2.jpg'
import bg from '../../staticFiles/sHome.jpg'

const sty = {
    marginLeft:"20px",
    marginRight:"20px"
}

export const TeacherHome = ()=>{
    const navigate = useNavigate(); 

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
                            <a href='../Home' style={{textDecoration:"none",color:"#fff"}}>Home</a>
                        </li>
                        <span style={{color:"#fff",marginLeft:"2px",marginRight:"2px"}}>/</span>
                        <li  style={{listStyleType:"none"}}>
                            <a href='#' style={{textDecoration:"none",color:"#fff"}}>Teacher Home</a>
                        </li>
                    </ol>
                    <h1 style={{fontSize:"36px",color:"#fff",fontWeight:"500" ,marginBottom:"35px"}}>Teacher Home</h1>
                </div>
        </div>
        <Components.HomeContainer>
        <div style={{"maxWidth":"33.33%","overflow":"hidden",float:"left"}}>
                <img src={img} style={{height:"47.5%"}}/>
                <div style={{background:"#fff",padding:"18px",alignItems:"center",justifyContent:"center",display:"flex"}}>
                    <ul>
                        <li style={{listStyleType:"none",textAlign:"justify"}}>
                            <b><h4 style={{color:"red",alignItems:"centre",justifyContent:"center",display:"flex"}}>Vision</h4></b>
                            <b>To </b>
                             develop the institution into a center of academic excellence and advanced research by imparting high quality technical education to produce globally competent professionals who are socially responsible with high moral and ethical values.
                            <br/>
                        </li>
                    </ul>
                </div>
            </div>
            <div style={{"width":"66.67%","overflow":"hidden"}}>
                <div style={{"display":"flex","maxHeight":"10vh","justifyContent":"center","maxWidth":"100%","overflow":"hidden"}}>
                    <div style={{"float":"left","maxHeight":"10vh"}}><img src={logo} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                    <div style={{"float":"right","maxHeight":"10vh","justifyContent":"center","alignItems":"center","display":"flex"}}><h3>Teacher Home</h3></div>
                </div>

                <div style={{"display":"flex","overflow":"hidden", "marginTop":"3vh","maxHeight":"100%","maxWidth":"100%","justifyContent":"center","alignItems":"center"}}>
                    

                    <div style={{"minWidth":"50%" ,"maxWidth":"25%","maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("CreateClass")}}>   
                        <div > <img src={classes} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>CreateClass</h4></div>
                        <p style={sty}>Create class and it notify all students who registered for the class and pick location of class to make sure students are there.</p>
                    </div>
                    
                    
                    <div style={{"minWidth":"50%" ,"maxWidth":"25%","maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center" }} onClick={()=>{navigate("ViewAttendance")}}>
                        <div > <img src={sstat} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>View Attendance</h4></div>
                        <p style={sty}>Gives real time attendance of all the Students who attended your class and attendance of each student is given individually. </p>
                    </div>

                    
                </div>
            </div>
        </Components.HomeContainer>
        </div>
    );
}