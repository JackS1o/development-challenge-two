import { Request, Response, NextFunction } from "express";

export default class BodyVerify {

  verify = async (req: Request, res: Response, next: NextFunction) => {
    const { patient_name, email, birth_date, patient_address } = req.body;
    if (!patient_name || !email || !birth_date || !patient_address) {
      return res.status(400).json({ message: "Invalid fields" });
    }
    next();
  }
  
  emailVerify = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body;
    const validEmail = /\S+@\S+\.\S+/;
    if (!validEmail.test(email)) {
      return res.status(400).json({ message: "Invalid email" });
    }
    next();
  }

  veryfyAddress = async (req: Request, res: Response, next: NextFunction) => {
    const { patient_address } = req.body;
    if (patient_address.length < 2) {
      return res.status(400).json({ message: "To short Address" });
    }
    next();
  }
}
