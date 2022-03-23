
import './App.css';
import mission from "./assets/data/mission.json";
import { useState} from 'react';
import { Link , BrowserRouter,Route, Routes, Router} from "react-router-dom";
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import YourTripPage from './pages/TripPage/TripPage.component';
import YourDriverPage from './pages/DriversPage/Driver.component';
import YourControlsPage from './pages/ControlsPage/Controls.component';
import YourVehiclePage from './pages/VehiclePage/Vehicle.component';


function App() {

  const [tripData, setTripData] = useState([mission]);
  const driver = tripData[0].driver;
  const vehicle = tripData[0].vehicle;
  
  
  


  
  return (
    <div className="App">
      
      <Header/>
        
        {/* <YourTripPage mission={tripData}/>  */}
        {/* <YourDriverPage mission={driver}/> */}
        <YourVehiclePage mission = {vehicle}/>
        {/* <YourControlsPage mission={tripData}/> */}

        
        
      
      <Footer mission = {tripData}/>
    </div>
  );
}

export default App;
