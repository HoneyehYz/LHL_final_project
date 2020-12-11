import React, { useState } from 'react'
import "./ChatForm.css";
const axios = require('axios').default;

export default function ChatForm(props){
  const [msg, setMsg] = useState("");

    return (
      <section className="chat-box">
        <section>
          <form autoComplete="off">
            <input
              value={msg}
              type="text"
              placeholder="Enter Message"
              onChange={(event) => setMsg(event.target.value)}
            />
          </form>
           <br/>
        </section>
        <section>
          <button  onClick={() => {props.saveChat(msg, new Date())}}>Submit</button>
        </section>
      </section>
    );
  
};
