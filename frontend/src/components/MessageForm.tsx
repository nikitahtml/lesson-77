import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../hooks/useAddMessage';

const MessageForm: React.FC = () => {
    const [author, setAuthor] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [image, setImage] = useState<File | null>(null);
    const dispatch = useDispatch();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await addMessage({ author, message, image });
            setAuthor('');
            setMessage('');
            setImage(null);
        } catch (error) {
            console.error('Failed to submit message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Author (optional)"
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
            />
            <input
                type="file"
                onChange={(e) => e.target.files && setImage(e.target.files[0])}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MessageForm;
