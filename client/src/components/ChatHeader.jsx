import React from "react";

const ChatHeader = (props) => {
  const { user } = props;
  return (
    <>
      <div className="align-items-start py-2 px-4 w-100 border-bottom d-lg-block sticky-top bg-white">
        <div className="d-flex align-items-center py-1">
          <div className="position-relative">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=2000&q=60"
              className="rounded-circle mx-2"
              width="40"
              height="40"
              alt={user.username}
            />
          </div>
          <div className="flex-grow-1">
            <strong>Logged In as {user.username}</strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatHeader;
