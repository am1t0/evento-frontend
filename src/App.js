import './App.css';
import EventCard from './components/Events/EventCard';
import EventHostTypeContainer from './components/Events/EventHostTypeContainer';
import EventsContainer from './components/Events/EventsContainer';
import Footer from './components/common-comp/Footer';
import Header from './components/common-comp/Header';

function App() {
  return (
     <>
     <Header/>
     {/* <EventsContainer/> */}
     <EventHostTypeContainer/>
     <Footer/>
     </>
  );
}

export default App;
