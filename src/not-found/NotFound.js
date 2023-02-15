import { Link } from "react-router-dom";
import "./NotFound.css";

function NotFound(){
    return (
        <main class="d-flex flex-column justify-content-center align-items-center">
            <h1>404</h1>
            <p class="notfound-par">Sorry, we couldn't find the page you were looking for.</p>
            <p class="notfound-par">Try going back to the <Link class="notfound-link" to="/">home page</Link>.</p>
        </main>
    )
}

export default NotFound;