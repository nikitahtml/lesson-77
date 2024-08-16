import express from 'express';
import multer from 'multer';
import { createMessage } from '../controllers/messageController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/messages', upload.single('image'), createMessage);

export default router;
