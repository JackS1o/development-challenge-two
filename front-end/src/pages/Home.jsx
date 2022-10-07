import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              border: "1px solid black",
              bgcolor: "#11a0d4",
              padding: "20px",
              width: "400px",
            }}
          >
            <h1>Create Patient</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              border: "1px solid black",
              bgcolor: "#1ac94c",
              padding: "20px",
              width: "400px",
            }}
          >
            <h1>Get All Patients</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              border: "1px solid black",
              bgcolor: "#aed923",
              padding: "20px",
              width: "400px",
            }}
          >
            <h1>Get Patient By ID</h1>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "16px",
              border: "1px solid black",
              bgcolor: "#f2423f",
              padding: "20px",
              width: "400px",
            }}
          >
            <h1>Delete Patient</h1>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
