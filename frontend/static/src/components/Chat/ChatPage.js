import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Cookies from "js-cookie";
import Container from "react-bootstrap/esm/Container";
import Spinner from "react-bootstrap/esm/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Form } from "react-bootstrap";

function ChatPage() {
   const navigate = useNavigate();
   const [activeUser, setActiveUser] = useState({});
   const [userProfile, setUserProfile] = useState({});
   const [SelectedUsers, setSelectedUsers] = useState([]);
   const [activeRoom, setActiveRoom] = useState({});
   const [messages, setMessages] = useState([]);
   const [chatId, setChatId] = useState(null);

   useEffect(() => {
      const getMessages = async () => {
         const response = await fetch(`/api_v1/chats/`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify({
               sender: activeUser.id,
               receiver: userProfile.id,
            }),
         });
         if (!response.ok) {
            throw new Error("Network response not okay - user not found");
         }
         const data = await response.json();
         setChatId(data.id);
         console.log("chat id", data.id);
      };
      getMessages();
   });

   return (
      <>
  

         <Container className="text-center my-5">
            <h1>Page Under Construction</h1>
            <p className="lead mt-3">
               We're sorry, but this page is currently under construction.
               Please check back soon!
            </p>
            <Spinner animation="border" variant="primary" className="mt-5" />
         </Container>
      </>
   );
}

export default ChatPage;
