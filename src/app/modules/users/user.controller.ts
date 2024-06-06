import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const studentData = req.body;
        const result = await UserServices.createStudentToDB(studentData);

        res.status(200).json({
            success: true,
            message: "Succesfull",
            data: result
        })

    } catch (error) {
        next(error);
    }

}

export const UserController = {
    createStudent
}