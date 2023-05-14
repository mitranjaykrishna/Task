// import { Container } from 'react-bootstrap';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './Componenet/NavBar';
import Login from './Componenet/Login';
import { UserAuthContext } from "./context/UserAuthContext";
import CitySelection from './Componenet/CitySelection';
import ProtectedRoute from './Componenet/ProtectedRoute';






function App() {
  return (
    <>
      <NavBar />
    {/* <Container> */}
      <UserAuthContext>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route exact path="/citySelect"  element={<ProtectedRoute><CitySelection /></ProtectedRoute>} />
        <Route />
        <Route />
      </Routes>
      </UserAuthContext>
    {/* </Container> */}
    </>


   
  );
}



export default App;
