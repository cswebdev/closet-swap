import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";

function ChatMessage(props) {
   const [message, setMessage] = useState(props.message);
   const [user, setUser] = useState(props.user);
   const [timestamp, setTimestamp] = useState(props.timestamp);

   useEffect(() => {
      setMessage(props.message);
      setUser(props.user);
      setTimestamp(props.timestamp);
   }, [props.message, props.user, props.timestamp]);



   return (
      <div className="chat-message">
         <div className="chat-message-user">{user}</div>
         <div className="chat-message-message">{message}</div>
         <div className="chat-message-timestamp">{timestamp}</div>
      </div>
   );
}
export default ChatMessage;
