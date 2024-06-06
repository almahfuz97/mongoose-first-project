import { NextFunction, Request, Response } from "express";

const globalErrorHandlers = (
    err: any,
    res: Response,
    req: Request,
    next: NextFunction
) => {
    const statusCode = 500;
    const message = err.message || 'Something went wrong!';

    return res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
export default globalErrorHandlers;