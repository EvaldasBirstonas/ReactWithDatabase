import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Link className="navbar-brand" to="/">Logo</Link>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Link className="nav-link" to="/">
                    Home
                </Link>
                <Link className="nav-link" to="/addForm">
                    Add Item
                </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar
