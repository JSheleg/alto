import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import vehicle from "../../assets/images/Vehicle_photo.png";
import Button from "../../components/button/button.component";
const YourVehiclePage = ({mission}) => {

    const {color, image, license, make} = mission;
    console.log(mission)
    return(
        <>
        <Container className="car">
            <Image className="vehicle" src={vehicle} alt={image}/>
            <Row className="license">
            <h3>YOUR VEHICLE</h3>
            <br/>
            <h1>{license}</h1>
            </Row>
            <Row>
                <Col>
                    <h4>Make/Model</h4>
                    <h5>{make}</h5>
                </Col>
                <Col>
                    <h4>Color</h4>
                    <h5>{color}</h5>
                </Col>
            </Row>
            <Button mission={"identify vehicle"}/>



        </Container>
        </>
        
    )
}

export default YourVehiclePage;