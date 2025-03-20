import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import FlightSearch from "./components/FlightSearch/FlightSearch.jsx";
import Destinations from "./components/Destinations/destinations.jsx";
import Footer from "./components/Fotter/Fotter.jsx";
import RecentSearches from "./components/RecentSearches/RecentSearches.jsx";
import PrepareTrip from "./components/PrepareTrip/PrepareTrip.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
      <FlightSearch/>





  </StrictMode>,
)
