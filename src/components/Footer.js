import '../stylesheets/Footer.css';

export const Footer = ()=>{

    return(
        <footer className="footer-distributed">

			<div className="footer-right">

				<a href="https://google.com"><i className="fa fa-facebook"></i></a>
				<a href="https://google.com"><i className="fa fa-twitter"></i></a>
				<a href="https://google.com"><i className="fa fa-linkedin"></i></a>
				<a href="https://github.com/II-AmiFooL-II"><i className="fa fa-github"></i></a>

			</div>

			<div className="footer-left">  

				<p className="footer-links">
					<a className="link-1" href="https://google.com">Home</a>

					<a href="https://google.com">Blog</a>

					<a href="https://google.com">About</a>

					<a href="https://google.com">Faq</a>

					<a href="https://google.com">Contact</a>
				</p>

				<p>FaceR &copy; 2023</p>
			</div>

		</footer>
    );
}