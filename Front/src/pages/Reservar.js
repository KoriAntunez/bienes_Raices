import React  from "react";
import Espacio from "../components/card";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../components/navbar";

const Reservar = () => {
    return(
        <>
        <Navbar/>
        <Container>
            <Row className="justify-content-md-center">
                <h1>Reservar espacio</h1>
                
                <h4>Espacios actuales</h4>
            </Row>
            <Espacio/>
        </Container>
        </> 
        );
}
export default Reservar;