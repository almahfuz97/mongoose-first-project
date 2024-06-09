import { Router } from 'express';
import { UserRoutes } from '../modules/users/user.routes';
import { StudentRoutes } from '../modules/students/student.route';
import { AcademicSemestersRoutes } from '../modules/academicSemester/semester.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemestersRoutes,
  },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
