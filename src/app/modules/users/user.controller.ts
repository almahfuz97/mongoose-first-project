import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import catchAsync from "../../utils/catchAsync";

const createStudent = catchAsync(async (req: Request, res: Response) => {
    const studentData = req.body;
    const result = await UserServices.createStudentToDB(studentData);

    res.status(200).json({
        success: true,
        message: "Succesfull",
        data: result
    })
}
)

export const UserController = {
    createStudent
}