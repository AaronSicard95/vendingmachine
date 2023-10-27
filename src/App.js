import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import VendingMachine from './vending';
import Soda from './soda';
import Poptart from './poptarts';
import Ramen from './ramen';
import NavBar from './navbar';

function App() {
  return <div>
  <BrowserRouter>
  <NavBar/>
  <Routes>
  <Route exact path="/" element={<VendingMachine/>}/>
  <Route exact path="/soda" element={<Soda/>}/>
  <Route exact path="/poptart" element={<Poptart/>}/>
  <Route exact path="/ramen" element={<Ramen/>}/>
  </Routes>
  </BrowserRouter>
  </div>
}

export default App;
