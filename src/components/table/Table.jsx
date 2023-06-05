import React, { useState } from "react";
import {
  TableStyled,
  TableData,
  TableHead,
  TableRow,
  ButtonStyledTable,
} from "./TableStyled";
import ButtonTable from "./ButtonTable";

function Table(props) {
  return (
    <TableStyled>
      <TableRow>
        <TableHead>Name</TableHead>
        <TableHead>Excuse</TableHead>
        <TableHead>Count</TableHead>
      </TableRow>
      {props.users.map((user) => (
        <TableRow key={user.id}>
          <TableData>{user.name}</TableData>
          <TableData>{user.excuse}</TableData>
          <TableData>{user.count}</TableData>
          <ButtonTable />
        </TableRow>
      ))}
    </TableStyled>
  );
}

export default Table;
