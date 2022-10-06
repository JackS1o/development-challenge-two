import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreatePatient from './pages/CreatePatient';
import GetPatients from './pages/GetPatients';

function App() {
  return (
    <Routes>
      <Route path="/createPatient" element={<CreatePatient />} />
      <Route path="/getPatient" element={<GetPatients />} />
    </Routes>
  );
}

export default App;
