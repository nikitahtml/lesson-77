import { Request, Response, NextFunction } from 'express';

export const validateMessage = (req: Request, res: Response, next: NextFunction) => {
    const { message } = req.body;
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }
    next();
};
