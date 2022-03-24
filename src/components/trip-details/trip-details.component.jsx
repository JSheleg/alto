import './trip-details.style.css';
import {Container, Row} from 'react-bootstrap'


const TripDetails = ({mission}) => {
    
    const {estimated_arrival, dropoff_location} = mission;
    const destination = dropoff_location.name;
    const eta = ((estimated_arrival.split(" "))[4]).slice(0,4);


    
    return(
        <>
        <Container fluid className="tripDetailOverview">
            <Row><h1 className='trip'>Your Trip</h1></Row>
            <Row className='timeRow'><h2 className='dayTime'><span className='time'>{eta}</span>PM</h2></Row>
            <Row className='arrivalRow'><p>Estimated arrival at </p> <span className='destinationSpan'>{ destination}</span></Row>
        </Container>
        </>
    )
}

export default TripDetails;