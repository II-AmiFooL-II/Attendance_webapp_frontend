import * as Components from '../../stylesheets/Style_components'
import logo from '../../staticFiles/teacher.png';
import sstat from '../../staticFiles/sstat.png'
import classes from '../../staticFiles/attendclass.png'
import { useNavigate } from 'react-router-dom';

export const TeacherHome = ()=>{
    const navigate = useNavigate(); 

    return (
        <Components.HomeContainer>
            <div style={{"width":"100%","overflow":"hidden"}}>
                <div style={{"display":"flex","maxHeight":"10vh","justifyContent":"center","maxWidth":"100%","overflow":"hidden"}}>
                    <div style={{"float":"left","maxHeight":"10vh"}}><img src={logo} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                    <div style={{"float":"right","maxHeight":"10vh","justifyContent":"center","alignItems":"center","display":"flex"}}><h3>Teacher Home</h3></div>
                </div>

                <div style={{"display":"flex","overflow":"hidden", "marginTop":"3vh","maxHeight":"100%","maxWidth":"100%","justifyContent":"center","alignItems":"center"}}>
                    

                    <div style={{"minWidth":"25%" ,"maxWidth":"25%","maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center"}} onClick={()=>{navigate("CreateClass")}}>   
                        <div > <img src={classes} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>CreateClass</h4></div>
                        <p>Create class and it notify all students who registered for the class and pick location of class to make sure students are there.</p>
                    </div>
                    
                    
                    <div style={{"minWidth":"25%" ,"maxWidth":"25%","maxHeight":"100%","justifyContent":"center","alignItems":"center","display":"grid","textAlign":"center" }} onClick={()=>{navigate("ViewAttendance")}}>
                        <div > <img src={sstat} style={{"maxHeight":"100%","maxWidth":"100%"}}/></div>
                        <div > <h4>View Attendance</h4></div>
                        <p>Gives real time attendance of all the Students who attended your class and attendance of each student is given individually. </p>
                    </div>
                </div>
            </div>
        </Components.HomeContainer>
    );
}