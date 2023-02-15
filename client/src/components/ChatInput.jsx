import React from "react";

const ChatInput = (props) => {
  const {  message ,setMessage, sendMessage  } = props;

  return (
    <>
      <div className="mt-auto align-items-end border-info py-3 px-4 border-top d-lg-block chat-input">
        <div className="input-group flex-fill">
          <input
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.code === "Enter" ? sendMessage() : null}
            className="form-control"
            placeholder="Type your message.."
          />
          <button className="btn btn-info">Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatInput;
