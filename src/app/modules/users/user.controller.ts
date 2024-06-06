import { Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response) => {
    try {
        const studentData = req.body;
        const result = await UserServices.createStudentToDB(studentData);

        res.status(200).json({
            success: true,
            message: "Succesfull",
            data: result
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Internal server error",
            data: error
        })
    }

}

export const UserController = {
    createStudent
}