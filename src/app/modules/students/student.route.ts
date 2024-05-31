import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/createStudent', StudentControllers.createStudent)

export const StudentRoutes = router;