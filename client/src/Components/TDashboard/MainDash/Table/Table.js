import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { useState } from "react";
// import { padding } from "@mui/system";
const api = process.env.REACT_APP_LINK;

// function createData(name, trackingId, date, status) {
//   return { name, trackingId, date, status };
// }

// const rows = [
//   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
//   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
//   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
//   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
// ];

// const makeStyle = (status) => {
//   if (status === "Approved") {
//     return {
//       background: "rgb(145 254 159 / 47%)",
//       color: "green",
//     };
//   } else if (status === "Pending") {
//     return {
//       background: "#ffadad8f",
//       color: "red",
//     };
//   } else {
//     return {
//       background: "#59bfff",
//       color: "white",
//     };
//   }
// };

console.log(api);

export default function BasicTable({ header, Index, Size }) {
  const [data, setdata] = useState([]);

  const response = async () => {
    const data = await (await fetch(`${api}/posts/`)).json();
    const Token = localStorage.getItem("token");
    let currentProfession;
    if (Token) {
      const currentUser = data.find((res) => res._id === Token);
      if (currentUser.profession === "student") {
        currentProfession = "teacher";
      } else {
        currentProfession = "student";
      }
      const uniqueData = data.filter(
        (res) => res.profession === currentProfession
      );
      setdata(uniqueData);
    }
  };

  //const individualData = data.find((result) => result.profession === "teacher");
  //console.log(individualData);
  React.useEffect(() => {
    response();
  }, []);
  // data.slice(0, 4).map((info, ind) => {
  //   ind < 4;
  //   return console.log(info.firstname);
  // });
  return (
    <div className="Table">
      <h3 style={{ padding: `${Size}rem` }}>{header}</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Serial</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Surname</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white", maxHeight: "400px" }}>
            {data.slice(0, Index).map((row, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell align="left">{row.firstname}</TableCell>
                <TableCell align="left">{row.lastname}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left" className="Details">
                  Details
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
