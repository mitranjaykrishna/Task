// import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Componenet/NavBar';
import Login from './Componenet/Login';
import { UserAuthContext } from "./context/UserAuthContext";
import CitySelection from './Componenet/CitySelection';
import ProtectedRoute from './Componenet/ProtectedRoute';
import SelectSeats from './Componenet/SelectSeats';
import Cart from './Componenet/Cart';






function App() {
  return (
    <>
    <UserAuthContext>
      <NavBar />
    {/* <Container> */}
      
      <Routes>
        <Route exact path="/"  element={<Login />} />
        <Route exact path="/selectSeats"  element={<SelectSeats />} />
        <Route exact path="/cart"  element={<Cart />} />
        <Route exact path="/citySelect"  element={<ProtectedRoute ><CitySelection /></ProtectedRoute>} />
        <Route />
      </Routes>
      </UserAuthContext>
    {/* </Container> */}
    </>


   
  );
}



export default App;
