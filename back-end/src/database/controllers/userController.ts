import { Request, Response } from "express";
import userService from "../services/userService";

export default class UserController {
  constructor(private service: userService) {}

  createPatient = async (req: Request, res: Response) => {
    const { body } = req;
    
    const user = await this.service.createPatient(body);

    return res.status(200).json(user);
  }

  getPatients = async (req: Request, res: Response) => {
    const users = await this.service.getPatients();

    return res.status(200).json(users);
  }

  getPatientById = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await this.service.getPatientById(Number(id));

    return res.status(200).json(user);
  }

  updatePatient = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;

    const user = await this.service.updatePatient(Number(id), body);

    return res.status(200).json(user);
  }

  deletePatient = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await this.service.deletePatient(Number(id));

    return res.status(200).json(user);
  }
}
