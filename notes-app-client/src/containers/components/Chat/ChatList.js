import React from 'react'

const axios = require('axios').default;

export default function ChatList(props){
    const chatMsg = props.chats.map((chatmsg) => {
      return (
         <div>
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
