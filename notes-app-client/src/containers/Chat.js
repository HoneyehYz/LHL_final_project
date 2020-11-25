import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import "./Chat.css"
class Chat extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]

    }, () => {
      setTimeout( () => this._sendMessage("Hi, How can I help you today?"), 2000)
      })
}
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }
 
  render() {
    return (
  
    <div>
      <p className="par"> Here at Goal Tracker we want to make sure you have the best support. So if you need any help
        with the Goal Tracker application we are  here to support you. Just click on the Chat icon and wait for the
        next representative. 
      </p>
      <Launcher
        agentProfile={{
          teamName: 'Goal Tracker Support',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Chat; 





// import React, { Component } from 'react';
// import { Chat, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-popup';
  
// class Chats extends Component {
//   componentDidMount() {
//     addResponseMessage("Hello How can I help you today?");
//   }
 
//   handleNewUserMessage = (newMessage) => {
//     console.log(`New message incoming! ${newMessage}`);
//     // Now send the message throught the backend API
//   }
 
//   render() {
//     return (
//       <div className="App">
//         <Chat
//           handleNewUserMessage={this.handleNewUserMessage}
//           title="Goal Tracker Support"
//           subtitle="And my cool subtitle"
//         />
//       </div>
//     );
//   }
// }
 
// export default Chats;