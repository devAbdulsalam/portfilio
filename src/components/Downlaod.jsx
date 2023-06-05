import React from 'react';

const Download = () => {
	return (
		<a href="./src/assets/Abdulsalam-resume.pdf" download>
			<div className="text-xl fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white font-semibold bg-cyan-600 hover:bg-cyan-400  w-fit py-3 px-2 flex transition-all items-center justify-center rounded-full">
				<span>Download Resume </span>{' '}
				<ion-icon name="download-outline" size="large"></ion-icon>
			</div>
		</a>
	);
};

export default Download;
