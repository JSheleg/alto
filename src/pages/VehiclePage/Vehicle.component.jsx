import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import vehicle from "../../assets/images/Vehicle_photo.png";
import Button from "../../components/button/button.component";
import "./Vehicle.style.css";

const YourVehiclePage = ({mission}) => {

    const {color, image, license, make} = mission;
    console.log(mission)
    return(
        <>
        <Container className="car">
            <Image className="vehicle" src={vehicle} alt={image}/>
            <Row >
            <h3 className="vehicleTitle">YOUR VEHICLE</h3>
            </Row>
            <Row>
                <h1 className="license">{license}</h1>
            </Row>
            
            
            <Row>
                <Col>
                    <h4 className="makeTitle">Make / Model</h4>
                    <h5 className="make">{make}</h5>
                </Col>
                <Col>
                    <h4 className="colorTitle">Color</h4>
                    <h5 className="color">{color}</h5>
                </Col>
            </Row>
            <Button mission={"identify vehicle"}/>



        </Container>
        </>
        
    )
}

export default YourVehiclePage;