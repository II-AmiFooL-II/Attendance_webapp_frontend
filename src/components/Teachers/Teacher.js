import {Route, Routes } from 'react-router-dom';
import { TeachersViewAttendance } from './TeachersViewAttendance';
import { TeacherHome } from './TeacherHome';
import { CreateClass } from './CreateClass';

export const Teacher = ()=>{
    return(
            <Routes>
                <Route path="/" element={<TeacherHome/>}/>
                <Route path="/CreateClass" element={<CreateClass/>}/>
                <Route path="/ViewAttendance" element={<TeachersViewAttendance/>}/>
            </Routes>
    );
}