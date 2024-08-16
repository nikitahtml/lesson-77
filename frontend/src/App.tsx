import React from 'react';
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

const App: React.FC = () => {
    return (
        <div>
            <h1>Guestbook</h1>
            <MessageForm />
            <MessageList />
        </div>
    );
};

export default App;
