import React from "react";
import Drawer from "../Component/Drawer";
import { Container, Typography } from "@mui/material";
import TableComponent from "../Component/Table";
import useFetchingData from "../Component/useFetchingData";

function StudentCares() {
  const { data } = useFetchingData();
  const HEAD = [
    {
      id: "name",
      title: "Nama",
    },
    {
      id: "address",
      title: "Alamat",
    },
    {
      id: "status",
      title: "Status",
    },
  ];
  const BODY = [
    {
      id: 1,
      title: "Nurhamsah",
      address: "Ngasi Mojo Kediri",
      staus: "bantuan",
    },
    {
      id: 2,
      title: "budi masdion",
      address: "Ngasi Mojo Kediri",
      staus: "bantuan",
    },
    {
      id: 3,
      title: "Jakaria Ismail",
      address: "Ngasi Mojo Kediri",
      staus: "bantuan",
    },
    {
      id: 4,
      title: "Kasanah",
      address: "Ploso",
      staus: "Mojo",
    },
  ];
  const Users = BODY.map((e, i) => ({
    id: e.id,
    title: e.title,
    address: e.address,
    status: e.status,
  }));
  console.log(Users);
  return (
    <Drawer>
      <Container>
        <TableComponent tableHead={HEAD} tableBody={Users} />
      </Container>
    </Drawer>
  );
}

export default StudentCares;
