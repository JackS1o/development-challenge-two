import { User } from "@prisma/client";
import client from "../client";
import IPatient from "../interfaces/patientInterface";

export default class userService {
  
  createPatient = async (body: IPatient) => {
    const { patient_name, birth_date, email, patient_address } = body;
    const patient = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (patient) return { message: "Email already exists" };

    const user = await client.user.create({
      data: {
        patient_name,
        email,
        birth_date,
        patient_address,
      },
    });

    return user;
  }

  getPatients = async () => {
    const users = await client.user.findMany();
    
    return users;
  }

  getPatientById = async (id: number): Promise<User | boolean> => {
    const user = await client.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) return false;
    
    return user as User;
  }

  updatePatient = async (id: number, body: IPatient) => {
    const { patient_name } = body;
    
    const user = await client.user.update({
      where: {
        id,
      },
      data: {
        patient_name,
      },
    });

    return user;
  }

  deletePatient = async (id: number): Promise<User | boolean> => {
    const veryfiedUser = await this.getPatientById(id);

    if (!veryfiedUser) return false;

    const user = await client.user.delete({
      where: {
        id,
      },
    });

    return user;
  }
}