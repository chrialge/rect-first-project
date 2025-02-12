import "./Navbar.css"
import Link from "./Link";

function Navbar(){
    return (
        <ul>
            <li>
                <Link>qwerty</Link>
            </li>
            <li>
                <Link>Contatti</Link>
            </li>
            <li>
                <Link>About</Link>
            </li>
            <li>
                <Link>Sop</Link>
            </li>
            <li>
                <Link>iscrivetevi al mio canale!</Link>
            </li>
        </ul>
    )
}

export default Navbar;