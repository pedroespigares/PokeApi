import "./Footer.css";

function Footer(){
    return(
        <footer className="text-center text-lg-start">
            <div className="text-center p-3">
            © 2023 Developed by Pedro Espigares
            <a className="ps-3" href="https://github.com/pedroespigares/PokeApi" target="_blank"><i className="fa-brands fa-github"></i></a>
            </div>
        </footer>
    );
}

export default Footer;