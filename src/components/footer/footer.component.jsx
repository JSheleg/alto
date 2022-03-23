import React from "react";
import './footer.style.css';
import {Container, Row, Col, Image } from 'react-bootstrap'
import profile from "../../assets/images/Profile_icon.png";
import vibes from "../../assets/images/Vibes_icon.png";


const Footer = ({mission}) => {
    const destination =  mission[0].trip.dropoff_location.name;
    const modDestination = (destination.split('-'))[0];
    const eta = mission[0].trip.estimated_arrival;
    const modEta = ((eta.split(" "))[4]).slice(0,5);
   
    
    
    return (
        <>
        <Container fluid className="footer">
            <Row >
                <Col className="my-auto">
                    <Image src = {profile}/>
                </Col>
                <Col>
                    <Row>
                        <Col className="destination"> 
                            <p>{modDestination}</p> 
                        </Col>
                    </Row>
                    <Row>
                        <Col className="eta">
                            <p>ETA {modEta}  PM</p>
                        </Col>
                    </Row>
                </Col>
                <Col className="my-auto">
                    <Image src = {vibes}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Footer;
