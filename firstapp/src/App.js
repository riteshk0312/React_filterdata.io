import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Filterdata from './Components/Filterdata';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/filterdata' element={<Filterdata/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
