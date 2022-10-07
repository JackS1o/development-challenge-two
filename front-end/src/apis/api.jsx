const getAllPatients = async () => {
  const url = "http://localhost:3001/patient";
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getPatientsById = async (id) => {
  const url = `http://localhost:3001/patient/${id}`;
  const result = await fetch(url, {
    method: "GET",
  });
  const data = await result.json();
  return data;
};

const createNewPatient = async (patient_name, birth_date, email, patient_address) => {
  const url = "http://localhost:3001/patient";
  const result = await fetch(url, {
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient_name,
        birth_date,
        email,
        patient_address,
      }),
  });

  const data = await result.json();
  return data;
};

const updatePatient = async (update) => {
  const { patient_id, patient_name, birth_date, email, patient_address } = update;
  const url = `http://localhost:3001/patient/${patient_id}`;
  const result = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      patient_name,
      birth_date,
      email,
      patient_address,
    }),
  });
  const data = await result.json();
  return data;
};

const deletePatient = async (id) => {
  const url = `http://localhost:3001/patient/${id}`;
  const result = await fetch(url, {
    method: "DELETE",
  });
  const data = await result.json();
  return data;
};

export {
  getAllPatients,
  getPatientsById,
  deletePatient,
  createNewPatient,
  updatePatient
};
