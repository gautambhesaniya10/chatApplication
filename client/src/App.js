import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { io } from "socket.io-client";
import Main from "./components/Main";

const socket = io("http://localhost:4000")

function App() {
 
  return (
    <>
      <Main socket={socket} />
    </>
  );
}

export default App;
