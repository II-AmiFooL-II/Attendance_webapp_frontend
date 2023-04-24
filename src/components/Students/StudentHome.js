import * as Components from '../../stylesheets/Style_components'
import logo from '../../staticFiles/student.png';
import stat from '../../staticFiles/stat.gif'
import sstat from '../../staticFiles/sstat.png'
import subjects from '../../staticFiles/subjects.png'
import classes from '../../staticFiles/attendclass.png'
import LinkFace from '../../staticFiles/linkface.png'
import { useNavigate } from 'react-router-dom';
import bg from '../../staticFiles/sHome.jpg'
import img from '../../staticFiles/h1.jpg'


const sty = {
    marginLeft:"20px",
    marginRight:"20px"
}
export const StudentHome = ()=>{
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
                            <a href='#' style={{textDecoration:"none",color:"#fff"}}>Student Home</a>
                        </li>
                    </ol>
                    <h1 style={{fontSize:"36px",color:"#fff",fontWeight:"500" ,marginBottom:"35px"}}>Student Home</h1>
                </div>
        </div>
        <Components.HomeContainer style={{backgroundColor:"E8A0BF"}}>
            
            <div style={{"maxWidth":"33.33%","overflow":"hidden",float:"left"}}>
                <img src={img} />
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
            <div style={{"maxWwidth":"66.67%","overflow":"hidden",float:"right"}}>
                <div style={{"display":"flex","maxHeight":"10vh","justifyContent":"center","maxWidth":"100%","overflow":"hidden"}}>
                    <div style={{"float":"left","maxHeight":"10vh"}}><img src={logo} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                    <div style={{"float":"right","maxHeight":"10vh","justifyContent":"center","alignItems":"center","display":"flex"}}><h3>Student Home</h3></div>
                </div>
                <div style={{display:"flex"}}>
                <div style={{"display":"flex","overflow":"hidden", "marginTop":"3vh","maxHeight":"100%","maxWidth":"50%",flexDirection:"column",flex:"left"}}>
                    
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("AvailableSubjects")}}> 
                        <div > <img src={subjects} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>All Subjects</h4></div>
                        <p style={sty}>Gives list of all available subjects and teachers who are teching them make sure to register before classes start.</p>
                    </div>
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("AvailableClasses")}}>   
                        <div > <img src={classes} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>All classes</h4></div>
                        <p style={sty}>Gives list of all available classes and attend them before time to get your attendance and make sure to stayin right location.</p>
                    </div>

                    </div>

                    <div style={{"display":"flex","overflow":"hidden", "marginTop":"3vh","maxHeight":"100%","maxWidth":"50%",flexDirection:"column",flex:"right"}}>

                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("LinkFace")}}>
                        <div > <img src={LinkFace} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>Link Face</h4></div>
                        <p style={sty}>Make sure to link your face before attending classes and follow simple rules. No worries the website will take of rest.</p>
                    </div>
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("ViewAttendance")}}>
                        <div > <img src={sstat} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>View Attendance</h4></div>
                        <p style={sty}>Gives real time attendance of all the classes you attended and gives the attendance of each subject individually. </p>
                    </div>
                </div>
                </div>
            </div>
        </Components.HomeContainer>
        </div>
    );
}