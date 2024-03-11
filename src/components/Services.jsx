import React, { useEffect } from 'react';

// import services data
import { services } from '../data';

// import Aos for Animation
import aos from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
	useEffect(() => {
		aos.init({ duration: 7000 });
	});
	return (
		<section id="services" className="py-10 px-3 text-white">
			<div className="text-center mt-8">
				<h3 className="text-4xl font-semibold">
					My <span className="text-cyan-600">Services</span>
				</h3>
				<p className="text-gray-400 mt-3 text-lg">What I do for clients</p>
			</div>
			<div className="container mx-auto">
				<div className="flex flex-col items-center text-center">
					<p className="max-w-[650px] text-lg p-3 py-6 mx-auto">
						I creatively develop (both web & mobile) interfaces, build useful
						web experiences and increace online presence for your business
						<br />
						by creating modern website which help increase clients and sales.
					</p>
				</div>
				<div className="w-11/12 mx-auto my-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{services.map((service, index) => {
						const { icon, name, description } = service;
						return (
							<div
								data-aos="fade-up"
								className="p-6 text-center bg-slate-700 services"
								key={index}
							>
								<div className="text-accent mx-auto rounded-sm w-12 flex justify-center items-center my-6 text-[28px]">
									<i className={`fas ${icon} fa-2x text-gray-50 `}></i>
								</div>
								<h4 className="text-xl font-medium mb-2">{name}</h4>
								<p>{description}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Services;
