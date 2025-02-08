import './App.css';
import HomePage from './HomePage';
import { MyContext } from './ContextStore';
import React,{useEffect} from 'react';
import Chat from './Chat';
import { io } from "socket.io-client";
import MainComponent from './MainComponent';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [globalChatId, setGlobalChatId] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loginuser, setLoginuser] = React.useState("");
  const [greet, setGreet] = React.useState("");
  const [rolename, setRolename] = React.useState("")
  const socket = io("wss://dialogiq.net", { secure: true, transports: ["websocket"] });

  const handleLoginSuccess = (flag) => {
    setIsLoggedIn(flag); 
  };

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to Flask-SocketIO server");
    });
    socket.on("connect_error", (err) => {
      console.log("Connection Error:", err.message);
    });
    socket.on("connect_timeout", () => {
      console.log("Connection timed out");
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  
  return (
    <div>
      <MyContext.Provider value={{ globalChatId, setGlobalChatId, email, setEmail, password, setPassword, loginuser, setLoginuser, greet, setGreet, socket, rolename, setRolename }}>
          {isLoggedIn ? <MainComponent handleLogin={handleLoginSuccess}/> : <HomePage onLoginSuccess={handleLoginSuccess} />}
      </MyContext.Provider>
    </div>
  );
}

export default App;
