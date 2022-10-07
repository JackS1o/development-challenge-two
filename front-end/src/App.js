import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePatient from './pages/CreatePatient';
import DeletePatient from './pages/DeletePatient';
import GetById from './pages/GetById';
import GetPatients from './pages/GetPatients';
import Home from './pages/Home';
import UpdatePatient from './pages/UpdatePatient';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createPatient" element={<CreatePatient />} />
      <Route path="/getPatient" element={<GetPatients />} />
      <Route path="/getPatientById" element={<GetById />} />
      <Route path="/deletePatient" element={<DeletePatient />} />
      <Route path="/updatePatient" element={<UpdatePatient />} />
    </Routes>
  );
}

export default App;
