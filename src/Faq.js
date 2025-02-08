import React from 'react'
import { useRef } from 'react';

const Faq = () => {
    const containerRef = useRef(null);
    
    const toggleCategory = (e) => {    
		let categoryItems = e.currentTarget.nextElementSibling;
		let icon = e.currentTarget.querySelector(".toggle-icon");
		let allCategories = containerRef.current.querySelectorAll(".faq-items");
		let allIcons = containerRef.current.querySelectorAll(".faq-category .toggle-icon");
		
		allCategories.forEach(cat => {
			if (cat !== categoryItems) cat.style.display = "none";
		});
		allIcons.forEach(icn => icn.textContent = "+");
		
		if (categoryItems.style.display === "block") {
			categoryItems.style.display = "none";
			icon.textContent = "+";
		} else {
			categoryItems.style.display = "block";
			icon.textContent = "-";
		}
	}

	const toggleAnswer = (e) => {
		let answer = e.currentTarget.nextElementSibling;
		let icon = e.currentTarget.querySelector(".toggle-icon");
		let allAnswers = containerRef.current.querySelectorAll(".faq-answer");
		let allIcons = containerRef.current.querySelectorAll(".faq-question .toggle-icon");

		allAnswers.forEach((ans) => ans.classList.remove("show"));
		allIcons.forEach((icn) => (icn.textContent = "+"));

		if (answer.classList.contains("show")) {
			answer.classList.remove("show");
			icon.textContent = "+";
		} else {
			answer.classList.add("show");
			icon.textContent = "-";
		}
	}
  return (
    <div ref={containerRef}>
      <h1 style={{textAlign: 'center', fontFamily: 'Arial, sans-serif'}}>Module Insights: A Smarter Approach</h1>
      <div className="faq-container">
        <div className="faq-category" onClick={(e)=>toggleCategory(e)}>1. Timesheets  <span className="toggle-icon">+</span></div>
        <div className="faq-items">
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.1 View Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
                      <div style={{paddingLeft: '10px'}}>
                        <p style={{lineHeight: 1.5}}>
                          This intent allows users to easily retrieve and review their previously submitted timesheets, whether they are looking for current week submissions, specific employee records, or historical work logs. This feature helps streamline the process of tracking work hours and identifying pending or approved entries.
                        </p>
                      </div>
		              </div>
					<div><strong>Prompt(s):</strong></div>
						<div style={{paddingLeft: '20px'}}>
							<div className="query-item">View my work logs</div>
							<div className="query-item">Show pending timesheets for this quarter</div>
							<div className="query-item">Display approved timesheets for last month for employee John Doe</div>
							<div className="query-item">View pending timesheets for this week for employee John</div>
							<div className="query-item">Can you show me pending timesheets for this month for all employees?</div>
							<div className="query-item">Show me the submitted timesheets from 2024-04-01 to 2024-04-15 for employee Priya</div>
							<div className="query-item">Can I see all employees' hours for this week?</div>
							<div className="query-item">Fetch my latest timesheets</div>
						</div >
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.2 Submit Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
                                This intent helps users log and finalize their work hours. With prompts ranging from submitting this week’s hours to updating entries for specific dates, this feature enables accurate tracking of time worked. By capturing this data, it simplifies administrative tasks for both employees and HR teams, ensuring timesheets are current, compliant, and ready for review or approval. 
							</p>
						</div>
					</div>
					<div>
						<strong>Prompt(s):</strong>
					</div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">I need to submit my timesheet</div>
						<div className="query-item">Submit my timesheet for this week</div>
						<div className="query-item">Submit my work hours for this week</div>
						<div className="query-item">I need to submit my timesheet for this week</div>
						<div className="query-item">Submit my timesheet for 2024-04-01 to 2024-04-15</div>
						<div className="query-item">Can you update my work hours?</div>
						<div className="query-item">Update my timesheet for this week to 5 hours</div>
						<div className="query-item">Update my timesheet for 2024-03-01 to 2024-03-31 with 40</div>
						
					</div >
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.3 Update Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
                                This intent enables users to modify previously logged hours in their timesheets. Whether updating hours for the current week, making corrections to specific dates, or adjusting daily hours, it ensures that all timesheet data remains accurate and up-to-date. This feature is particularly helpful for employees who need to correct errors or accommodate changes in their work schedule, and for managers or HR personnel overseeing timesheet integrity.
							</p>
						</div>
					</div>
					<div>
						<strong>Prompt(s):</strong>
					</div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Can you update my work hours?</div>
						<div className="query-item">Update my timesheet for this week with 35 hours.</div>
						<div className="query-item">Can you fix my hours for this week by 10 hours more?</div>
						<div className="query-item">Modify my timesheet for this week to show 8 hours each day</div>
						<div className="query-item">Modify my timesheet for 2025-01-06 to 2025-01-12 with an additional 15 hours.</div>
						
						
					</div >
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.4 Approve Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
                                This intent supports managers and administrators in reviewing and approving submitted timesheets. By selecting specific employees or date ranges, it ensures that all recorded hours meet company standards and compliance requirements. This feature helps maintain an up-to-date record of employee work logs, facilitates smooth payroll processing, and promotes accountability within the
							</p>
						</div>
					</div>
					<div>
						<strong>Prompt(s):</strong>
					</div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Please approve the timesheets for Alice for this week.</div>
						<div className="query-item">Approve the submitted timesheets for John for this week.</div>
						<div className="query-item">Can you approve timesheets </div>
						<div className="query-item">Approve all pending timesheets for employee Alice</div>
						<div className="query-item">Can you approve timesheets for 1st January to 10th January for employee Srinivas</div>
						
					</div >
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.5 Remind Pending Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
                                This intent assists in sending notifications to employees about their pending or overdue timesheets. By issuing timely reminders, organizations can ensure that employees are prompted to complete and submit their timesheets, reducing delays in approvals and payroll processing. This feature benefits both employees, by keeping them informed of their responsibilities, and administrators, by helping maintain accurate and up-to-date records.
							</p>
						</div>
					</div>
					<div>
						<strong>Prompt(s):</strong>
					</div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Send a reminder for pending timesheets</div>
						<div className="query-item">Notify all employees with pending timesheets</div>
						<div className="query-item">Can you send an alert for overdue timesheets?</div>
						<div className="query-item">Notify all employees about outstanding timesheets for this week</div>
						<div className="query-item">Send a timesheet reminder to Mushaam</div>
						<div className="query-item">Send a reminder email for timesheets due between 2024-04-01 to 2024-04-15 all employees</div>
						
					</div >
                </div>
            </div>
            <div className="faq-item">
                <div className="faq-question" onClick={(e)=>toggleAnswer(e)}>1.6 Send Pending Timesheets <span className="toggle-icon">+</span></div>
                <div className="faq-answer">
                    <div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
                                This intent allows users to request a list or report of timesheets that have not yet been submitted. By quickly generating and sharing this information, it helps managers and administrators stay informed about which employees still need to submit their work hours, ensuring timely follow-ups and reducing the risk of delays in approval processes or payroll. This feature also supports compliance efforts by making it easier to track submission statuses over specific time periods.
							</p>
						</div>
					</div>
					<div>
						<strong>Prompt(s):</strong>
					</div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Send me the list of pending timesheets</div>
						<div className="query-item">I need a report of unsubmitted timesheets</div>
						<div className="query-item">Email me the timesheets that haven’t been submitted</div>
						<div className="query-item">I'd like to receive the list of unsubmitted timesheets for this month</div>
						<div className="query-item">Forward the pending timesheets report to me for this week</div>
						<div className="query-item">Can you share the pending timesheets for 2024-06-01 to 2024-06-07</div>
						<div className="query-item">Generate a report of incomplete timesheets</div>
						
						
					</div >
                </div>
            </div>
        </div>
		<div className="faq-category" onClick={(e)=>toggleCategory(e)}>2. Leaves  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>2.1 View Leave Requests <span className="toggle-icon">+</span></div>
					<div className="faq-answer">
						<div><strong>Overview:</strong>
							<div style={{paddingLeft: '10px'}}>
								<p style={{lineHeight: 1.5}}>
									The prompts focus on **reminding employees** to **submit their pending timesheets** for the **current week**. They aim to ensure timely completion and compliance with timesheet submissions.
								</p>
							</div>
						</div>
						<div><strong>Prompt(s):</strong></div>
						<div style={{paddingLeft: '20px'}}>
							<div className="query-item">Show me all the Approved leave requests for Musham in January.</div>
							<div className="query-item">Can you display Pending leave requests for this month?</div>
							<div className="query-item">I need to view Pending leave requests for Bob for this month</div>
						</div >
					</div>
				</div>
				
				<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>2.2 Submit Leave Request <span className="toggle-icon">+</span></div>
					<div className="faq-answer">
						<div><strong>Overview:</strong>
							<div style={{paddingLeft: '10px'}}>
								<p style={{lineHeight: 1.5}}>
									The prompts focus on **retrieving and sharing pending timesheets** for a **specific time period (week or month)**. They aim to track and ensure the completion of outstanding timesheets.
								</p>
							</div>
						</div>
						<div><strong>Prompt(s):</strong></div>
						<div style={{paddingLeft: '20px'}}>
							<div className="query-item">I'd like to apply for sick leave from 4 Jan to 6 Jan due to fever.</div>
							<div className="query-item">Can you submit my study leave from 5 Apr to 15 Apr to prepare for exams?</div>
							<div className="query-item">Please log my emergency leave from 2025-01-10 to 2025-01-12 because of urgent work.</div>
						</div >
					</div>
				</div>
			</div>
			<div className="faq-category" onClick={(e)=>toggleCategory(e)}>3. Emails  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>2.1 Remind Pending Timesheets <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on reminding employees to submit their pending timesheets for the current week. They aim to ensure timely completion and compliance with timesheet submissions.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Send a reminder to all employees to submit their timesheets for this week.</div>
						<div className="query-item">Please remind everyone about their pending timesheets</div>
						<div className="query-item">Can you send a reminder to all employees for pending timesheets for this week</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>3.2 Submit Pending Timesheets <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **retrieving and sharing pending timesheets** for a **specific time period (week or month)**. They aim to track and ensure the completion of outstanding timesheets.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Send me the list of all pending timesheets for this week</div>
						<div className="query-item">Email me the pending timesheets for this month.</div>
						<div className="query-item">Can you share the list of outstanding timesheets for this week?</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>3.3 Draft Emails <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **drafting emails** related to **team updates, achievements, and progress reports**. They aim to communicate important information about the team's performance and milestones.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">I would like you to write an email about a team update.</div>
						<div className="query-item">Can you write a Draft an email about team achievements.</div>
						<div className="query-item">Prepare an email about the team's progress report.</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>3.4 Provide Email Context <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **providing specific email content** related to **upcoming deadlines, past accomplishments, and current task assignments**. They aim to ensure clarity and relevance in team communications.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Include details about upcoming deadlines.</div>
						<div className="query-item">Mention the team's accomplishments last quarter.</div>
						<div className="query-item">Focus on the tasks assigned for this week.</div>
					</div >
				</div>
			</div>
		</div>
			
			<div className="faq-category" onClick={(e)=>toggleCategory(e)}>4. Tasks  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>4.1 Create Tasks <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **creating and assigning tasks** for **specific departments (HR, IT, Finance)** with **clear deadlines**. They aim to ensure task delegation and timely completion.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Assign a task to Audit Policies for HR by 2025-01-16.</div>
						<div className="query-item">Create a task to Conduct Maintenance for IT by 2025-01-18.</div>
						<div className="query-item">Create a task to Review Reports for Finance by 2025-01-15.</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>4.2 Task Description <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on describing tasks with clear and concise details, such as auditing policies, performing IT maintenance, and processing timesheets. They aim to provide clarity on task objectives and responsibilities.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Auditing company policies.</div>
						<div className="query-item">Conducting IT system maintenance.</div>
						<div className="query-item">Processing the timesheets task.</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>4.3 View Tasks <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **retrieving and displaying tasks** based on **status (pending/all), assigned individuals or departments (HR, Alice, Finance), and deadlines (this month)**. They aim to track task progress and ensure timely completion.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Show me pending tasks assigned to HR.</div>
						<div className="query-item">Fetch all tasks for Alice with a deadline of this month.</div>
						<div className="query-item">Display pending tasks for Finance with a deadline of this month.</div>
					</div >
				</div>
			</div>
			</div>
			<div className="faq-category" onClick={(e)=>toggleCategory(e)}>5. Reminders  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>5.1 Set Remainders <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **setting reminders** for **specific tasks** with defined **frequencies (daily, once, weekly), start times, and end dates**. They aim to ensure timely task completion and scheduling efficiency.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Please set a daily reminder for Review Reports at 2025-01-16 09:00 AM until 2025-02-10.</div>
						<div className="query-item">Remind me once to Prepare Documents at 2025-01-20 16:30</div>
						<div className="query-item">Can you set a weekly reminder for Audit Policies at 2025-01-15 14:00 until 2025-01-30?</div>						
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>5.2 View Remainders <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **retrieving and displaying reminders** based on the **assigned person or department (Admin, Bob, Finance, Musham)**. They aim to track scheduled reminders for better task management and follow-ups. 
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Show reminders set by Admin.</div>
						<div className="query-item">Fetch reminders from Bob.</div>
						<div className="query-item">List all reminders from Finance.</div>
						<div className="query-item">Display reminders assigned by Musham.</div>
					</div >
				</div>
			</div>
			</div>
			<div className="faq-category" onClick={(e)=>toggleCategory(e)}>6. Jobs  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>6.1 Find Jobs <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **searching for job opportunities** based on **job title (UX designer, web developer, accountant, customer service) and location (Seattle, Los Angeles, Chicago, Atlanta)**. They aim to provide relevant job listings in specific cities.
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Can you find UX designer jobs in Seattle?</div>
						<div className="query-item">Find me a web developer position in Los Angeles.</div>
						<div className="query-item">I'm interested in finding accounting roles in Chicago.</div>
						<div className="query-item">Where can I find customer service roles in Atlanta?</div>
					</div >
				</div>
			</div>
			</div>
			<div className="faq-category" onClick={(e)=>toggleCategory(e)}>7. Reports  <span className="toggle-icon">+</span>
		</div>
		<div className="faq-items">
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>7.1 View Reports <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on **retrieving and displaying reports** related to **timesheets, tasks, and leave requests**, categorized by **departments or employees** for a **specific time period (week or month)**. They aim to provide insights into workforce management and productivity. 
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Can I see a report?</div>
						<div className="query-item">Please provide the timesheets report for this month by departments.</div>
						<div className="query-item">Give me a tasks report breakdown for this month by employees.</div>
						<div className="query-item">Show the leave requests report from this week by departments.</div>
					</div >
				</div>
			</div>
			
			<div className="faq-item">
				<div className="faq-question" onClick={(e)=>toggleAnswer(e)}>7.2 Email Reports <span className="toggle-icon">+</span></div>
				<div className="faq-answer">
					<div><strong>Overview:</strong>
						<div style={{paddingLeft: '10px'}}>
							<p style={{lineHeight: 1.5}}>
								The prompts focus on emailing reports related to leave requests, tasks, and timesheets, categorized by employees or departments for a specific time period (week, month, or year). They aim to ensure report accessibility and effective communication. 
							</p>
						</div>
					</div>
					<div><strong>Prompt(s):</strong></div>
					<div style={{paddingLeft: '20px'}}>
						<div className="query-item">Can you email me the leave requests report of employees for this month?</div>
						<div className="query-item">Email me the tasks report for this week</div>
						<div className="query-item">Please email the timesheets report of departments for this year.</div>
					</div >
				</div>
			</div>
			</div>
		</div> 

    </div>
  )
}

export default Faq