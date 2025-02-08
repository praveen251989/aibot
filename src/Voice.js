import React, { useEffect } from "react";
import { useRef } from "react";
import './css/font-awesome.min.css'; 

const Voice = () => {
	const buttonRef = useRef(null);
	const divRef = useRef(null);

    useEffect(() => {
        buttonRef.current.addEventListener('click', handleClick);
    }, []);

    function handleClick() {
        buttonRef.current.classList.toggle('on');
        if (buttonRef.current.classList.contains('on')) {
            divRef.current.classList.add('active');
        } else {
            divRef.current.classList.remove('active');
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
