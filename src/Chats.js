import React from 'react';
import Chat from './Chat';

import './Chats.css';

const Chats = () => {
    return (
        <div className="chats">

            <Chat
                name="Sarah"
                message="Hey! how are you"
                timestamp="35 mintutes ago"
                profilePic="..."
            />
            <Chat
                name="Ellen"
                message="Whats up!"
                timestamp="55 minutes ago"
                profilePic="..."
            />
            <Chat
                name="Sandra"
                message="Ola!"
                timestamp="3 days ago"
                profilePic="..."
            />
            <Chat
                name="Natasha"
                message="Oops there he is!"
                timestamp="1 week ago"
                profilePic="..."
            />

        </div>
    );
};



export default Chats;