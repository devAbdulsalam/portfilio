import React, { useEffect } from 'react';
import { projects } from '../data';
import { useNavigate } from 'react-router-dom';
// import Aos for Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const Project = () => {
	let navigate = useNavigate();
	useEffect(() => {
		Aos.init({ duration: 7000 });
	});
	return (
		<section id="projects" className="py-10 text-white">
			<div className="text-center mt-8">
				<h3 className="text-4xl font-semibold">
					My <span className="text-cyan-600">Projects</span>
				</h3>
				<p className="text-gray-400 mt-3 text-lg">
					Check out some of my Awesome projects
				</p>
			</div>
			<div className="flex lg:w-11/12 gap-6 md:px-5 px-2 mx-auto mt-6 md:flex-wrap justify-center items-center relative">
				<div
					data-aos="fade-up"
					 className="w-full grid md:grid-cols-3 justify-center gap-2 grid-flow-row relative"
				>
					{projects.map((project_info, i) => (
						<div key={i} className="group z-10 relative">
							<div className=" h-fit w-full p-4 bg-slate-700 rounded-xl relative">
								<img
									src={project_info.img}
									alt={project_info.name}
									className="rounded-lg h-[320px] md:h-[350px] w-full"
								/>
								<div className="overlay flex justify-center p-1 bg-transparent group-hover:bg-slate-700 items-center flex-col absolute w-full h-full rounded-xl left-0 -bottom-1/2 invisible duration-500 group-hover:visible group-hover:bottom-0 -translate-X-1/2">
									<h3 className="text-xl md:text-2xl m-1 group-hover:text-cyan-600 font-bold">
										{project_info.name}
									</h3>
									<p className="mb-3 px-4">{project_info.desc}</p>
									<div className="flex gap-3 z-50">
										<a
											href={project_info.github_link}
											target="_blank"
											rel="noreferrer"
											className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
										>
											Github
										</a>
										<a
											href={project_info.live_link}
											target="_blank"
											rel="noreferrer"
											className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
										>
											Live Demo
										</a>
									</div>
								</div>
								<div className="flex gap-3 py-4">
									<a
										href={project_info.github_link}
										target="_blank"
										rel="noreferrer"
										className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
									>
										Github
									</a>
									<a
										href={project_info.live_link}
										target="_blank"
										rel="noreferrer"
										className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
									>
										Live Demo
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
				<div
					data-aos="fade-left"
					className="lg:block hidden text-center p-3 bg-slate-700 rounded-xl mt-3"
				>
					<div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg">
						<div>
							<h2 className="text-2xl font-semibold">
								Have a project in mind? <br /> Feel free to share it!
							</h2>
							<p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-7">
								Make your business contemporary and digitally ahead of your
								competitors, memorable for your client and users through your
								website. <br />
								Turning that your amazing idea into reality.
							</p>
							<a
								href="/projects"
								className="text-cyan-600 my-3 text-xl font-bold animate-pulse"
							>
								Other Noteworthy Projects
							</a>
							<a
								href="#contact"
								className="btn-primary max-w-fit mx-auto mt-4 block hover:bg-cyan-400 transition-all"
							>
								Let's chat
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className=" md:hidden text-center mt-8">
				<i className="fas fa-files"></i>
				<p>Other Noteworthy Projects you would like to see</p>
				<button onClick={() => navigate('/projects')}>view the achive</button>
			</div>
		</section>
	);
};

export default Project;
