import emoji from 'react-easy-emoji';


function svgEmoji (input) {
	return emoji(input, {
		baseUrl: 'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/',
		ext: '.png',
		size: ''
	})
}

const illustration = {
	animated: false, // set to false to use static SVG
};

const greeting = {
	username: 'Samtou Assekouda',
	title: "Hi all, I'm Samtou",
	subTitle: svgEmoji(
		'A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with Python / Django / Flask / JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks.'
	),
	resumeLink: 'https://drive.google.com/file/d/1YPuO0ctesMkJ_onoTZkpLfhBJTPe4Npx/view?usp=sharing',
	displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
	github: 'https://github.com/AssekoudaSamtou',
	linkedin: 'https://www.linkedin.com/in/samtou-assekouda-b2a78b174/',
	gmail: 'christophe1999da@gmail.com',
	// gitlab: 'https://gitlab.com/samtou',
	// facebook: 'https://www.facebook.com/profile.php?id=100006987135486',
	// medium: 'https://medium.com/@christassek',
	// stackoverflow: 'https://stackoverflow.com/users/11230845/samtou',
	// instagram: 'https://www.instagram.com/christ_assek/',
	twitter: 'https://mobile.twitter.com/assekouda',
	// Instagram and Twitter are also supported in the links!
	display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
	title: 'What I do',
	subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
	skills: [
		svgEmoji(
			'⚡ Develop rich API with Django Rest FrameWork'
		),
		svgEmoji(
			'⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
		),
		svgEmoji('⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks'),
		svgEmoji(
			'⚡ Integration of third party services such as Twilio/ Heroku / Github'
		),
	],
	
	/* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
	
	softwareSkills: [
		{
			skillName: 'html-5',
			fontAwesomeClassname: 'fab fa-html5',
		},
		{
			skillName: 'css3',
			fontAwesomeClassname: 'fab fa-css3-alt',
		},
		{
			skillName: 'python',
			fontAwesomeClassname: 'fab fa-python',
		},
		{
			skillName: 'JavaScript',
			fontAwesomeClassname: 'fab fa-js',
		},
		{
			skillName: 'reactjs',
			fontAwesomeClassname: 'fab fa-react',
		},
		{
			skillName: 'nodejs',
			fontAwesomeClassname: 'fab fa-node',
		},
		// {
		//   skillName: 'swift',
		//   fontAwesomeClassname: 'fab fa-swift',
		// },
		{
			skillName: 'npm',
			fontAwesomeClassname: 'fab fa-npm',
		},
		{
			skillName: 'sql-database',
			fontAwesomeClassname: 'fas fa-database',
		},
		{
			skillName: 'nosql-database',
			fontAwesomeClassname: 'fas fa-database',
		},
		// {
		//   skillName: 'aws',
		//   fontAwesomeClassname: 'fab fa-aws',
		// },
		// {
		//   skillName: 'firebase',
		//   fontAwesomeClassname: 'fas fa-fire',
		// },
		{
			skillName: 'github',
			fontAwesomeClassname: 'fab fa-github',
		},
		{
			skillName: 'docker',
			fontAwesomeClassname: 'fab fa-docker',
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
	display: true, // Set false to hide this section, defaults to true
	schools: [
		{
			schoolName: 'IPNET INSTITUTE OF TECHNOLOGY',
			logo: require('./assets/images/ipnet.png'),
			subHeader: 'Bachelor of Science in Computer Science',
			duration: 'September 2017 - September 2020',
			desc: 'Participated in the Open Days Award and Managed a team on school project.',
			descBullets: [
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			],
		},
		// {
		//   schoolName: 'COLLEGE MILITAIRE EYADEMA',
		//   logo: require('./assets/images/stanfordLogo.png'),
		//   subHeader: 'Bachelor of Science in Computer Science',
		//   duration: 'September 2013 - April 2017',
		//   desc:
		//     'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
		//   descBullets: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit'],
		// },
	],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
	viewSkillBars: true, //Set it to true to show Proficiency Section
	experience: [
		{
			Stack: 'Frontend/Design', //Insert stack or technology you have experience in
			progressPercentage: '90%', //Insert relative proficiency in percentage
		},
		{
			Stack: 'Backend',
			progressPercentage: '80%',
		},
		{
			Stack: 'Programming',
			progressPercentage: '90%',
		},
	],
	displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
	display: true, //Set it to true to show workExperiences Section
	experience: [
		{
			role: 'Lead Web Developer',
			company: 'METASIS MEDIA ',
			companylogo: require('./assets/images/mmlogo.svg'),
			date: 'March 2022 – Present',
			desc: 'Consultant for two (02) main companies (Crowther.net and Elksdap.org) Build, deploy and maintain software and website',
		},
		{
			role: 'Fullstack Software Engineer',
			company: 'MICRO FINANCE PRO',
			companylogo: require('./assets/images/mfp.png'),
			date: 'August 2021 – February 2022',
			desc: 'I was responsible for the development and maintenance of a web application for financial institution',
			descBullets: [
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			],
		},
		{
			role: 'Director of IT services',
			company: 'New Touch Investing TOGO',
			companylogo: require('./assets/images/logo nti avec fond-min.png'),
			date: 'August 2020 – June 2021',
			desc: 'Manage and maintain all infomation systems',
			descBullets: [
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
				// 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			],
		},
		{
			role: 'Project Manager on school project',
			company: 'IPNET UNIVERSITY',
			companylogo: require('./assets/images/logo_ipnet.JPG'),
			date: 'March 2020 – July 2020',
			desc: 'I have managed a team based on waterfall model',
		},
	],
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */
const openSource = {
	githubConvertedToken: "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",
	githubUserName: 'AssekoudaSamtou', // Change to your GitHub username to view your profile in Contact Section.
	showGithubProfile: 'true', // Set true or false to show Contact profile using GitHub, defaults to true
	display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
	title: 'Big Projects',
	subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
	projects: [
		{
			image: require('./assets/images/elks-dap-logo-RGB-lightmode.png'),
			link: 'https://elksdap.org',
		},
		{
			image: require('./assets/images/crowther-logo.png'),
			link: 'https://crowther.net',
		},
		{
			image: require('./assets/images/vb.png'),
			link: 'https://vbfatad.org',
		},
		{
			image: require('./assets/images/logo_nti_sans_fond-min_225x225.png'),
			link: 'https://newtouchinvesting.com/',
		},
		{
			image: require('./assets/images/apple-touch-icon-144-precomposed.png'),
			link: 'https://doctor-assistance-web-app.herokuapp.com/',
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
	title: svgEmoji('Achievements And Certifications 🏆 '),
	subtitle: 'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',
	
	achievementsCards: [
		{
			title: 'Bronze medal at the Togolese Collegiate Programming Contest',
			subtitle:
				'First IPNET UNIVERSITY team to be in the top 3 among more than 20 teams from different schools.',
			image: require('./assets/images/icpc.PNG'),
			footerLink: [
				{
					name: 'Award Letter',
					url:
						'https://drive.google.com/file/d/1PuNScYVZODCpbaLJ4jKXbtcbMTki4vU0/view?usp=sharing',
				},
				/*{
					name: 'ICPI Blog',
					url:
						'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
				},*/
			],
		},
		{
			title: 'IPNET Institute of Technology\'s Open Days Award',
			subtitle: 'First prize for project presentation with Doctor-Help web application.',
			image: require('./assets/images/logo_ipnet.JPG'),
			footerLink: [
				{
					name: 'Demo',
					url: 'https://doctor-assistance-web-app.herokuapp.com/',
				},
				{
					name: 'IPNET Blog',
					url: 'https://www.ipnetuniversity.com/#projet21',
				},
			],
		},
		{
			title: 'Robotic camp Award',
			subtitle: 'First prize for project pitching at the robotic camp organised by the US embassy of Togo',
			image: require('./assets/images/usa2.jpg'),
			footerLink: [
				// { name: 'Certification', url: '' },
				/*{
					name: 'Award letter',
					url: 'https://pakistan-olx-1.firebaseapp.com/',
				},*/
				{
					name: 'US embassy blog',
					url: 'https://tg.usembassy.gov/fr/remarques-de-lambassadeur-gilmour-a-louverture-du-camp-de-robotique-lundi-20-aout-2018/',
				},
			],
		},
	],
	display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
	title: 'Blogs',
	subtitle:
		'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',
	
	blogs: [
		{
			url:
				'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
			title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
			description:
				'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
		},
		{
			url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
			title: 'Why REACT is The Best?',
			description:
				'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
	title: 'TALKS',
	subtitle: svgEmoji(
		'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
	),
	
	talks: [
		{
			title: 'Build Actions For Google Assistant',
			subtitle: 'Codelab at GDG DevFest Karachi 2019',
			slides_url: 'https://bit.ly/saadpasta-slides',
			event_url: 'https://www.facebook.com/events/2339906106275053/',
		},
	],
	display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
	title: svgEmoji('Podcast 🎙️'),
	subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',
	
	// Please Provide with Your Podcast embeded Link
	podcast: [
		'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
	],
	display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
	title: svgEmoji('Contact Me ☎️'),
	subtitle:
		'Discuss a project or just want to say hi? My Inbox is open for all.',
	number: '+228 93870335',
	emailAddress: 'samtou.assekouda@gmail.com',
};

// Twitter Section

const twitterDetails = {
	userName: 'assekouda', //Replace "twitter" with your Twitter username without @
	display: true, // Set true to display this section, defaults to false
};

export {
	illustration,
	greeting,
	socialMediaLinks,
	skillsSection,
	educationInfo,
	techStack,
	workExperiences,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo,
	twitterDetails,
	svgEmoji
};
