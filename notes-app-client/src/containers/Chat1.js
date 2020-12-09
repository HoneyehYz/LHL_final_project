import {React, useState, useEffect} from "react";
import "./Chat1.css"
import Chat from "./components/Chat/index"


const axios = require('axios').default;


export default function Chat1(props) {

  const [state, setState] = useState({
    chats: []
  });

  const [msg, setMsg] = useState(props.chats||"");

  useEffect(()=> {(
    axios.get(`http://localhost:3005/api/v1/chat`)
    ).then((all) => {
      setState(prev => ({...prev, chats: all.data.chats}));     
    });
  },[]);


  function saveChat(message,date){
   console.log(message + date);
   if(!message){
    return;
   }
  const newMessage = {
    message,
    date,
    fromUser:localStorage.getItem("userId"),
    toUser: 2
  }; 
  return axios.post(`http://localhost:3005/api/v1/chat`, newMessage)
    .then((res)=> {
      const resObj=res.data.chat;
      const newMessages = [...msg, resObj];
      setMsg(newMessages);
      reset();
    });
  };

  function reset() {
    setMsg("");
  };

  return (
    <div>
      <Chat chat={state.chats} saveChat={saveChat}/>
    </div>
  );

}
