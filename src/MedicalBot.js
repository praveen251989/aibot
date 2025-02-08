import React, { useEffect } from "react";

const MedicalBot = () => {
	useEffect(() => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.async = true;

    // Add your inline script logic
    script.innerHTML = `
            (function(d, t) {
        		var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        		v.onload = function() {
            		window.voiceflow.chat.load({
            		verify: { projectID: '670866ad8b5666baa343fb71' },
            		url: 'https://general-runtime.voiceflow.com',
            		versionID: 'production'
            	});
        	}
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; 
        v.type = "text/javascript"; 
        s.parentNode.insertBefore(v, s);
    	})(document, 'script');
    `;

    // Append the script to the body
    document.body.appendChild(script);
	// return () => {
	// 	document.body.removeChild(script); // Cleanup script on unmount
	// };
  	}, []); // Dependency array ensures this runs only once

return <div></div>;
};

export default MedicalBot;
