import { Request, Response } from 'express';

export const createMessage = (req: Request, res: Response) => {
    console.log('Received data:', req.body);
    console.log('Received file:', req.file);

    const { author, message } = req.body;
    const image = req.file ? req.file.path : null;


    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    res.status(201).json({ author: author || 'Anonymous', message, image });
};
