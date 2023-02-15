import React from "react";

const Login = (props) => {
  const { newUser, setNewUser, logNewUser } = props;
  return (
    <>
      <div className="card w-100 text-center border-white">
        <div className="row">
          <div className="col-12">
            <h5>Enter UserName</h5>
          </div>
          <div className="d-flex justify-content-center py-1">
            <div className="col-4">
              <input
                type="text"
                name="username"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                onKeyPress={(e) => e.code === "Enter" && logNewUser()}
                className="form-control mb-3"
                placeholder="User Name"
                autoComplete="off"
              />
              <button className="btn btn-success w-100" onClick={() => logNewUser()}>
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
