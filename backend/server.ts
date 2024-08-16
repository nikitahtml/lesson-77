import express from 'express';
import multer from 'multer';
import { createMessage } from './controllers/messageController';

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Маршрут для создания сообщения с обработкой файлов
app.post('/api/messages', upload.single('image'), createMessage);

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
