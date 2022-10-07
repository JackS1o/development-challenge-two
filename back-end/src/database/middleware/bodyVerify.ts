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

  verifyDate = async (req: Request, res: Response, next: NextFunction) => {
    const { birth_date } = req.body;
    const validDate = /^\d{2}-\d{2}-\d{4}$/;
    if (!validDate.test(birth_date)) {
      return res.status(400).json({ message: "Date must be in DD-MM-YYYY format" });
    }
    next();
  }
}
