import React from "react";
import {Container, Row } from 'react-bootstrap'
import TripDetails from "../../components/trip-details/trip-details.component";
import PaymentDetails from "../../components/payment-details/payment-details.component";
import Button from "../../components/button/button.component";

const YourTripPage = ({mission}) => {
    const destination =  mission[0].trip;
    console.log(mission)

    return(
        <div className="tripPage">

            <Container>

                <Row>
                <TripDetails mission={destination}/>
                </Row>
            </Container>
        
        <PaymentDetails mission={destination}/>

        <Container>
            <Row>
                <Button mission={"cancel trip"}/>
            </Row>
        </Container>
        
        </div>
        
    )
}

export default YourTripPage;