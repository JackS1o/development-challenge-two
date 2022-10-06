import React, { useState } from "react";
import { createNewPatient } from "../apis/api";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CreatePatient() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [patient, setPatient] = useState({
    patient_name: "",
    birth_date: "",
    email: "",
    patient_address: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPatient({
      ...patient,
      [name]: value,
    });
  };

  const postSubmit = async () => {
    setLoading(true);
    const { patient_name, birth_date, email, patient_address } = patient;
    const result = await createNewPatient(
      patient_name,
      birth_date,
      email,
      patient_address
    );
    setLoading(false);

    if (result.message || result.error)
      return setOpen(true), setMessage(result);

    setOpenSuccess(true);
    console.log(result);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenSuccess(false);
  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        Validate
        autoComplete="on"
      >
        <TextField
          id="standard-basic"
          label="Patient Name"
          variant="standard"
          type="text"
          placeholder="Enter Patient Name"
          name="patient_name"
          value={patient.patient_name}
          onChange={handleChange}
        />

        <TextField
          label="Birth Date"
          variant="standard"
          type="text"
          id="birth_date"
          placeholder="Enter Birth Date"
          name="birth_date"
          value={patient.birth_date}
          onChange={handleChange}
        />

        <TextField
          label="Email"
          variant="standard"
          type="text"
          id="email"
          placeholder="Enter Email"
          name="email"
          value={patient.email}
          onChange={handleChange}
        />

        <TextField
          label="Patient Address"
          variant="standard"
          type="text"
          id="patient_address"
          placeholder="Enter Patient Address"
          name="patient_address"
          value={patient.patient_address}
          onChange={handleChange}
        />
      </Box>

      {loading ? (
        <Button variant="contained">Loading</Button>
      ) : (
        <Button variant="contained" onClick={postSubmit}>
          Submit
        </Button>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Patient Registred!
        </Alert>
      </Snackbar>
    </Container>
  );
}
