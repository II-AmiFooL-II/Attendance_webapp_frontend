import '../stylesheets/Nav.css';
import logo from '../staticFiles/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';



const Nav = () => {
    const [data,setData] = useState(false);
    function removeUser() {
        localStorage.removeItem('uname')
        localStorage.removeItem('x-access-token')
        setData(false);
    }
    useEffect(()=>{
        if ('uname' in localStorage.getItem){
            setData(true);
        }
    },[])
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid" >
                <img src={logo} alt="" width="45px"/>
                
                <a className="navbar-brand" href="/" id='logo'>FaceR</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/Credits">Credits</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Register">Register</a>
                    </li>
                    {data?(<li className="nav-item">
                        <a className="nav-link" onClick={removeUser}>SignOut</a>
                    </li>):
                        (
                        <li className="nav-item">
                            <a className="nav-link" href="/Login">SigIn</a>
                        </li>
                        )
                    }
                </ul>
            </div>
        </div>
    </nav>
    );
}

export default Nav;