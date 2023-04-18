import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { TeacherHome } from './components/Teachers/CreateClass';
import { Test } from './components/Test';
import moment from 'moment'
import Mainbg from './staticFiles/mainbg.png'
import { Success } from './components/General/Success';
import { Student } from './components/Students/Student';
import { Footer } from './components/Footer';
import { Teacher } from './components/Teachers/Teacher';
import { Spinner } from './components/General/Spinner';
function App() {
  require('moment-timezone')
  moment.tz.setDefault('Asia/Kolkata')
  const divStyle = {
    backgroundImage: `url(${Mainbg})`
  };
  return (
    <div style={divStyle}>
      <header><Nav/></header>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Register" element={<Register/>}/>
            <Route path="/Student/*" element={<Student/>}/>
            <Route path="/Teacher/*" element={<Teacher/>}/>
            <Route path="/Test" element={<Test/>}/>
            <Route path="/Success" element={<Success/>}/>
            
            <Route path="/Spinner" element={<Spinner/>}/>
        </Routes>
      </BrowserRouter>
      <footer><Footer/></footer>
    </div>
  );
}

export default App;
