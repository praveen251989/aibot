import React, { useEffect } from "react";
import { useRef } from "react";
import './css/font-awesome.min.css'; 
import { MyContext } from "./ContextStore";

const Voice = () => {
	const buttonRef = useRef(null);
	const divRef = useRef(null);
	const {globalChatId, socket} = React.useContext(MyContext);
	var SpeechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
	var recognition;
	let isListening = false;

    useEffect(() => {
        buttonRef.current.addEventListener('click', handleClick);

		socket.on("voice_response", (data) => {
			const { message, chat_id } = data;
			if(chat_id === globalChatId) {
				const utterance = new SpeechSynthesisUtterance(message);
				speechSynthesis.speak(utterance);
			}
		});
    }, []);

    function handleClick() {
        buttonRef.current.classList.toggle('on');
        if (buttonRef.current.classList.contains('on')) {
            divRef.current.classList.add('active');
        } else {
            divRef.current.classList.remove('active');
        }
		toggleVoiceInput();
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
			const transcript = Array.from(event.results)
			.map(result => result[0].transcript)
			.join('');
			//inputFieldRef.current.value = transcript;
			socket.emit("send_message_websocket", {
				chat_id: "voice_" + globalChatId,
				message: transcript,
			});
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
	
	function toggleVoiceInput() {
		if (!recognition) {
			initSpeechRecognition();
		}

		if (isListening) {
			recognition.stop();
			isListening = false;
			
		} else {
			recognition.start();
			isListening = true;

			//Automatically stop listening after 30 seconds
			setTimeout(() => {
				if (isListening) {
					recognition.stop();
					isListening = false;
				}
			}, 5000);
		}
	}

	return (
		<div className="voiceDiv">
			<button className="voice-button" ref={buttonRef} id="voiceButton">
				<i className="fa fa-microphone"></i>
			</button>
			<div className="status-text" ref={divRef} id="statusText">
				Tap on mic to stop listening.
			</div>
		</div>
	);
};

export default Voice;
