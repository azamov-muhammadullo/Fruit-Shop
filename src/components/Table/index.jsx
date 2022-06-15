import React, { useState } from "react";
import Table from '@mui/material/Table';
import { useSelector, useDispatch } from "react-redux";
import { Box, IconButton } from "@mui/material";
import { useLocation } from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Footer from '../Footer';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';



function TableDark() {
  const data = useSelector((s) => s.products.products);
  // console.log(data);

  const dispatch = useDispatch();
  const { state } = useLocation();


  const handleDel = (id) => {
    dispatch({ type: "DEL_PRODUCTS", payload: { id } });
  };

  function jami() {
    var a = data.forEach(element => {
      var b = Array.from(element.price)
    });
  }

  return (
    <Box style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Table style={{ width: '90%' }} striped bordered>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Narx</TableCell>
            <TableCell>#</TableCell>
            <TableCell>Kg</TableCell>
            <TableCell>Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((v, i) => (
            <TableRow key={i}>
              <TableCell>{v.id}</TableCell>
              <TableCell>{v.name}</TableCell>
              <TableCell>{v.price * v.kg}$</TableCell>
              <TableCell>{v.kg}kg</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDel(v.id)}
                  style={{ color: "white", color: "red" }}
                >
                  <DeleteForeverIcon/>
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Footer />
    </Box>
  );
}

export default TableDark;
