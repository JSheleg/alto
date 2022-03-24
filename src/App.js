
import './App.css';
import mission from "./assets/data/mission.json";
import { useState} from 'react';

import { Routes, Route } from "react-router-dom"
import Navigation from './components/navigation/navigation.component';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import YourTripPage from './pages/TripPage/TripPage.component';
import YourDriverPage from './pages/DriversPage/Driver.component';
import YourControlsPage from './pages/ControlsPage/Controls.component';
import YourVehiclePage from './pages/VehiclePage/Vehicle.component';


function App() {

  const [tripData, setTripData] = useState([mission]);
  // const [state, setState] = useState([]);
  const driver = tripData[0].driver;
  const vehicle = tripData[0].vehicle;
 
  return (
    <div className="App">

      <Header/>
      <Navigation/>
      <Routes>
        <Route path="/" element={<YourTripPage mission={tripData}/>} />
        <Route path="driver" element={<YourDriverPage mission={driver}/>}/>
        <Route path="vehicle" element={<YourVehiclePage mission = {vehicle}/>}/>
        <Route path="controls" element={<YourControlsPage mission={tripData}/>}/>
      </Routes>
      <Footer mission = {tripData}/>  
      
    </div>
  );
}

export default App;
