import { Link } from "react-router-dom"

export function Navbar () {
    return(
        <nav>
            <Link to="/"> Home </Link>
            <Link to ="/product"> Products </Link>
            <Link to ="/product/add"> Add Products </Link>
            <Link to="/signup"> Signup </Link>
            <Link to="/login"> Login </Link>
        </nav>
    )
}