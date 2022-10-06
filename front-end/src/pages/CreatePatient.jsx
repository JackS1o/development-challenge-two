import React, { useState } from "react";
import { createNewPatient } from "../apis/api";

export default function CreatePatient() {
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
    const { patient_name, birth_date, email, patient_address } = patient;
    const result = await createNewPatient(patient_name, birth_date, email, patient_address);
    console.log(result);
  };

  return (
    <div className="container">
      <h1>Create Patient</h1>
      <form>
        <div className="form-group">
          <label htmlFor="patient_name">Patient Name</label>
          <input
            type="text"
            id="patient_name"
            placeholder="Enter Patient Name"
            name="patient_name"
            value={patient.patient_name}
            onChange={handleChange}
          />

          <label htmlFor="birth_date">Birth Date</label>
          <input
            type="text"
            id="birth_date"
            placeholder="Enter Birth Date"
            name="birth_date"
            value={patient.birth_date}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={patient.email}
            onChange={handleChange}
          />

          <label htmlFor="patient_address">Patient Address</label>
          <input
            type="text"
            id="patient_address"
            placeholder="Enter Patient Address"
            name="patient_address"
            value={patient.patient_address}
            onChange={handleChange}
          />

          <button type="button"
            onClick={postSubmit}
            >
            Submit
          </button>

          <button type="submit" className="btn btn-primary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
