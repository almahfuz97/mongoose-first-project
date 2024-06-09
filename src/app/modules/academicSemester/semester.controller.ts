// import { NextFunction, Request, RequestHandler, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './semester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
        req.body,
    );
    res.status(200).json({
        success: true,
        message: 'Academic semester is created succesfully',
        data: result,
    });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
    res.status(200).json({
        success: true,
        message: 'All academic semsters retrieved successfully',
        data: result
    })
})

// const getSingleStudent = catchAsync(async (req, res) => {
//   const { studentId } = req.params;
//   const result = await StudentServices.getSingleStudentFromDB(studentId);

//   if (result) {
//     res.status(200).json({
//       success: true,
//       message: 'Students retrieved succesfully',
//       data: result,
//     });
//   } else {
//     res.status(404).json({
//       success: false,
//       message: 'No student found',
//       data: result,
//     });
//   }

// });

export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemesters

};
