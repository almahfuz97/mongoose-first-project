import { Router } from 'express';
import { UserController } from './user.controller';
import validateRequest from '../../middlewares/validateRequests';
import { zodValidation } from '../students/student.validation';

const router = Router();

router.post(
  '/create-student',
  validateRequest(zodValidation.zodValidationStudentSchema),
  UserController.createStudent,
);

export const UserRoutes = router;
