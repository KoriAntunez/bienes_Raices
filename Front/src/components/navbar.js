import React from 'react';
import '../App';
import {  Nav } from "react-bootstrap";

export class Navbar extends React.Component {
    render() {
        return(
            <Nav variant="tabs" defaultActiveKey="">
            <Nav.Item>
                <Nav.Link href="/registrar">Registrar Espacio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link  eventKey="link-1" href="/reservar">Reservar Espacio</Nav.Link>
            </Nav.Item>
            </Nav>
        );
    }
}
export default Navbar;
