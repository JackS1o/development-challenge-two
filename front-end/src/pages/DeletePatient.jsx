import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "../index.css";
import { deletePatient } from "../apis/api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function DeletePatient() {
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [patientById, setPatientById] = useState([]);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleChange = ({ target }) => {
    const { value } = target;
    setPatientId(value);
  };

  const postSubmit = async () => {
    setLoading(true);
    const result = await deletePatient(patientId);
    setLoading(false);

    if (result.message) return setOpen(true) || setMessage(result);

    setPatientById([result]);
    setOpenSuccess(true);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenSuccess(false);
  };

  const homePage = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    if (patientId.length > 0) return setDisabled(false);
    setDisabled(true);
  }, [patientId]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ paddingTop: "3em", height: "100vh" }}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              width: "300px",
              height: "50vh",
              bgcolor: "rgba(173, 230, 238, 0.788)",
              borderRadius: "16px",
              paddingTop: "20px",
              textAlign: "center",
            }}
            Validate
            autoComplete="off"
          >
            <h1>Delete Patient By Id</h1>
            <TextField
              id="standard-basic"
              label="Patient Id"
              variant="standard"
              type="number"
              placeholder="Enter Patient Id"
              name="patient_id"
              value={patientId}
              onChange={handleChange}
            />
            {loading ? (
              <Button variant="contained">Loading</Button>
            ) : (
              <Button
                disabled={disabled}
                variant="contained"
                onClick={postSubmit}
              >
                Submit
              </Button>
            )}
            <Button
              variant="contained"
              color="error"
              onClick={homePage}
            >
              Home Page
            </Button>
          </Box>
          {patientById.map((patient, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "20px",
              }}
            >
              <p>
                <strong>Name: </strong>
                {patient.patient_name}
              </p>
              <p>
                <strong>Birth Date: </strong>
                {patient.birth_date}
              </p>
              <p>
                <strong>Email: </strong>
                {patient.email}
              </p>
              <p>
                <strong>Address: </strong>
                {patient.patient_address}
              </p>
            </Box>
          ))}
        </Box>
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
          Patient Deleted!
        </Alert>
      </Snackbar>
      </Container>
    </React.Fragment>
  );
}
