import { Request, Response, NextFunction } from 'express';

export const Core = {
    auth: (req: Request, res: Response, next: NextFunction) => {
        console.log('Time: ', Date.now());
        next();
    }
};
