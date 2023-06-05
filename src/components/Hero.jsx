import React from 'react';
import hero from '../assets/images/hero.png';
const Hero = () => {
	const social_media = [
		// { name: "logo-instagram", link: "https://twitter.com/MMAbdulsalam001" },
		{ name: 'logo-github', link: 'https://github.com/devAbdulsalam' },
		{ name: 'logo-twitter', link: 'https://twitter.com/mmabdulsalam001' },
		{
			name: 'logo-linkedin',
			link: 'https://www.linkedin.com/in/abdulsalammmuftua/',
		},
	];
	return (
		<section
			id="home"
			className="min-h-screen flex py-10 md:flex-row flex-col items-center"
		>
			<div className="flex-1 md:flex items-center justify-center h-full hidden">
				<img
					src={hero}
					alt=""
					className="md:w-9/12 max-h-[700px]  object-cover"
				/>
			</div>
			<div className="flex-1 md:hidden flex items-center justify-center mt-24 h-full">
				<div className=" flex flex-col justify-center">
					<h1 className="md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold">
						<span className="text-cyan-600 md:text-4xl text-5xl">
							{' '}
							Hello! 👋{' '}
						</span>
						<br />I am Abdulsalam
					</h1>
					<h4 className="md:text-2xl text-lg md:leading-normal leading-5  font-bold text-gray-500">
						FrontEnd Web Developer
					</h4>
				</div>
			</div>
			<div className="flex-1">
				<div className="md:text-left text-center">
					<h1 className="hidden md:block md:text-3xl text-2xl md:leading-normal leading-10 text-white font-bold">
						<span className="text-cyan-600 md:text-4xl text-5xl">
							{' '}
							Hello! 👋{' '}
						</span>
						<br />I am Abdulsalam
					</h1>
					<h4 className=" hidden  md:block md:text-2xl text-lg md:leading-normal leading-5  font-bold text-gray-500">
						FrontEnd Web Developer
					</h4>
					<h2 className="font-bold text-white hidden md:block mt-4 text-3xl tracking-[-2px] leading-tight lg:leading-[1.2]">
						{' '}
						I Build & Design Interactive Web Interfaces for Business.
					</h2>
					<h1 className="text-4xl leading-[44px] md:hidden  text-center ">
						I Build & Design <br />
						Interactive <br /> Web Interfaces <br /> for Business.
					</h1>
					<a
						className="btn-primary w-36 mt-8 hover:bg-cyan-400 transition-all"
						href="#contact"
					>
						Contact Me
					</a>
					<div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
						{social_media?.map((icon, i) => (
							<a
								key={i}
								href={icon.link}
								className="text-gray-600 mx-2 hover:text-white cursor-pointer"
							>
								<ion-icon name={icon.name}></ion-icon>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
