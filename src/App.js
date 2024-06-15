import './App.css';
import EventCard from './components/Events/EventCard';
import EventsContainer from './components/Events/EventsContainer';
import Footer from './components/common-comp/Footer';
import Header from './components/common-comp/Header';

function App() {
  return (
     <>
     <Header/>
     <EventsContainer/>
     <Footer/>
     </>
  );
}

export default App;
