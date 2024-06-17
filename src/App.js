import './App.css';
import EventCard from './components/Events/EventCard';
import EventHostTypeContainer from './components/Events/EventHostTypeContainer';
import EventsContainer from './components/Events/EventsContainer';
import Footer from './components/common-comp/Footer';
import Header from './components/common-comp/Header';
import AllEventsCard from './components/particular-event/AllEventsCard';
import FilterOptions from './components/particular-event/FilterOptions';
import ParticularEventsSection from './components/particular-event/ParticularEventsSection';

function App() {
  return (
     <>
     <Header/>
     {/* <EventsContainer/> */}
     {/* <EventHostTypeContainer/> */}
     <ParticularEventsSection/>
     <Footer/>
     </>
  );
}

export default App;
