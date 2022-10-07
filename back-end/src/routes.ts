import { Router } from 'express';
import UserController from './database/controllers/userController';
import BodyVerify from './database/middleware/bodyVerify';
import userService from './database/services/userService';

const service = new userService();
const controller = new UserController(service);
const bodyVerify = new BodyVerify();

const router = Router();

router.post('/patient',
  bodyVerify.verify,
  bodyVerify.emailVerify,
  bodyVerify.veryfyAddress,
  bodyVerify.verifyDate, 
  controller.createPatient);

router.get('/patient', controller.getPatients);

router.get('/patient/:id', controller.getPatientById);

router.delete('/patient/:id',controller.deletePatient);

router.put('/patient/:id',
  bodyVerify.verify,
  bodyVerify.emailVerify,
  bodyVerify.veryfyAddress,
  bodyVerify.verifyDate,
  controller.updatePatient);


export { router };
