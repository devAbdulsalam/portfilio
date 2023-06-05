import React from 'react';
// import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Downlaod from './Downlaod';
import Back from './Back';

const Resume = () => {
	return (
		<>
			<Back />
			<Downlaod />
			<div className="max-w-[940px] mx-auto p-2 pt-[120px]">
				<h2 className="text-center">Resume</h2>
				<div className="bg-cyan-600 my-4 p-4 w-full flex justify-between items-center">
					<h2 className="text-center">Abdulsalam mohammed</h2>
					<div className="flex">
						<a
							href="https://github.com/devabdulsalam"
							target="_blank"
							rel="noreferrer"
						>
							<FaGithub size={20} style={{ marginRight: '1rem' }} />
						</a>
						<a
							href="https://www.linkedin.com/in/abdulsalammmuftua"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
						</a>
						<a
							href="https://www.twitter.com/abdulsalamm74 "
							target="_blank"
							rel="noreferrer"
						>
							<FaTwitter size={20} style={{ marginRight: '1rem' }} />
						</a>
					</div>
				</div>
				<div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
					<div className="hidden sm:block">
						<p>
							Proven Leadership <span className="px-1">|</span> Web Development{' '}
							<span className="px-1">|</span> Complex Problem Solving
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Proven Leadership</p>
						<p className="py-2">Web Development</p>
						<p>Complex Problem Solving</p>
					</div>
				</div>
				<p className="text-justify">
					Analytical, innovative, and motivated web development professional
					with experience in customer service, team leadership, and
					organizational effectiveness in fast-paced and challenging
					environments. with a strong foundation in modern Project Management
					principles and practices, adept at developing strategies and driving
					streamlined operations. Diverse analytical skills, team collaboration,
					and relationship building. Consummate professional, and motivated
					leader, with solid interpersonal abilities and complex problem-solving
					skills. Effective and proven track record of critical thinking, idea
					generation, and optimizing efficiencies.
				</p>

				{/* Skills */}
				<div className="text-center py-4">
					<h5 className="text-center underline text-[18px] py-2 text-cyan-600">
						Skills
					</h5>
					<p className="py-2">
						<span className="font-bold text-cyan-600">Technical Skills</span>
						<span className="px-2">|</span>Front-End Web Developer
						<span className="px-2">|</span> HTML
						<span className="px-2">|</span>CSS
						<span className="px-2">|</span>Tailwind
						<span className="px-2">|</span>Javascript
						<span className="px-2">|</span>React
						<span className="px-2">|</span>Next JS
						<span className="px-2">|</span>Nodejs
						<span className="px-2">|</span>Redux
						<span className="px-2">|</span>MongoDb
						<span className="px-2">|</span> Firebase
						<span className="px-2">|</span> RESTAPI
					</p>
					<p className="py-2">
						<span className="font-bold text-cyan-600">Project managemnet</span>
						<span className="px-2">|</span>Agile
						<span className="px-2">|</span>Kaban
						<span className="px-2">|</span>Jira
						<span className="px-2">|</span>Navision,
						<span className="px-2">|</span>Web-HR
						<span className="px-2">|</span>Bitrix24
						<span className="px-2">|</span>Human resource
					</p>
				</div>

				<h5 className="text-center underline text-[18px] py-4 text-cyan-600">
					Professional Experience
				</h5>
				{/* Experience */}
				<div className="py-6">
					<p className="italic">
						<span className="font-bold italic text-cyan-600">
							Stem Innovation Hub
						</span>
						<span className="px-2">|</span>Kano, Nigeria
					</p>
					<p className="py-1 italic">
						Front End Web Developer & Project Manager (2022 - Current)
					</p>
					<ul className="list-disc list-outside px-7 py-1 leading-relaxed">
						<li>
							Building reusable components for future use and maintaining
							software workflow, maintaining github codebase
						</li>
						<li>
							Learned the use of Project/ Software management frameworks and
							tools such as Agile, Kaban, Jira, Navision, Web-HR, Workable, and
							Bitrix24 etc.
						</li>
						<li>
							Collaborate, Communicate with project stockholders to implement
							responsive designs.
						</li>
						<li>
							Optimized Website performance through efficient coding practices.
							Ensured comprehensive mobile responsive UI layouts with
							understanding of HTML, CSS, and JavaScript.
						</li>
					</ul>
				</div>

				{/* Personal Experience */}
				<div className="py-6">
					<p className="italic">
						<p className="italic">
							<span className="font-bold italic text-cyan-600">
								Stem Innovation Hub
							</span>
							<span className="px-2">|</span>Kano, Nigeria
						</p>
					</p>
					<p className="py-1 italic">Front-end Enginner (2021 - Current)</p>
					<ul className="list-disc list-outside px-7 py-1 leading-relaxed">
						<li>
							Working with cross-functional teams in crafting speedy, intuitive,
							and inclusive, robust and responsive web solutions.
						</li>
						Collaborating with other developers in wire framing of the
						applications, implementing various user interface maintained the
						github pull request, review and merging to codebase.
						<li>
							Resolving critical frontend issues and optimize application for
							maximum speed and scalability for optimal user experience.
						</li>
						<li>
							Creating and consumption of Rest APIs for implementing dynamic
							user interfaces. Developed and maintained user interfaces for web
							applications.
						</li>
						<li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.
						</li>
					</ul>
				</div>
				{/* Personal Experience */}
				<div className="py-6">
					<p className="italic">
						<p className="italic">
							<span className="font-bold italic text-cyan-600">
								Stem Innovation Hub
							</span>
							<span className="px-2">|</span>Kano, Nigeria
						</p>
					</p>
					<p className="py-1 italic">
						Front- end Developer (internship) (2021 - 2022)
					</p>
					<ul className="list-disc list-outside px-7 py-1 leading-relaxed">
						<li>
							Completed an intensive 1-year full stack web development program
							at Stemlab Innovation Hub, Kano, focused on equipping participants
							with comprehensive skills in frontend and backend development.
						</li>
						<li>
							Actively participated in Project development discussions,
							providing valuable input on project/design feasibility and
							suggesting improvements to enhance user experience.
						</li>
						<li>
							Applied computer science data structures and algorithms to solve
							computational problems ensuring the data flow within a finite
							amount of space and time.
						</li>
						<li>
							Gained hands-on experience with JavaScript, CSS, HTML, React,
							React Hooks, APIs, deployment strategies and tech principles
							whilst working on team/individual projects, code reviews, and pair
							programming session. Working with cross-functional teams in
							crafting speedy, intuitive, and inclusive, robust and responsive
							web solutions.
						</li>
					</ul>
				</div>

				{/*  */}
				{/* <h5 className="text-center underline text-[18px] py-4">
					Other Professional Experience
				</h5> */}

				{/* Experience */}
				{/* <div className="py-6">
					<p className="italic">
						<span className="font-bold">CITY OF SHERMAN, TX</span>
						<span className="px-2">|</span>Sherman, TX
					</p>
					<p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
					<ul className="list-disc list-outside px-7 py-1 leading-relaxed">
						<li>
							Ensured proper implementation of firefighting techniques and
							practices including controlling and extinguishing fires, operating
							hose lines, and fire ground operations, ventilation, and search
							and rescue.
						</li>
						<li>
							Oversaw comprehensive understanding, operation, and maintenance of
							fire engines, ladder trucks, technical rescue apparatus, and
							response trailers.
						</li>
						<li>
							Performed ALS techniques as needed within emergency situations
							including the use of an esophageal or dual lumen airway device and
							oral intubation using laryngoscopy.
						</li>
						<li>
							Collaborated with a talented and high performing team of
							firefighters in high pressure and stressful situations as needed.
						</li>
						<li>
							Utilized proven and demonstrated knowledge of multiple
							certifications including Pediatric Advanced Life Support,
							Prehospital Trauma Life Support, and Advanced Cardiac Life
							Support, among others.
						</li>
					</ul>
				</div> */}
			</div>
		</>
	);
};

export default Resume;
