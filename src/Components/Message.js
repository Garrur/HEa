// src/components/Message.js
import React from 'react';
import { MessageBubble, Avatar, AvatarContainer, OnlineStatus } from '../Styles/styles';

const Message = ({ text, isDoctor }) => {
  return (
    <div>
      <AvatarContainer>
        <Avatar>{isDoctor ? 'D' : 'P'}{isDoctor && <OnlineStatus />}</Avatar>
        <MessageBubble isDoctor={isDoctor}>{text}</MessageBubble>
      </AvatarContainer>
    </div>
  );
};

export default Message;
