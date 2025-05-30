import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './home/Home';
import CountContainer from './components/CountContainer';
import ChooseUs from './home/ChooseUs';
import Testinomial from './components/Testinomial';

function App() {
  return (
    // <div className="App">
    <>
      <Navbar />
      <Home />
      <CountContainer />
      <ChooseUs />
      <Testinomial />
    </>
    // </div>
  );
}

export default App;
