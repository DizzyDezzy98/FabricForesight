import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import { Home } from './Home'
import Navbar from './Navbar';
import { Budget } from './Budget';
import { Login } from './Login';
import { Signup } from './Signup';
import { Projects } from './Projects';

export default function ReactComponent (){
return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='budget' element={<Budget />}></Route>
      <Route path='login' element={<Login />}></Route>
      <Route path='signup' element={<Signup />}></Route>
      <Route path='projects' element={<Projects />}></Route>
    </Routes>
    <Navbar />
    </BrowserRouter>
)
}