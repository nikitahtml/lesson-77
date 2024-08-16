import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../redux/messageSlice';
import MessageItem from './MessageItem';

const MessageList: React.FC = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state: any) => state.messages.items);

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    return (
        <div>
            {messages.map((message: any) => (
                <MessageItem key={message.id} message={message} />
            ))}
        </div>
    );
};

export default MessageList;
