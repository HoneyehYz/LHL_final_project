import React from 'react'
import "./ChatForm.css";
const axios = require('axios').default;

export default function ChatList(props){
    console.log(props.chats);

    const chatMsg = props.chats.map((chatmsg) => {
      return (
         <div className="chat-inner">
           <section>From: {chatmsg.fromuser}</section>
           <section>Message: {chatmsg.message}</section>
        </div>
      )
    });



    return (
      <section>
        {chatMsg}
      </section>
    );
  
};
