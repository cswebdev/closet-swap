import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Cookies from "js-cookie";
import Container from "react-bootstrap/esm/Container";
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
         <Container id="container-chatpage" className="d-flex">
            <Container id="container-userlist" className="bg-info w-25">
               <Row>
                  <Col>
                     <h3>Users</h3>
                  </Col>
               </Row>
            </Container>
            <Container id="container-chatroom" className="bg-primary">
               <Row>
                  <Col>
                     <h3>Chat Room</h3>
                  </Col>
               </Row>
            </Container>
         </Container>
      </>
   );
}

export default ChatPage;
