import React, { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { getPatientsById } from "../apis/api";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function GetById() {
  const [patientId, setPatientId] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = ({ target }) => {
    const { value } = target;
    setPatientId(value);
  };

  const postSubmit = async () => {
    setLoading(true);
    const result = await getPatientsById(patientId);
    setLoading(false);

    if (result.message)
      return setOpen(true) || setMessage(result);
  };

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            width: "500px",
            height: "80vh",
            bgcolor: "rgba(173, 230, 238, 0.788)",
            borderRadius: "16px",
            paddingTop: "20px",
          }}
          Validate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Patient Id"
            variant="standard"
            type="text"
            placeholder="Enter Patient Id"
            name="patient_id"
            value={patientId}
            onChange={handleChange}
          />
          {loading ? (
            <Button variant="contained">Loading</Button>
          ) : (
            <Button variant="contained" onClick={postSubmit}>
              Submit
            </Button>
          )}
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message.message}
        </Alert>
      </Snackbar>
      </Container>
    </React.Fragment>
  );
}
