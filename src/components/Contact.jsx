import React from 'react';
import { contact_info } from '../data';
const Contact = () => {
	return (
		<section id="contact" className="py-10 px-3 text-white">
			<div className="text-center mt-8">
				<h3 className="text-4xl font-semibold">
					Contact <span className="text-cyan-600">Me</span>
				</h3>
				<p className="text-gray-400 mt-3 text-lg">
					Have a project in mind? <br /> Feel free to share it!
				</p>
				<div className="mt-16 flex flex-col-reverse md:flex-row space-y-10 gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto">
					<form
						className="flex flex-col flex-1 gap-5"
						name="PortfolioForm"
						action="https://formspree.io/f/xeqdgwke"
						method="POST"
					>
						<input type="text" name="name" required placeholder="Your Name" />
						<input
							type="Email"
							name="email"
							required
							placeholder="Your Email Address"
						/>
						<textarea
							placeholder="Your Message"
							name="message"
							required
							rows={10}
						></textarea>
						<button
							type="submit"
							className="btn-primary w-fit hover:bg-cyan-400 transition-all"
						>
							Send Message
						</button>
					</form>
					<div className="flex flex-col gap-7 ">
						{contact_info.map((contact, i) => (
							<div
								key={i}
								className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
							>
								<a
									className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] cursor-pointer flex items-center justify-center text-white bg-cyan-600 rounded-full"
									href={contact.link}
									target="_blank"
									rel="noreferrer"
								>
									<ion-icon name={contact.logo}></ion-icon>
								</a>
								<p className="md:text-base text-sm m-1 break-words">
									<a href={contact.link} target="_blank" rel="noreferrer">
										{contact.text}
									</a>
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
