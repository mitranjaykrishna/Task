import React from 'react'
import { TiChevronRight } from "react-icons/ti";
import { MDBBtn} from "mdb-react-ui-kit";

import { Link } from 'react-router-dom';


export default function TableRow(props) {
  
    const {City,Date,id}=props.data;
    return (
    
    <>
        <tr key={id} className='hover-overlay hover-zoom hover-shadow ripple ' >
            <td>
              <div className="d-flex align-items-center ms-5">
                <img
                  src="./images/selectCity.svg"
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle "
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1">{City}</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1 ">{Date}</p>
            </td>
            <td >
              
              <MDBBtn color="link" rounded size="sm" type='submit' >
              <Link   to="/selectSeats"><TiChevronRight /></Link>
              </MDBBtn>
              
            </td>
          </tr>
    </>
  )
}
