import React, { useEffect, useRef } from "react";
import { MyContext } from "./ContextStore";
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import axios from 'axios';
import Dashboard from "./Dashboard";
import Chat from "./Chat";
import Faq from "./Faq";
import Voice from "./Voice";

export default function MainComponent({ handleLogin }) {

	const [content, setContent] = React.useState("chat");
	const { globalChatId, setGlobalChatId, loginuser } = React.useContext(MyContext);
	const [anchorEl, setAnchorEl] = React.useState(null);
	const toggleRef = useRef(null);
	const closebtnRef = useRef(null);
	const sidebarRef = useRef(null);
	const open = Boolean(anchorEl);
	
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleNav = (comp) => {
		setContent(comp);
	}

	useEffect(() => {
		const removableDiv = document.getElementById("voiceflow-chat");
		if (removableDiv) {
			removableDiv.style.display = 'none';
			//removableDiv.remove(); 
		}

		toggleRef.current.addEventListener('click', toggleSidebar);
		closebtnRef.current.addEventListener('click', toggleSidebar);
		return () => {
			if (removableDiv) {
				removableDiv.style.display = "block";
			}
		};
	}, []);

	function toggleSidebar() {
		sidebarRef.current.classList.toggle('active');
	}

	const handleLogout = () => {
		axios
			.post("https://dialogiq.net/api/logout", {
				chat_id: globalChatId,
				message: "logout",
			})
			.then((response) => {
				if(response && response.status === 200 && response.data.message_data.logged_out_status) {
					handleLogin(false);
				}
			});
		setGlobalChatId("");
    handleMenuClose();
	}

	return (
		<div>
			<header>
				<div class="logo">
					<a href="/" class="logo" style={{fontSize:'18px'}}>
						<svg
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							style={{marginTop:'5px'}}
						>
							<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
						</svg>
						Dialog IQ
					</a>
				</div>
				<nav>					
					<a onClick={()=>handleNav('dashboard')}>Dashboard</a>
					<a onClick={()=>handleNav('chat')}>Chat</a>
					<a onClick={()=>handleNav('voice')}>Voice</a>
					<a onClick={()=>handleNav('faq')}>FAQ</a>
					<IconButton
						size="small"
						aria-label="account of current user"
						aria-controls="menu-appbar"
						aria-haspopup="true"
						onClick={handleMenu}
						color="inherit"
					>
						<AccountCircle />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleMenuClose}
						MenuListProps={{
							"aria-labelledby": "basic-button",
						}}
					>
						<MenuItem onClick={handleMenuClose}>
							{loginuser}
						</MenuItem>
						<MenuItem onClick={handleLogout}>Logout</MenuItem>
					</Menu>
				</nav>
				<span class="toggle-menu" ref={toggleRef}>
					☰
				</span>
			</header>
			<div class="sidebar" ref={sidebarRef}>
				<div class="close-btn">
					<button ref={closebtnRef}>
						<i class="fa fa-times"></i> Close
					</button>
				</div>
				<ul>
					<li>
						<a href="/">
							<i class="fa fa-home"></i> Home
						</a>
					</li>
					<li>
						<a href="/dashboard">
							<i class="fa fa-tachometer"></i> Dashboard
						</a>
					</li>
					<li>
						<a href="/chat">
							<i class="fa fa-comments"></i> Chat
						</a>
					</li>
					<li>
						<a href="/voice">
							<i class="fa fa-microphone"></i> Voice
						</a>
					</li>
					<li>
						<a href="/faq">
							<i class="fa fa-question-circle"></i> FAQ
						</a>
					</li>
					<li>
						<a href="/signout">
							<i class="fa fa-sign-out"></i> Sign Out
						</a>
					</li>
				</ul>
			</div>
			<div id="contentDiv">
				{content === 'dashboard' && <Dashboard/>}
				{content === 'chat' && <Chat/>}
				{content === 'faq' && <Faq/>}
				{content === 'voice' && <Voice/>}
			</div>
		</div>
	);
}
