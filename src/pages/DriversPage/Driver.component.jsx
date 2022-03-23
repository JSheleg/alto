import React from "react";
import {Container, Row, Col, Image} from 'react-bootstrap';
import driver from "../../assets/images/Driver_photo.png";
import Button from "../../components/button/button.component";
import "./Driver.style.css";
const YourDriverPage = ({mission}) => {
    const {image, name, bio} = mission;

    return(
        <>
        <Container>
            <Image src={driver} alt={image} className="driverimg"/>
            <Row className="driverName">               
                <h6>YOUR DRIVER</h6>
                <br/>
                <h2>{name}</h2>
            </Row>
            <Row className="bio">
                <p>{bio}</p>
            </Row>
            <Button mission={"Contact Driver"}/>
        </Container>        
        </>

    
    )
}

export default YourDriverPage;