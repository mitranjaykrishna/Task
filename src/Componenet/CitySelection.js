import React, { useEffect, useState } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBTable, MDBTableBody } from "mdb-react-ui-kit";
import { styled } from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import TableRow from "./TableRow";
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
    </Wrapper>
  );
}

const Wrapper = styled.section`
 margin-top:8rem;
`;
