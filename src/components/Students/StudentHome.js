import * as Components from '../../stylesheets/Style_components'
import logo from '../../staticFiles/student.png';
import stat from '../../staticFiles/stat.gif'
import sstat from '../../staticFiles/sstat.png'
import subjects from '../../staticFiles/subjects.png'
import classes from '../../staticFiles/attendclass.png'
import LinkFace from '../../staticFiles/linkface.png'
import { useNavigate } from 'react-router-dom';

export const StudentHome = ()=>{
    const navigate = useNavigate(); 

    return (
        <Components.HomeContainer>
            <div style={{"width":"100%","overflow":"hidden"}}>
                <div style={{"display":"flex","maxHeight":"10vh","justifyContent":"center","maxWidth":"100%","overflow":"hidden"}}>
                    <div style={{"float":"left","maxHeight":"10vh"}}><img src={logo} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                    <div style={{"float":"right","maxHeight":"10vh","justifyContent":"center","alignItems":"center","display":"flex"}}><h3>Student Home</h3></div>
                </div>

                <div style={{"display":"flex","overflow":"hidden", "marginTop":"3vh","maxHeight":"100%","maxWidth":"100%"}}>
                    
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("AvailableSubjects")}}> 
                        <div > <img src={subjects} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>All Subjects</h4></div>
                        <p>Gives list of all available subjects and teachers who are teching them make sure to register before classes start.</p>
                    </div>

                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("AvailableClasses")}}>   
                        <div > <img src={classes} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>All classes</h4></div>
                        <p>Gives list of all available classes and attend them before time to get your attendance and make sure to stayin right location.</p>
                    </div>
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("LinkFace")}}>
                        <div > <img src={LinkFace} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>Link Face</h4></div>
                        <p>Make sure to link your face before attending classes and follow simple rules. No worries the website will take of rest.</p>
                    </div>
                    
                    <div style={{"minWidth":"25%" ,"maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center" }} onClick={()=>{navigate("ViewAttendance")}}>
                        <div > <img src={sstat} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>View Attendance</h4></div>
                        <p>Gives real time attendance of all the classes you attended and gives the attendance of each subject individually. </p>
                    </div>
                </div>
            </div>
        </Components.HomeContainer>
    );
}