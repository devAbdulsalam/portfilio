import React, { useEffect } from 'react';
import Footer from './Footer';
import Bot from './Bot';
import Back from './Back';

import { allProjects } from '../data';
import { projects } from '../data';
// import Aos for Animation
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
	useEffect(() => {
		Aos.init({ duration: 2500 });
	});
	return (
		<>
			<Back />
			<Bot />
			<section id="projects" className="py-10 text-white">
				<div className="text-center mt-8">
					<h3 className="text-4xl font-semibold">
						My <span className="text-cyan-600">Projects</span>
					</h3>
					<p className="text-gray-400 mt-3 text-lg">
						Check out some other Noteworthy Projects of My
					</p>
				</div>
				<div className="flex lg:w-11/12 gap-6 md:px-5 px-2 mx-auto mt-6 md:flex-wrap justify-center items-center relative">
					<div
						data-aos="fade-right"
						className="w-full md:grid grid-cols-3 space-x-2 space-y-2 justify-between"
					>
						{projects.map((project_info, i) => (
							<div key={i} className="group">
								<div className=" h-fit w-full p-4 bg-slate-700 rounded-xl relative m-2">
									<img
										src={project_info.img}
										alt={project_info.name}
										className="rounded-lg h-[350px] w-full"
									/>
									<h3 className="text-xl my-1 group-hover:text-cyan-600 font-semibold">
										{project_info.name}
									</h3>
									<p className="mb-3">{project_info.desc}</p>
									<p className="mb-3">
										{project_info.techStack.map((stack, index) => (
											<span key={index} className="text-blue-500">
												{stack}{' '}
											</span>
										))}
									</p>
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
					<hr />
					<div
						data-aos="fade-right"
						className="w-full md:grid grid-cols-3 space-x-2 space-y-2 justify-between"
					>
						{allProjects.map((project_info, i) => (
							<div key={i} className="group">
								<div className=" h-fit w-full p-4 bg-slate-700 rounded-xl relative m-2">
									<img
										src={project_info.img}
										alt={project_info.name}
										className="rounded-lg h-[350px] w-full"
									/>
									<h3 className="text-xl my-1 group-hover:text-cyan-600 font-semibold">
										{project_info.name}
									</h3>
									<p className="mb-3">{project_info.desc}</p>
									<p className="mb-3">
										{project_info.techStack.map((stack, index) => (
											<span key={index} className="text-blue-500">
												{stack}{' '}
											</span>
										))}
									</p>
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
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Projects;
