import React, { useState } from 'react'
import ChatForm from './ChatForm';
import ChatList from './ChatList';

const axios = require('axios').default;

export default function Chat(props){

  return (
    <main>
    <ChatForm saveChat={props.saveChat}/>
    <ChatList chats={props.chat}/>
    </main>
  );
};