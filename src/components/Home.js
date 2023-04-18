import '../stylesheets/Home.css'
import CarouselBG from '../staticFiles/CarouselBG.jpg'

const Home = () =>{
    return(
        <div>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                        <img src={CarouselBG} />
                    <div className="container">
                        <div className="carousel-caption text-left">
                            <h1><b>Easy to Use.</b></h1>
                            <p>A Simple and Easy to use Online Attendance tool for Colleges and Universities.</p>
                            <p><a className="btn btn-lg btn-primary" href="Register" role="button">Sign Up</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <img src={CarouselBG} />
                    <div className="container">
                        <div className="carousel-caption">
                            <h1><b>Efficient and Reliable.</b></h1>
                            <p>An Efficient and a Reliable tool to take Online and Offline Attendance.</p>
                            <p><a className="btn btn-lg btn-primary" href="credits" role="button">Learn more</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="#777"/></svg>
                    <img src={CarouselBG} />
                    <div className="container">
                        <div className="carousel-caption text-right">
                            <h1><b>Simple and Non-Complex.</b></h1>
                            <p>A Clean and an Elegant User Interface with Minimal Complexities.</p>
                            <p><a className="btn btn-lg btn-primary" href="Login" role="button">SignIn</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div>

        <div className="container-fluid">
        <div className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
                <p className="lead">An Online Attendance System for Colleges and Universities to take their Attendance.
                    If your organization faces any challenges while taking the attendance or your organization has any concerns regarding the system please contact us. 
                </p>
            </div>
        </div>
        </div>


        <div className="container-fluid padding">
            <div className="row welcome text-center">
                <div className="col-12">
                    <h1 className="display-4">Assess with ease.</h1>
                </div>
                <hr />
                <div className="col-12">
                    <p className="lead">
                        An Online Attendance Tool that allows for the swift, efficient and smooth calculation of college and university attendance.
                    </p>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row text-center padding">
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <i className="fa fa-bolt fa-3x" aria-hidden="true"></i>
                    <h3>Fast</h3>
                    <p>Fast and Smooth Attendance.</p>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-4">
                    <i className="fa fa-lock fa-3x" aria-hidden="true"></i>
                    <h3>Secure</h3>
                    <p>Secure Registration Process.</p>
                </div>
                <div className="col-sm-12 col-md-4">
                    <i className="fa fa-check-square fa-3x" aria-hidden="true"></i>
                    <h3>Reliable</h3>
                    <p>Reliable and Trustworthy Platform</p>
                </div>
            </div>
                <hr className="my-4"/>
            </div>
        </div>
    );
};  

export default Home;