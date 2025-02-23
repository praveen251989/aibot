import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { MyContext } from "./ContextStore";
import { PieChart } from "@mui/x-charts/PieChart";
import './css/font-awesome.min.css'; 
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import IconButton from '@mui/material/IconButton';
import ReactMarkdown from "react-markdown";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const Chat = () => {
  const chatEndRef = useRef(null);
  const divRef = useRef(null);  
  const {globalChatId, setGlobalChatId, socket, loginuser, greet} = React.useContext(MyContext);
  const [messages, setMessages] = useState([{text: greet, sender: "bot"}]);
  const [disabledInput, setDisabledInput] = useState(false);
  
  var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
  var recognition;
  let isListening = false;
  const closebtnRef = useRef(null);
  const toggleRef = useRef(null);
  const sendButtonRef = useRef(null);
  const voiceButtonRef = useRef(null);
  const inputFieldRef = useRef(null);
  const chatContainerRef = useRef(null);
  const sidebarRef = useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const savedChats = JSON.parse(sessionStorage.getItem("chats")) || [{text: greet, sender: "bot"}];
    setMessages(savedChats);
    socket.on("bot_response", (data) => {
      const { message, message_data } = data;
      const respMsg = message;
      const messageData = message_data;
      const time = new Date().toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setDisabledInput(false);
      if(messageData['chat_id'] === globalChatId) {
        if (messageData.hasOwnProperty("buttons")) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: respMsg, sender: "bot", buttons: messageData.buttons, time:time },
          ]);
        } else if (messageData.hasOwnProperty("table")) {
          const tableData = messageData.table;
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: respMsg, sender: "bot", table: tableData, time:time },
          ]);
        } else if (messageData.hasOwnProperty("markdown")) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: respMsg, sender: "bot", markdown: messageData.markdown, time:time },
          ]);
        } else if (messageData.hasOwnProperty("chart")) {
          const transformedData = messageData.chart.map((item, index) => ({
            id: index,
            value: item.value,
            label: item.label,
          }));
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: "", sender: "bot", chart: transformedData, time:time },
          ]);
        } else if (messageData.hasOwnProperty("email")) {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: respMsg, sender: "bot", email: messageData.email, time:time },
          ]);
        } else {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: respMsg, sender: "bot", time:time },
          ]);
        }
      }
    });

    sendButtonRef.current.addEventListener('click', handleSendMessage);
    voiceButtonRef.current.addEventListener('click', function () {
      toggleVoiceInput(this);
    });
    inputFieldRef.current.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleSendMessage();
      }
    });
    
  }, []);

  useEffect(() => {
    sessionStorage.setItem("chats", JSON.stringify(messages));
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleButtonAction = (ele, action) => {
    ele.target.style.backgroundColor='grey';
    ele.target.disabled = true;
    const parentDiv = ele.target.parentElement;
    if (parentDiv) {
      const buttons = parentDiv.querySelectorAll("button");
      buttons.forEach((btn) => {
          btn.style.pointerEvents = "none"; 
      });
    }
    socket.emit("send_message_websocket", {
      chat_id: globalChatId,
      message: action,
    });
    setDisabledInput(true);
  };

  const copyToClipboard = () => {
    if (divRef.current) {
      const textToCopy = divRef.current.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Copied to clipboard!");
      }).catch((err) => {
        console.error("Failed to copy: ", err);
      });
    }
  };

  function handleSendMessage() {
    const userInput = inputFieldRef.current.value.trim();
    const time = new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });
    if (!userInput) return;
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: userInput, sender: "user", time:time },
    ]);
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    inputFieldRef.current.value = '';
    socket.emit("send_message_websocket", {
      chat_id: globalChatId,
      message: userInput,
    }); 
    setDisabledInput(true);
  }

  function initSpeechRecognition() {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support speech recognition.');
      return;
    }

    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = function (event) {
      //const inputField = document.querySelector('.input-area input');
      const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
      inputFieldRef.current.value = transcript;
    };

    recognition.onerror = function (event) {
      console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function () {
      if (isListening) {
        recognition.start();
      }
    };
  }

  function toggleVoiceInput(button) {
    if (!recognition) {
      initSpeechRecognition();
    }

    if (isListening) {
      recognition.stop();
      isListening = false;
      button.innerHTML = '<i class="fa fa-microphone"></i>';
      button.classList.remove('recording');
    } else {
      recognition.start();
      isListening = true;
      button.innerHTML = '<i class="fa fa-stop"></i>';
      button.classList.add('recording');

      // Automatically stop listening after 30 seconds
      setTimeout(() => {
        if (isListening) {
          recognition.stop();
          isListening = false;
          button.innerHTML = '<i class="fa fa-microphone"></i>';
          button.classList.remove('recording');
        }
      }, 30000);
    }
  }

  function isValidLink(text) {
    try {
      new URL(text);
      return true;
    } catch (error) {
      return false;
    }
  }

  return (
    <div>      
      <div class="newchat-container" ref={chatContainerRef}>
      {messages.map((message, index) => (
        <div key={index}
          className={`message ${
          message.sender === "user"
            ? "user"
            : "bot"
        }`}>
					<div style={{backgroundColor: message.sender === "user" ? '#38bdf8' : '#2d3748', padding:'10px',borderRadius:'5px'}}>
						{message.text}
						{message.buttons && (
							<div className='cards-container'>
								<br/>
								{message.buttons.map((button, index) => (
									<Button sx={{textTransform:'none'}} key={index} variant='contained' onClick={(e) => handleButtonAction(e, button.payload)}>{button.title}</Button>
								))}
							</div>
						)}
						{message.table && (
							<div>
								<br/>                
								<table>
									<thead>
										<tr>
											{Object.keys(message.table[0]).map((col) => (
												<th key={col} >
													{col.toUpperCase().replace(/_/g, " ")}
												</th>
											))}
										</tr>
									</thead>
									{message.table.map((row, index) => (
										<tr key={index}>
											{Object.values(row).map((value, idx) => (
												<td key={idx}>
													{isValidLink(value) ? <Button href={value} target="_blank">Open Link</Button> : value}
												</td>
											))}
										</tr>
									))} 
								</table>
							</div>
						)}
            {message.markdown && (
              <div style={{marginLeft:'20px', padding: '20px'}}>
                <ReactMarkdown>{message.markdown}</ReactMarkdown>
              </div>
            )}
            {message.chart && (
              <div>
                <PieChart
                  series={[
                    {
                      data: message.chart,
                    },
                  ]}
                  width={400}
                  height={200}
                  slotProps={{
                    legend: {
                      labelStyle: {                        
                        fill: 'white',
                      },
                    },
                  }}
                />
              </div>
            )}
            {message.email && (
              <div class="container-box">
                <div class="header-box">
                  <span>Email</span>
                  <span>
                    <IconButton aria-label="delete" size="small" onClick={copyToClipboard} sx={{color:"white"}}>
                      <ContentPasteIcon fontSize="small" />Copy Text
                    </IconButton>
                  </span>
                </div>
                <div class="content-box" ref={divRef}>
                  {message.email.split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br/>
                    </React.Fragment>
                  ))}                  
                </div>
              </div>
            )}
					</div> 
          <div style={{fontSize:'11px',color:'lightgray',padding:'0 5px',alignSelf:'flex-end'}}>
            {message.time}
          </div>
          </div>      
				))}
        <div ref={chatEndRef} className={disabledInput ? "loader" : ''}/>
      </div>

      <div class="input-area">
        <input type="text" placeholder="Type a message..." ref={inputFieldRef} disabled={disabledInput}/>
        <button class="voice-btn" ref={voiceButtonRef}>
          <i class="fa fa-microphone"></i>
        </button>
        <button class="send-btn" ref={sendButtonRef}>
          <i class="material-icons">send</i>
        </button>
      </div>

      <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Solutions</h3>
                    <ul>
                        <li><a href="#">IT Staffing</a></li>
                        <li><a href="#">AI Matching</a></li>
                        <li><a href="#">Skill Assessment</a></li>
                        <li><a href="#">Remote Hiring</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">API Reference</a></li>
                        <li><a href="#">Tutorials</a></li>
                        <li><a href="#">Case Studies</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">GDPR Compliance</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2023 Dialog IQ. All rights reserved.</p>
                <div class="social-icons">
              <a href="#" aria-label="Facebook">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" aria-label="Twitter">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.5 1a9 9 0 0 1-2.86 1.1A4.52 4.52 0 0 0 16.92 0C14.86 0 13.07 1.79 13.07 4c0 .31.03.61.1.91A12.94 12.94 0 0 1 1.64 1 4.48 4.48 0 0 0 3 8a4.52 4.52 0 0 1-2-.54v.05c0 2.01 1.42 3.69 3.3 4.08a4.57 4.57 0 0 1-2 .08 4.52 4.52 0 0 0 4.21 3.13A9.05 9.05 0 0 1 0 20.29 12.77 12.77 0 0 0 7 22c8.32 0 12.86-6.89 12.86-12.86 0-.19-.01-.39-.02-.58A9.2 9.2 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" aria-label="YouTube">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.95C18.88 4 12 4 12 4s-6.88 0-8.59.47a2.78 2.78 0 0 0-1.95 1.95A29.94 29.94 0 0 0 1 12a29.94 29.94 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29.94 29.94 0 0 0 23 12a29.94 29.94 0 0 0-.46-5.58z"></path>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Chat;
