
import {Container, Row, Col, Image} from 'react-bootstrap';
import info from "../../assets/images/Info_icon.png";
import edit from "../../assets/images/Edit_icon.png";
import "./payment-details.style.css";

const PaymentDetails = ({mission}) => {
    // console.log("Payment Details", mission)
    const {estimated_fare_max, estimated_fare_min, passengers_max, passengers_min, payment,notes,pickup_location:{
        street_line1, city, state, zipcode}, dropoff_location:{ name:dropOffName, city:dropOffCity, state:dropOffState, zipcode:dropOffZipcode
            
        }} = mission;
    
    
    return (
        <>
        <Container className='payPickDrop'>
            <Row className='estimates'>
                <Col className='fareCol'> Estimated Fare: <br/> <span className='fare'>${(estimated_fare_min/100)} - ${(estimated_fare_max)/100} <Image src = {info}/></span></Col>
                <Col className='passCol'> Passengers: <br/> <span className='passengers'>{passengers_min} - {passengers_max}</span></Col>
                <Col className='payCol'> Payment: <br/> <span className='payment'>{payment}</span></Col>
            </Row>
            <Row className='pickUpStreet'>
                <Col>
                    <h6 className='streetline'>{street_line1}</h6> 
                </Col>
            </Row>
            <Row className='pickUpCityState'>
                <Col>
                    <h6 className='city'>{city}, {state}  {zipcode}</h6>
                </Col>
            </Row>
                
            
            <Row >
                <Col>
                    <h6 className='dropoffName'>{(dropOffName.split('-'))[0]}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className='terminal'>American  Airlines {(dropOffName.split('-'))[1]}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                <h6 className='cityStateZip'> {dropOffCity}, {dropOffState} {dropOffZipcode}</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='notes'>{notes}<Image src = {edit}/></p>
                </Col>
            </Row>
                
                
                
            
        </Container>
        </>
        
    )
}

export default PaymentDetails;