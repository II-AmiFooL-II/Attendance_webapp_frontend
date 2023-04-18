import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StudentHome } from './StudentHome';
import { Success } from '../General/Success';
import { AvailableClasses } from './AvailableClasses';
import { Attend_class } from './Attend_class';
import { AvailableSubjects } from './AvailableSubjects';
import {StudentsViewAttendance} from './StudentsViewAttendance'
import { LinkFace } from './LinkFace';
import { ViewLocation } from './ViewLocation';

export const Student = ()=>{

    return (
            <Routes>
                <Route path="/" element={<StudentHome/>}/>  
                <Route path="/LinkFace" element={<LinkFace/>}/>
                <Route path="/AvailableClasses" element={<AvailableClasses/>}/>
                <Route path="/AvailableSubjects" element={<AvailableSubjects/>}/>
                <Route path="/Attend_class" element={<Attend_class/>}/>
                <Route path="/ViewAttendance" element={<StudentsViewAttendance/>}/>
                <Route path="/ViewLocation" element={<ViewLocation/>}/>
                <Route path="/Success" element={<Success/>}/>
            </Routes>
        
    );
}