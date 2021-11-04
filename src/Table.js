import React from "react";
import {
  CircularProgress,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

export const Table = (props) => (
  <section
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    }}
  >
    <h3>Data Table</h3>
    {props.isLoading ? (
      <CircularProgress />
    ) : (
      <MuiTable
        aria-label="simple table"
        style={{
          width: "600px",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>User Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell>Location</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row, i) => (
            <TableRow key={i}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell>{row.location}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    )}
  </section>
);
