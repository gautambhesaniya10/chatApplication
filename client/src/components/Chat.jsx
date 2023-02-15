import React from "react";
import ChatContainer from "./ChatContainer";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ScrollableFeed from "react-scrollable-feed";

const Chat = (props) => {
  const { user, message, messages, setMessage, sendMessage } = props;
  return (
    <>
      <ChatContainer>
        <ChatHeader user={user} />
        <div className="position-relative chat-height overflow-auto">
          <ScrollableFeed>
            <div className="d-flex flex-column p-4">
              {messages.map((message, index) => {
                {
                  /* debugger */
                }
                return message.type === "UserStatus" ? (
                  <div key={index} className="text-center">
                    <span className="badge bg-info">
                      {message.userId === user.userId ? "You Have Joined!" : ` ${message.username} has Joined`}
                    </span>
                  </div>
                ) : (
                  <div
                    key={index}
                    className={message.userId === user.userId ? "chat-message-right pb-4" : "chat-message-left pb-4"}
                  >
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
                        className="rounded-circle mx-2"
                        width="40"
                        height="40"
                        alt=""
                      />
                      <div className="text-muted small text-nowrap mt-2">12:00 AM</div>
                    </div>
                    <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                      <div className="font-weight-bold mb-1">
                        {message.userId === user.userId ? "You" : message.username}
                      </div>
                      {message.message}
                    </div>
                  </div>
                );
              })}
            </div>
          </ScrollableFeed>
        </div>
        <ChatInput message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </ChatContainer>
    </>
  );
};

export default Chat;
