// src/components/Chat.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Message from './Message';
import { ChatContainer, Header, BackButton, MessagesContainer, MessageInputContainer, Input, Button } from '../Styles/styles';

const Chat = ({ onBack }) => {
  const [messages, setMessages] = useState([
    { text: 'Hello, how can I help you today?', isDoctor: true },
    { text: 'I have a headache.', isDoctor: false },
  ]);

  const [input, setInput] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isDoctor: false }]);
      setInput('');
    }
  };

  const handleBackButtonClick = () => {
    navigate('/'); // Redirect to the home route on back button click
  };

  return (
    <ChatContainer>
      <Header>
        <BackButton onClick={handleBackButtonClick}>&larr;</BackButton> {/* Update onClick handler */}
        <h2>Doctor Chat</h2>
      </Header>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} text={msg.text} isDoctor={msg.isDoctor} />
        ))}
      </MessagesContainer>
      <MessageInputContainer>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </MessageInputContainer>
    </ChatContainer>
  );
};

export default Chat;
