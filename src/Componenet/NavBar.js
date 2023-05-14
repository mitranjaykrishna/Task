import React, { useState } from "react";

import { NavLink } from "react-router-dom";

// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
import "../styles/NavBar.css"



const NavBar=() =>{

    const [fix,setFix]=useState(false);

    const setFixed=()=>{
        if(window.scrollY >=0){
            setFix(true);
        }else{
            setFix(false);
        }
    }

    window.addEventListener("scroll",setFixed);

    return (
        <>
            <nav className={fix?"main_nav fix":"main_nav"}>
                <div className="logo">
                    <NavLink to="/"><img src={"./images/logo.svg"} alt="Logo" /> </NavLink>
                </div>
            </nav>
        </>
    );
};

export default NavBar;