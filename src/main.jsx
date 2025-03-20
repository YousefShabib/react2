import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import FlightSearch from "./components/FlightSearch/FlightSearch.jsx";
import RecentSearches from "./components/RecentSearches/RecentSearches.jsx";
import PrepareTrip from "./components/PrepareTrip/PrepareTrip.jsx";
import Destinations from "./components/Destinations/destinations.jsx";
import HolidayCard from "./components/HolidayCard/HolidayCard.jsx";
import StayCard from "./components/StayCard/StayCard.jsx";
import Subscribe from "./components/subscribe/subscribe.jsx";
import Footer from "./components/Fotter/Fotter.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
      <FlightSearch/>
    <RecentSearches/>
      <PrepareTrip/>
      <Destinations/>
      <HolidayCard/>
      <StayCard/>
      <Subscribe/>
      <Footer/>




  </StrictMode>,
)
