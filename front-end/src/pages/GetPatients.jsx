import React from "react";
import { getAllPatients } from "../apis/api";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import "../index.css";

const mapStyle = {
  border: "1px solid black",
  width: "500px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "16px",
  bgcolor: "#9cee8bad",
};

export default function GetPatients() {
  const [patients, setPatients] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getPatients = async () => {
    setLoading(true);
    const patient = await getAllPatients();
    setLoading(false);
    setPatients(patient);
  };

  return (
    <>
      <CssBaseline />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h1>Get Patients</h1>
          <Stack direction="row" spacing={2}>
            {loading ? (
              <Button variant="contained">Loading</Button>
            ) : (
              <Button variant="contained" onClick={getPatients}>
                Get Patients
              </Button>
            )}
          </Stack>
          {patients.map((patient, index) => (
            <Box sx={{ ...mapStyle }}>
              <p key={index}><strong>Name: </strong>{patient.patient_name}</p>
              <p key={index}><strong>Birth Date: </strong>{patient.birth_date}</p>
              <p key={index}><strong>Email: </strong>{patient.email}</p>
              <p key={index}><strong>Address: </strong>{patient.patient_address}</p>
            </Box>
          ))}
        </Box>
      </Container>
    </>
  );
}
