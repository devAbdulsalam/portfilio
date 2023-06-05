import React from 'react';
import aboutImg from '../assets/images/bg.jpg';
const About = () => {
	const info = [
		{ text: 'Years experience', count: '02' },
		{ text: 'Completed Projects', count: '45' },
		{ text: 'Companies Work', count: '04' },
	];
	return (
		<section id="about" className="py-10 text-white">
			<div className="text-center mt-8">
				<h3 className="text-4xl font-semibold">
					About <span className="text-cyan-600">Me</span>
				</h3>
				<p className="text-gray-400 my-3 text-lg">My introduction</p>
				<div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 md:px-10 max-w-6xl mx-auto">
					<div className="p-2">
						<div className="text-gray-300 my-3">
							<p className="text-justify leading-7 text-xl md:w-11/12 mx-auto px-2">
								I am a creative front-End Developer with over two years of
								experience providing developing and reponsive web applications
								for clients.
								<br /> My goal is to continue to build methods and website to
								optimize service delivery and achive business or organisational
								objectives of clients.
							</p>
							<div className="flex mt-6 items-center justify-center">
								{info.map((content) => (
									<div key={content.text} className="mx-1">
										<h3 className="md:text-4xl text-2xl font-semibold text-white">
											{content.count}
											<span className="text-cyan-600">+</span>{' '}
										</h3>
										<span className="md:text-base text-sm">{content.text}</span>
									</div>
								))}
							</div>
							<br />
							<br />
							<a
								href="./resume"
								className="w-fit btn-primary hover:bg-cyan-400 transition-all animate-pulse"
							>
								My resume
							</a>
						</div>
					</div>
					<div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
						<div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
							<img
								src={aboutImg}
								alt=""
								className="w-full object-cover bg-cyan-600 rounded-xl"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
