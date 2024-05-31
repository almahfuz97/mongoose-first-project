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

export const StudentControllers = {
    createStudent
}