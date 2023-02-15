import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import Login from "./Login";

const Main = (props) => {
  const { socket } = props;
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  useEffect(() => {
    socket.on("users", (users) => {

      let messageArr = [];
      for (const { userId, username } of users) {
        let newMassage = { type: "UserStatus", userId, username };
        messageArr.push(newMassage);
      }
      setMessages([...messages, ...messageArr]);
      setUsers(users)
    });

    socket.on("session", ({ userId, username }) => {
      setUser({userId , username});
    });

    socket.on("user connected", ({ userId, username }) => {
      let newMassage = { type: "UserStatus", userId, username };
      setMessages([...messages, newMassage]);
    });

    socket.on("new message", ({ userId, username , message }) => {
      const newMassage = { type : "message" , userId : userId , username : username , message};
      setMessages([...messages , newMassage]);
    });

  }, [socket , messages]);

  const logNewUser = () => {
    // setUser(newUser);
    socket.auth = { username: newUser };
    socket.connect();
  };


  const sendMessage = () => {
    socket.emit("new message" , message);
    const newMassage = { type : "message" , userId : user.userId , username : user.username , message};
    setMessages([...messages , newMassage]);
    setMessage("")
  }

  return (
    <>
      <main className="content">
        <div className="container mt-3">
          {user.userId && (
            <>
              <Chat user={user} message={message} messages={messages} setMessage={setMessage} sendMessage={sendMessage} />
            </>
          )}
          {!user.userId && (
            <>
              <Login newUser={newUser} setNewUser={setNewUser} logNewUser={logNewUser} />
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Main;
