// // projects images
import project6 from './assets/projects/chatapp.png';
import project7 from './assets/projects/dashboard.png';
import project1 from './assets/projects/movie.png';
import project2 from './assets/projects/project-2.jpeg';
import project3 from './assets/projects/project-3.jpg';
import project4 from './assets/projects/project-4.jpg';
import project5 from './assets/projects/project-5.jpeg';

// // skills images
import SkillImg1 from './assets/skills/html5.png';
import SkillImg2 from './assets/skills/css3.png';
import SkillImg3 from './assets/skills/js.png';
import SkillImg4 from './assets/skills/reactjs.png';
import SkillImg5 from './assets/skills/nextjs.png';
import SkillImg6 from './assets/skills/nodejs.png';
import SkillImg7 from './assets/skills/git.png';

// // testimonial images
import TestiImage1 from './assets/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/testimonials/testimonial-2.jpg';
import TestiImage3 from './assets/testimonials/testimonial-3.webp';

// // projects
export const projects = [
	{
		img: project6,
		name: 'Messenger App',
		desc: 'Chat with your Friends and love one with my messenger clone',
		overView:
			'This application is a real time chats app, it also featured chat room for more than two people. I built this application in Next JS, Prisma, Typescript.it also features user authentication with nextauth as well as the mongoDb  users and storage database.',
		techStack: ['tailwind', 'next', 'typescript', 'Prisma', 'moongoDB'],
		github_link: 'https://github.com/devabdulsalam/messenger',
		live_link: 'https://messenger-drab-five.vercel.app ',
	},
	{
		img: project7,
		name: 'Admin Dashboard App',
		desc: 'Track your Business information with responsive admin dasboard',
		overView:
			'I built this application in React JS and is hosted on GitHub pages.This app features user authentication with firebase as well as the firestore cloud storage database.This application is pulling movie data from an the IMDB movie API and displaying different categories.It features horizontal sliding and a featured selection.The useContext hook is also being implemented for app - wide state management.',
		techStack: ['tailwind', 'React', 'movie API', 'API'],
		github_link: 'https://github.com/devabdulsalam/dashboard',
		live_link: 'https://my-movie-app-tau.vercel.app ',
		// live_link: "https://myreactflix.netlify.app",
	},
	{
		img: project1,
		name: 'Movie App',
		desc: 'Watch on demand moveies at the confort of your home',
		overView:
			'I built this application in React JS and is hosted on GitHub pages.This app features user authentication with firebase as well as the firestore cloud storage database.This application is pulling movie data from an the IMDB movie API and displaying different categories.It features horizontal sliding and a featured selection.The useContext hook is also being implemented for app - wide state management.',
		techStack: ['tailwind', 'React', 'movie API', 'API'],
		github_link: 'https://github.com/devabdulsalam/movie',
		live_link: 'https://my-movie-app-tau.vercel.app ',
		// live_link: "https://myreactflix.netlify.app",
	},
	{
		img: project2,
		name: 'Job search Web App',
		desc: 'A solution that helps job seeks and recruiter without hassle',
		techStack: ['html', 'css', 'javascript'],
		github_link: 'https://github.com/devAbdulsalam/jobsearch.git',
		live_link: 'https://myjobsearch.vercel.app',
	},
	{
		img: project4,
		name: 'Queens Collections',
		desc: 'This solution is a E-commerce clothing website',
		techStack: ['tailwind', 'javaScript'],
		github_link: 'https://github.com/',
		live_link: 'https://queenscollection.netlify.app',
	},
	{
		img: project4,
		name: 'Fitness',
		desc: 'This solution is a E-commerce clothing website that sell sport kits, and gears',
		techStack: ['React', 'local Storagee'],
		github_link: 'https://github.com/devAbdulsalam/fitness.git',
		live_link: 'https://sport-center.netlify.app',
	},
];

