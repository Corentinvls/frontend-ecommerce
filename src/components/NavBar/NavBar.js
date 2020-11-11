import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";


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
            <Form.Control type="text" placeholder="Rechercher votre produit"/>
            <Button variant="outline-light">Search</Button>
            <Nav>
                <Nav.Link href="#home">Connection</Nav.Link>
                <Nav.Link href="#features">Inscription</Nav.Link>
            </Nav>
        </Navbar>);
    }
}

export default NavBar;