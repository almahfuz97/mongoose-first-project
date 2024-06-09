import { Request, Response } from 'express';
import httpStatus from 'http-status';

// const globalErrorHandlers = ((err: any, res: Response, req: Request, next: NextFunction) => {
//     const statusCode = 500;
//     const message = err.message || 'Something went wrong!';

//     return res.status(statusCode).json({
//         success: false,
//         message,
//         error: err,
//     });
// });
// export default globalErrorHandlers;

const globalErrorHandlers = (err: any, req: Request, res: Response) => {
    const statusCode = httpStatus.NOT_FOUND;
    const message = err.message || 'Something went wrong!';

    return res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};

export default globalErrorHandlers;
