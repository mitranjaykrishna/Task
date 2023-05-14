import React, { useState } from "react";

import { NavLink } from "react-router-dom";

// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
import "../styles/NavBar.css";
import { Button} from "react-bootstrap";


const NavBar = () => {
  
  

  const [fix, setFix] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 0) {
      setFix(true);
    } else {
      setFix(false);
    }
  };
  
  const [city,setCity]=useState(false);
  const [cart,setCart]=useState(false);

  // const navLinkStyles=({isActive})=>{
  //   return{
  //     visibility

  //   }
  // }

  const handleCart=()=>{
    setCart(true);
    setCity(true);

  }
  const handleCity=()=>{
    setCart(true);
    setCity(false);
    navCity();
  }

  const navCity=()=>{
    return{
      visibility: city?'visible':'hidden'
    }
  }

  const navCart=({isActive})=>{
    return{
      visibility: cart?'visible':'hidden' || isActive?'visible':'hidden'
    }
  }

  const navSeat=({isActive})=>{
    if(isActive){
    setCart(true);
    setCity(true);
    }
  }

 

  window.addEventListener("scroll", setFixed);

  return (
    <>
      <nav className={fix ? "main_nav fix" : "main_nav"}>
        <div className="logo">
          <NavLink exact="true" to="/">
            <img src={"./images/logo.svg"} alt="Logo" />{" "}
          </NavLink>
        </div>
        <div className="d-flex justify-content-end m-4 ">
        
          <NavLink exact="true"  to="/citySelect" onClick={handleCity} style={navCity} >
            <Button className="button1 buttonEffect" >
              <b>City Select <img src="./images/locationPin1.svg" alt=""/></b>
            </Button>
          </NavLink>
        </div>
        <div className="d-flex justify-content-start m-4 ">
          <NavLink exact="true"  to="/cart" className="CartStyle" onClick={handleCart} style={navCart} >
            <Button className="button2 buttonEffect ">
              <b>Go to Cart <img src="./images/cart.svg" alt=""/></b>
            </Button>
          </NavLink>
        </div>
        <div className="d-flex justify-content-start m-4 ">
          <NavLink exact="true" to="/selectSeats"  style={navSeat} >
          {/* selectSheat */}
          </NavLink>
        </div>
        
      </nav>
    </>
  );
};

export default NavBar;
