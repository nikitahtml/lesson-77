import axios from 'axios';

interface MessageData {
    author?: string;
    message: string;
    image?: File;
}

export const addMessage = async (data: MessageData) => {
    const formData = new FormData();
    formData.append('message', data.message);
    if (data.author) formData.append('author', data.author);
    if (data.image) formData.append('image', data.image);

    try {
        const response = await axios.post('http://localhost:5000/api/messages', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Failed to add message:', error);
        throw error;
    }
};