// // projects
export const allProjects = [
	{
		img: project2,
		name: 'Momentum',
		desc: 'Live display of weather condition of your location, time, date and enrich Qoute to brighten your Day',
		techStack: [
			'tailwind',
			'Reactjs',
			'local Storagee',
			'motivation Api',
			'weather Api',
		],
		github_link: 'https://github.com/devAbdulsalam/monentum.git',
		live_link: 'https://dmomentum.netlify.app',
	},
	{
		img: project1,
		name: 'Techstuff',
		desc: 'Blog site to post all your tech relate topics',
		techStack: ['Tailwindcss', 'MoongoDB', ' Expressjs', 'React', 'Nodejs'],
		github_link: 'https://github.com/devabdulsalam/techstuff',
		live_link: 'https://techstuff.vercel.app ',
		// live_link: 'https://myreactflix.netlify.app',
	},
	{
		img: project5,
		name: 'Phone book',
		desc: 'A contact book where user can save contact, edit contact, make call to phone numbers',
		techStack: ['tailwind', 'React', 'Your local Storagee'],
		github_link: 'https://github.com/devAbdulsalam/phone-book-with-react.git',
		live_link: 'https://phone-book-with-react.vercel.app/',
	},
	{
		img: project3,
		name: 'BreakFast Resturant',
		desc: 'This solution is a platform that allows people order African dishes anywhere, anytime',
		techStack: ['tailwind', 'javaScript', 'pigination'],
		github_link: 'https://github.com/',
		live_link: 'https://breakfast.vercel.app',
	},
	{
		img: project4,
		name: 'Queens Collections',
		desc: 'This solution is a E-commerce clothing website',
		techStack: ['tailwind', 'javaScript'],
		github_link: 'https://github.com/queenscollection',
		live_link: 'https://queenscollection.netlify.app',
	},
	{
		img: project2,
		name: 'Job search Web App',
		desc: 'A solution that helps job seeks and recruiter without hassle',
		techStack: ['React', 'local Storagee'],
		github_link: 'https://github.com/Sridhar-C-25/jobsearchapp',
		live_link: 'https://myjobsearch.netlify.app',
	},
	{
		img: project4,
		name: 'Portfolio',
		desc: 'My portfolio website, design',
		techStack: ['React', 'React router', 'swiper', 'animation on scroll'],
		github_link: 'https://github.com/devAbdulsalam/fitness.git',
		live_link: 'https://sport-center.netlify.app',
	},
];

// // skill
export const skills = [
	{
		image: SkillImg1,
		count: 80,
	},
	{
		image: SkillImg2,
		count: 70,
	},
	{
		image: SkillImg3,
		count: 70,
	},
	{
		image: SkillImg4,
		count: 50,
	},
	{
		image: SkillImg5,
		count: 80,
	},
	{
		image: SkillImg6,
		count: 60,
	},
	{
		image: SkillImg7,
		count: 60,
	},
];

// // services
export const services = [
	{
		icon: 'fa-laptop-code',
		name: 'Web Development',
		description:
			'Using the latest technology, I take websites to the next level by creating digital experiences that convince customers.',
	},
	{
		icon: 'fa-tools',
		name: 'Web Maintanance',
		description:
			'I maintain websites making it effortless in usability, SEO and strong in performance.',
	},
	{
		icon: 'fa-people-roof',
		name: 'Project Management',
		description:
			'Using contemporary project management frameworks and tools to ensure overall success of your projects ',
	},
	{
		icon: 'fa-database',
		name: 'Research/Data Analysis',
		description: 'Research and analyze data to create intuitive, inclusive web solution for better user experience.',
	},
];

// // testimonials
export const testimonials = [
	{
		authorImg: TestiImage1,
		authorText:
			'he has fulfilled all the agreed assignments on time and his work always brought added value. He has advised us on best practices in terms of Project management, did a thorough research for our project, making it a successful one.',
		authorName: 'Queen Lateefa',
		authorPosition: 'CEO, Queens Collections',
	},
	{
		authorImg: TestiImage2,
		authorText:
			'high performance. We can’t imagine working without him. I would highly recommend working with him.',
		authorName: 'Mr. Prince',
		authorPosition: 'CEO Kudikan',
	},
	{
		authorImg: TestiImage3,
		authorText: 'Your Project Is In Safe Hands, ',
		authorName: 'Mr. Ken',
		authorPosition: 'Veteran Javascript Developer',
	},
	{
		authorImg: TestiImage3,
		authorText:
			"Abdulsalam is one of the most professional people I've worked with so far - responsive, creative, punctual and with structured approach.",
		authorName: 'Faruk Ahmed',
		authorPosition: 'Phyton Developer',
	},
];

// contact_info
export const contact_info = [
	{
		logo: 'mail',
		text: 'devabdulsalam74@gmail.com',
		link: 'https:mailto/ammuftau74@gmail.com',
	},
	{
		logo: 'logo-whatsapp',
		text: '+234 903 509 5173',
		link: 'https://wa.me/09035095173',
	},
	{
		logo: 'location',
		text: 'Kano, Nigeria',
	},
];
