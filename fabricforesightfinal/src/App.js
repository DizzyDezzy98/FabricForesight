import './App.css';
import RouterComponent from './components/RouterComponent';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home'
import { Budget } from './components/Budget';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='budget' element={<Budget />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='projects' element={<Projects />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

