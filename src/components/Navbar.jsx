import React, { useEffect, useState } from 'react';
// import Toggle from './Toggle/Toggle';

const Navbar = () => {
	const [sticky, setSticky] = useState(false);
	const [open, setOpen] = useState(false);
	const menuLinks = [
		{ name: 'HOME', link: '#home' },
		{ name: 'ABOUT', link: '#about' },
		{ name: 'SKILLS', link: '#skills' },
		{ name: 'PROJECTS', link: '#projects' },
		{ name: 'TESTIMONIALS', link: '#testimonials' },
		{ name: 'SERVICES', link: '#services' },
		{ name: 'CONTACT', link: '#contact' },
	];
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const nav = document.querySelector('nav');
			window.scrollY > 0 ? setSticky(true) : setSticky(false);
		});
	}, []);
	return (
		<nav
			className={`fixed w-full left-0 top-0 z-[999] ${
				sticky ? 'bg-gray-900  text-white' : 'text-white'
			}`}
		>
			<div className="flex items-center justify-between">
				<div className="mx-7">
					<h4 className="text-3xl uppercase font-bold text-cyan-600">
						Abdul<span className="text-white">salam </span>
					</h4>
					{/* <Toggle /> */}
				</div>
				<div
					className={` ${
						sticky ? 'md:bg-white/0 bg-white' : 'bg-white'
					} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
				>
					<ul className="flex items-center gap-1 py-2 text-lg">
						{menuLinks?.map((menu, i) => (
							<li
								key={i}
								className={`px-6 ${
									sticky ? 'text-white' : 'text-cyan-800'
								} hover:text-cyan-600`}
							>
								<a href={menu?.link}>{menu?.name}</a>
							</li>
						))}
					</ul>
				</div>
				<div
					onClick={() => setOpen(!open)}
					className={`z-[999]  ${
						open ? 'text-gray-900' : 'text-gray-100'
					} text-3xl md:hidden m-5`}
				>
					<ion-icon name="menu"></ion-icon>
				</div>
				<div
					className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
				open ? 'right-0' : 'right-[-100%]'
			}`}
				>
					<ul className="flex flex-col justify-center h-full space-y-4 py-2 text-lg">
						{menuLinks?.map((menu, i) => (
							<li
								onClick={() => setOpen(false)}
								key={i}
								className="px-6 hover:text-cyan-600"
							>
								<a href={menu?.link}>{menu?.name}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
