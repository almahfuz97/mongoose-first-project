import { Request, Response } from "express";
import { StudentServices } from "./student.service";

const createStudent = async (req: Request, res: Response) => {
    console.log(req.body.student)
    const student = req.body.student;
    console.log(student)

    // will call service func to send this data
    const result = await StudentServices.createStudentIntoB(student);
    console.log(`resulth${result}`)

    try {

        res.status(200).json({
            success: true,
            message: "Student is created successfully",
            data: result
        })
    } catch (error) {
        res.status(500).json({ message: "otokan aisi" })
        console.log({ message: 'ononi' });
    }
}

const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Students retrieved succesfully',
            data: result
        })
    } catch (error) {
        console.log(error)
    }
}

const getSingleStudent = async (req: Request, res: Response) => {
    try {
        const { studentId } = req.params;
        const result = await StudentServices.getSingleStudentFromDB(studentId);

        if (result) {
            res.status(200).json({
                success: true,
                message: 'Students retrieved succesfully',
                data: result
            })
        }
        else {
            res.status(404).json({
                success: false,
                message: 'No student found',
                data: result
            })
        }
    } catch (error) {
        console.log(error)

    }
}
export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}