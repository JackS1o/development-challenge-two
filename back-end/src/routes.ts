import { Router } from 'express';
import UserController from './database/controllers/userController';
import userService from './database/services/userService';

const service = new userService();
const controller = new UserController(service);

const router = Router();

router.post('/patient', controller.createPatient);
router.get('/patient', controller.getPatients);
router.get('/patient/:id', controller.getPatientById);
router.put('/patient/:id', controller.updatePatient);
router.delete('/patient/:id', controller.deletePatient);

export { router };
