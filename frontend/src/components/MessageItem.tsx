import React from 'react';

const MessageItem: React.FC<{ message: { text: string; author: string; image?: string } }> = ({ message }) => {
    return (
        <div>
            <h4>{message.author || 'Anonymous'}</h4>
            <p>{message.text}</p>
            {message.image && <img src={message.image} alt="Message" />}
        </div>
    );
};

export default MessageItem;
