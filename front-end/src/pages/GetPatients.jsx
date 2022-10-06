import React from "react";
import { getAllPatients } from "../apis/api";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function GetPatients() {
  const [patients, setPatients] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getPatients = async () => {
    setLoading(true);
    const patient = await getAllPatients();
    setLoading(false);
    setPatients(patient);
    console.log(patient);
  };

  return (
    <div className="container">
      <h1>Get Patients</h1>
      <Stack direction="row" spacing={2}>
        {loading ? (
          <Button variant="contained">
            Loading
          </Button>
        ) : (
          <Button variant="contained" onClick={getPatients}>
            Get Patients
          </Button>
        )}
      </Stack>
      <div>
        {patients.map((patient, index) => (
          <h1 key={index}>{patient.patient_name}</h1>
        ))}
      </div>
    </div>
  );
}
