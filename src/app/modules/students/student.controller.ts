import { NextFunction, Request, RequestHandler, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';


const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Students retrieved succesfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  if (result) {
    res.status(200).json({
      success: true,
      message: 'Students retrieved succesfully',
      data: result,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'No student found',
      data: result,
    });
  }

});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
