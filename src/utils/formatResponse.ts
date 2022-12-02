import { Request, Response } from 'express';

export const formatResponse = (
    req: Request,
    res: Response,
    data: any | null,
    errors: Error[] | null,
    message: string,
    code: number
) => {
    if(code >= 200 && code < 300) {
        return res.status(code).send({
            data,
            message: req.t(message),
            errors: []
        })
    }else if(code >= 400) {
        return res.status(code).send({
            data: null,
            message: req.t(message),
            errors
        })
    }
}