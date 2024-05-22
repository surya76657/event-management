import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import SeatSelection from './pages/SeatSelection';

function App() {
  return (
    <div className="App">
      <Home/>
	  <EventDetails/>
	  <SeatSelection/>
    </div>
  );
}

export default App;
