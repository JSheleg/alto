import React from "react";
import './Controls.style.css';
import TripDetails from "../../components/trip-details/trip-details.component";
import mapIcon from "../../assets/images/Map_icon.png"
import mapOverview from "../../assets/images/Map_overview.png";
import Button from "../../components/button/button.component";
import {Container, Row, Col, Image } from 'react-bootstrap'

const YourControlsPage = ({mission}) => {
    
    const destination =  mission[0].trip;
    const vibe = mission[0].vibe.name;
    
    return(

        <>
            <Container> 
                <Row className="map">
                    <Image src={mapOverview} className="mapOverview"/>
                </Row>
                <Row className="icon">
                    <Image src={mapIcon} className="mapIcon"/>
                </Row>
                <Row className="tripDetails">
                    <TripDetails mission={destination}/>
                </Row>
                <Row className="vibes">
                    <Col className="vibesCol">Current Vibe <br/><span className="vibeName">{vibe}</span></Col>
                </Row>
                <Button mission={"Change Vehicle Vibe"} className="brown"/>

            </Container>
        
        </>

        
    )
}

export default YourControlsPage;