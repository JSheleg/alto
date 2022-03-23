import React from "react";
import {Container, Row, Col, Image } from 'react-bootstrap'
import TripDetails from "../../components/trip-details/trip-details.component";
import PaymentDetails from "../../components/payment-details/payment-details.component";
import Button from "../../components/button/button.component";

const YourTripPage = ({mission}) => {
    const destination =  mission[0].trip;
    console.log(mission)

    return(
        <div className="tripPage">
        <TripDetails mission={destination}/>
        <PaymentDetails mission={destination}/>
        <Button mission={"cancel trip"}/>
        </div>
        
    )
}

export default YourTripPage;