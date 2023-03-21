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
   const [SelectedUsers, setSelectedUsers] = useState([]);
   const [rooms, setRooms] = useState([]);
   const [activeRoom, setActiveRoom] = useState({});
   const [messages, setMessages] = useState([]);

   useEffect(() => {
      const getSelectedUsers = async () => {
         const response = await fetch("/api_v1/profiles/");
         if (!response.ok) {
            throw new Error("Network Response was not Ok");
         }

         const data = await response.json();
         console.log(data);

         setSelectedUsers(data);
      };
      getSelectedUsers();
   }, []);




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
