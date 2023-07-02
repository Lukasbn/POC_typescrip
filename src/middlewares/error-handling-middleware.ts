import { Request, Response, NextFunction } from 'express';
import { ApplicationError } from '../protocols';

export function handleApplicationErrors(
    err: ApplicationError | Error,
    _req: Request,
    res: Response,
    next: NextFunction,
) {
    if (err.name === 'NotFoundError') {
        return res.status(404).send({
            message: err.message,
        });
    }
    else {
        console.error(err.name);
        res.status(500).send({
        error: 'InternalServerError',
        message: 'Internal Server Error',
    });
    }
}