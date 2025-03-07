import React, { useEffect, useState } from 'react';
import './App.css';
import { Button } from "@mui/material";
import axios from 'axios';
import { MyContext } from './ContextStore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Dashboard = () => {
  const {globalChatId} = React.useContext(MyContext);
  const [data, setData] = useState(null);
  const {rolename} = React.useContext(MyContext);

  const handleClick = () => {
    axios
			.post("https://dialogiq.net/api/reset", {
				chat_id: globalChatId,				
			})
			.then((response) => {
				if(response && response.status === 200 && response.data.reset_status) {
					alert("Reset is successful")
				}
			});
  }
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("https://dialogiq.net/api/tasks", {chat_id: globalChatId});
        setData(response.data);
      } catch (err) {
        alert("Error while fetching tasks information, please contact admin")
      } 
    };
    fetchData();
  }, []);
  return (
    <div>
      {rolename === 'Admin' && (
        <div>
          <Button variant="contained" onClick={handleClick} sx={{position: 'absolute', right: 5, marginTop: '5px'}}>Reset</Button>
        </div>
      )}      
      <div className="dash-container">
        <div className="side requested">
          <h3>Requested</h3>
          {data?.assigned_by_me && (
            <div style={{marginTop: '20px'}}>
              {data.assigned_by_me.map((task, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{task.task_name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{textAlign:'left', paddingLeft: '40px'}}>
                    <div className="task-row"><span className="task-label">Assigned By :</span> <span>{task.assignedBy}</span></div>
                    <div className="task-row"><span className="task-label">Assigned To :</span> <span>{task.assignedTo}</span></div>
                    <div className="task-row"><span className="task-label">Deadline :</span> <span>{task.deadline}</span></div>
                    <div className="task-row"><span className="task-label">Priority :</span> <span>{task.priority}</span></div>
                    <div className="task-row"><span className="task-label">Status :</span> <span>{task.status}</span></div>
                    <div className="task-row"><span className="task-label">Task Description :</span> <span>{task.task_description}</span></div>          
                  </AccordionDetails>
                </Accordion>
              ))}
              
            </div>
          )}
          
        </div>
        <div className="side received">
          <h3>Received</h3>
          {data?.assigned_to_me && (
            <div style={{marginTop: '20px'}}>
              {data.assigned_to_me.map((task, index) => (
                <Accordion key={index}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                  >
                    <Typography component="span">{task.task_name}</Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{textAlign:'left', paddingLeft: '40px'}}>
                    <div className="task-row"><span className="task-label">Assigned By :</span> <span>{task.assignedBy}</span></div>
                    <div className="task-row"><span className="task-label">Assigned To :</span> <span>{task.assignedTo}</span></div>
                    <div className="task-row"><span className="task-label">Deadline :</span> <span>{task.deadline}</span></div>
                    <div className="task-row"><span className="task-label">Priority :</span> <span>{task.priority}</span></div>
                    <div className="task-row"><span className="task-label">Status :</span> <span>{task.status}</span></div>
                    <div className="task-row"><span className="task-label">Task Description :</span> <span>{task.task_description}</span></div>             
                  </AccordionDetails>
                </Accordion>
              ))}
              
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard