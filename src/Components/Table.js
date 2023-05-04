import React from "react";

// import "./styled/Table.css";

const Table = (props) => {
  return (
    <>
      <tr>
        <td>{props.id}</td>
        <td>{props.name}</td>
        <td>{props.userName}</td>
        <td>{props.email}</td>
        <td>{props.address.street}</td>
        <td>{props.phone}</td>
        <td>{props.website}</td>

      </tr>
    </>
  );
};

export default Table;
