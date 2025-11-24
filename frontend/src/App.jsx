import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';
import CreateResume from './Components/Createresume';
import Viewresume from './Components/Viewresume';
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/profile' element={<Dashboard/>}></Route>
        <Route path='/resume' element={<CreateResume/>}></Route>
        <Route path='/viewresume/:id' element={<Viewresume/>}></Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
