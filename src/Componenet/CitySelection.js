import React, { useEffect, useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { styled } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import TableRow from "./TableRow";
import { Button } from "react-bootstrap";
export default function CitySelection() {

  const [rows,setRows]=useState([]);
  

  

  const cityCollection=collection(db,"City");
  useEffect(()=>{
    getUsers();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getUsers=async()=>{
    const data=await getDocs(cityCollection);
    setRows(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
  }

  console.log(rows);

  const display=(dataSet)=>{
    return (
      dataSet.map((data)=>{
        
        return <TableRow data={data} />

      })
    )
  }

  return (
    <Wrapper>
      <MDBTable align="middle">
        <MDBTableBody>
          {display(rows)}
        </MDBTableBody>
      </MDBTable>

      <div className="d-flex justify-content-center m-5">
        <h1>Not Found The City you Where Looking For 😕</h1>
      </div>
      <div className="d-flex justify-content-center m-5">
        <Button className="CityButton" >Contact Sales <span> ☎</span></Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
 margin-top:8rem;

 .CityButton{
  color:black;
  background-color:#F2F2F2;
  border-radius:27px;

  span{
    color:red;
  }
 }
`;
