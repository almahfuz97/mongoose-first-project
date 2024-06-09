import express from 'express';
import { AcademicSemesterControllers } from './semester.controller';
import validateRequest from '../../middlewares/validateRequests';
import { zodValidationAcademicSemester } from './semester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(zodValidationAcademicSemester.zodAcademicSemesterSchema),
  AcademicSemesterControllers.createAcademicSemester,
);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);

export const AcademicSemestersRoutes = router;
