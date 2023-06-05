import React from 'react';

const Back = () => {
	return (
		<a href="./" rel="noopener noreferrer">
			<div className="fixed top-5 sm:left-8 left-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 hover:bg-cyan-400  w-16 h-16 flex transition-all items-center justify-center rounded-full">
				<ion-icon name="arrow-back-outline"></ion-icon>
			</div>
		</a>
	);
};

export default Back;
