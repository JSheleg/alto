import './trip-details.style.css';
import {Container, Row, Col, Image } from 'react-bootstrap'


const TripDetails = ({mission}) => {
    
    const {estimated_arrival, dropoff_location} = mission;
    const destination = dropoff_location.name;
    const eta = ((estimated_arrival.split(" "))[4]).slice(0,5);


    
    return(
        <>
        <Container fluid className="tripDetailOverview">
            <Row><h1 className='trip'>Your Trip</h1></Row>
            <Row className='timeRow'><h2><span className='time'>{eta}</span>PM</h2></Row>
            <Row className='arrivalRow'><p>Estimated arrival at </p> <span className='destinationSpan'>{ destination}</span></Row>
        </Container>
        </>
    )
}

export default TripDetails;