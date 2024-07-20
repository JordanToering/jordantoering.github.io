export interface ResumeContent {
	full_name: string;
	profession_title: string;
	location: string;
	github_details: {
		short_link: string;
		full_url: string;
	};
	email: string;
	work_experience_items: WorkExperienceItem[];
	co_op_experience_items: CoOpExperienceItem[];
	education_items: EducationItem[];
	skill_items: string[];
}

export interface WorkExperienceItem {
	job_title: string;
	company_name: string;
	date_year_start: string;
	date_month_start: string;
	date_year_end: string;
	date_month_end: string;
	description_items: string[];
}

export interface CoOpExperienceItem {
	job_title: string;
	company_name: string;
	date_year_start: string;
	date_month_start: string;
	date_year_end: string;
	date_month_end: string;
}

export interface EducationItem {
	degree_title: string;
	school_name: string;
	date_year_start: string;
	date_year_end: string;
}

export const resumeContent: ResumeContent = {
	full_name: `Jordan Toering`,
	profession_title: `Software Developer`,
	location: `BC, Canada`,
	github_details: {
		short_link: `github.com/jordantoering`,
		full_url: `https://github.com/jordantoering`
	},
	email: `toering3@gmail.com`,
	work_experience_items: [
		{
			job_title: `Full Stack Developer`,
			company_name: `Elevated Signals`,
			date_year_start: `2021`,
			date_month_start: `Apr`,
			date_year_end: `2024`,
			date_month_end: `Apr`,
			description_items: [
				`Improved Postgres database stability and decreased load by up to 80% across all instances through performance monitoring, query plan optimization and index tuning.`,
				`Reduced page load times through Express API endpoint refactoring and streamlining of data needed by Angular and React frontends.`,
				`Designed and developed a full text search at the database level to give users the ability to quickly find any entity in the system using a single input field.`,
				`Built an interactive directed graph visualization to help users trace the flow of materials within their production processes.`,
				`Collaborated with product team to design new features and improve existing workflows in order to promote user retention and attract new monthly recurring revenue.`,
				`Directly communicated with users and worked closely with support team to quickly triage and resolve production issues.`,
				`Added and maintained Jest integration test suites in order to guard against regressions in new releases.`
			]
		},
		{
			job_title: `Software Developer`,
			company_name: `TELUS`,
			date_year_start: `2019`,
			date_month_start: `Sept`,
			date_year_end: `2021`,
			date_month_end: `Apr`,
			description_items: [
				`Developed, deployed and supported OpenAPI defined microservice using Express/Nodejs, Jest, and the OpenShift container platform.`,
				`Used Express/Nodejs and React to build an internal self-serve application that allowed other teams to rapidly onboard microservices to Kong API Gateway.`,
				`Mentored junior developers in system design, code quality and critical thinking in order to improve team productivity.`,
				`Published a privately scoped NPM package to facilitate standardization of request/response logging and correlation id implementations across company microservices.`
			]
		}
	],
	co_op_experience_items: [
		{
			job_title: `Software Developer`,
			company_name: `TELUS`,
			date_year_start: `2016`,
			date_month_start: `Sep`,
			date_year_end: `2017`,
			date_month_end: `Apr`
		},
		{
			job_title: `Software Developer in Test`,
			company_name: `Pulse Energy/EnerNOC`,
			date_year_start: `2014`,
			date_month_start: `Sep`,
			date_year_end: `2015`,
			date_month_end: `Apr`
		}
	],
	education_items: [
		{
			degree_title: `BSc. Computer Science`,
			school_name: `Simon Fraser University`,
			date_year_start: `2012`,
			date_year_end: `2018`
		}
	],
	skill_items: [
		`Typescript`,
		`Javascript`,
		`ExpressJS`,
		`Angular`,
		`React`,
		`Postgres`,
		`SQL`,
		`AWS`,
		`Git`,
		`Jest`,
		`HTML`,
		`CSS`,
		`OAuth2`,
		`OpenAPI`,
		`API Design`,
		`i18n`,
		`ZPL`
	]
};
