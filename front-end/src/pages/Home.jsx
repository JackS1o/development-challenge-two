import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "../index.css";

const boxStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  border: "1px solid black",
  width: "400px",
  color: "#000000",
  height: "100px",
};

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            bgcolor: "#fff",
            height: "100vh",
            width: "40vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <Link to="/createPatient">
            <Box
              sx={{
                ...boxStyle,
                bgcolor: "#11a0d4",
                "&:hover": {
                  bgcolor: "#0f6381",
                  transition: "0.5s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <h2>Create Patient</h2>
            </Box>
          </Link>
          <Link to="/getPatient">
            <Box
              sx={{
                ...boxStyle,
                bgcolor: "#1ac94c",
                "&:hover": {
                  bgcolor: "#138a35",
                  transition: "0.5s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <h2>Get All Patients</h2>
            </Box>
          </Link>
          <Link to="/getPatientById">
            <Box
              sx={{
                ...boxStyle,
                bgcolor: "#aed923",
                "&:hover": {
                  bgcolor: "#779419",
                  transition: "0.5s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <h2>Get Patient By ID</h2>
            </Box>
          </Link>
          <Link to="/updatePatient">
            <Box
              sx={{
                ...boxStyle,
                bgcolor: "#4b2fc9",
                "&:hover": {
                  bgcolor: "#2b1881",
                  transition: "0.5s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <h2>Update Patient Data</h2>
            </Box>
          </Link>
          <Link to="/deletePatient">
            <Box
              sx={{
                ...boxStyle,
                bgcolor: "#f2423f",
                "&:hover": {
                  bgcolor: "#9c2b29",
                  transition: "0.5s",
                  transform: "scale(1.1)",
                },
              }}
            >
              <h2>Delete Patient</h2>
            </Box>
          </Link>
        </Box>
      </Container>
    </React.Fragment>
  );
}
