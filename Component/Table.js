import React from "react";
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell } from "@mui/material";
import { teal } from "@mui/material/colors";

function TableComponent({ tableHead, tableBody }) {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow sx={{ bgcolor: teal[300] }}>
            {tableHead.map((head) => {
              return (
                <TableCell key={head.id} sx={{ fontWeight: 700, color: "#fff", fontSize: 18 }}>
                  {head.title}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.map((e, i) => {
            const u = Object.keys(e).splice(1);
            const array = Array(tableBody.length - 1);
            console.log(array);
            return (
              <TableRow>
                <TableCell>{e.title}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
