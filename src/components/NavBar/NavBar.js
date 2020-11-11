import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";


class NavBar extends React.Component {


    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        return (<Navbar bg="primary" variant="dark" expand="lg" className="justify-content-between">
            <Navbar.Brand href="#home">
                <img
                    alt=""
                    src="logo.svg"
                    width="60"
                    height="60"
                    className="d-inline-block"
                /><span className="d-inline-block ">LeBonCovid</span></Navbar.Brand>

            <Form.Control size="lg" type="text" placeholder="Large text"/>
            <Button size="lg" variant="outline-light">Search</Button>


            <Nav>
                <Nav.Link href="#home">
                    <Badge variant="light">9</Badge>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-cart3" fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                </Nav.Link>
                <div className="d-inline-block ">
                    <Nav.Link href="#home">Connection</Nav.Link>
                    <Nav.Link href="#features">Inscription</Nav.Link>
                </div>

            </Nav>
        </Navbar>);
    }
}

export default NavBar;