<script>
	const positionItems = [
		{
			job_title: 'Full Stack Developer',
			company: 'Elevated Signals',
			date_year_start: '2021',
			date_month_start: 'Apr',
			date_year_end: '2024',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: [
				'Improved Postgres database stability and reduced load across all instances by 80% through performance monitoring, query plan analysis, query optimization and index modification',
				'Increased overall system responsiveness up to 5x through Express API endpoint refactoring and streamlining of data needed by Angular and React frontends',
				'Added new tests and maintained existing test suites in Jest to increase confidence in new releases',
				'Collaborated with product team to design new features, improve existing workflows and address customer needs',
				'Communicated with customer support team for triage and resolution of problems reported in production',
				'Reviewed pull requests and offered constructive feedback for other members of development team'
			]
		},
		{
			job_title: 'Software Developer',
			company: 'TELUS',
			date_year_start: '2019',
			date_month_start: 'Sept',
			date_year_end: '2021',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: [
				'Used Express/Nodejs, React and Cassandra in development of a full stack internal web application to enable self-serve interaction between TELUS team members and a large-scale vendor API ecosystem using Kong',
				'Developed, deployed and supported microservice APIs defined with OAS2 using Express/Nodejs, Jest, and the OpenShift container platform',
				'Published a privately scoped NPM package to facilitate standardization of request/response logging and correlation id implementations in other Express/Nodejs microservices'
			]
		},
		{
			job_title: 'Software Developer Co-op',
			company: 'TELUS',
			date_year_start: '2016',
			date_month_start: 'Sep',
			date_year_end: '2017',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: [
				'Developed rich web applications with JavaScript and AngularJS to increase visibility and monitoring potential of the company’s software services',
				'Wrote backend scripts with PHP and SQL to collect and process service status data to better understand downtime events and causes'
			]
		},
		{
			job_title: 'Software Developer in Test Co-op',
			company: 'Pulse Energy/EnerNOC',
			date_year_start: '2014',
			date_month_start: 'Sep',
			date_year_end: '2015',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: [
				'Performed regression testing prior to product releases to guard against bugs in the production environment',
				'Wrote web automation tests with Selenium and Python to reduce manual testing load and promote rapid smoke-testing of the platform'
			]
		}
	];
	const educationItems = [
		{
			degree_title: 'BSc. Computer Science',
			school: 'Simon Fraser University',
			date_year_start: '2012',
			date_year_end: '2018'
		}
	];
	const skillItems = [
		'Typescript',
		'Javascript',
		'ExpressJS',
		'Angular',
		'React',
		'Postgres',
		'SQL',
		'AWS',
		'Git',
		'Jest',
		'HTML',
		'CSS',
		'OAuth2',
		'OpenAPI',
		'API Design',
		'i18n'
	];
</script>

<div class="resume">
	<header>
		<h1>Jordan Toering</h1>
		<div class="contact">
			<div class="profession">Software Developer</div>
			<div>BC, Canada</div>
			<div>
				<a class="site" target="_blank" href="https://github.com/jordantoering"
					>github.com/jordantoering</a
				>
			</div>
			<div>toering3@gmail.com</div>
		</div>
	</header>

	<section>
		<div class="color-section-heading">
			<h2>Work Experience</h2>
			<div class="color-section-line"></div>
		</div>
		{#each positionItems as positionItem}
			<div class="position-item">
				<div class="position-item-heading">
					<div class="position-item-job-title">
						<h2>{positionItem.job_title}</h2>
					</div>
					<div class="position-item-company-date">
						<div><h3>{positionItem.company}</h3></div>
						<div class="position-item-date">
							<span
								>{positionItem.date_month_start}
								{positionItem.date_year_start} - {positionItem.date_month_end}
								{positionItem.date_year_end}</span
							>
						</div>
					</div>
				</div>
				<div class="position-item-description">
					<ul>
						{#each positionItem.description_items as item_description}
							<li>{item_description}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</section>

	<section>
		<div class="color-section-heading">
			<h2>Education</h2>
			<div class="color-section-line"></div>
		</div>
		{#each educationItems as educationItem}
			<div class="education-item">
				<div class="education-item-row">
					<div class="education-item-degree">
						<h2>{educationItem.degree_title}</h2>
					</div>
					<div class="education-item-school-year">
						<div class="education-item-school">
							<h3>{educationItem.school}</h3>
						</div>
						<div class="education-item-year">
							<span>{educationItem.date_year_start} - {educationItem.date_year_end}</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</section>

	<section>
		<div class="color-section-heading">
			<h2>Skills</h2>
			<div class="color-section-line"></div>
		</div>
		<ul class="skills-list">
			{#each skillItems as skillItem}
				<li class="skills-list-item">{skillItem}</li>
			{/each}
		</ul>
	</section>
</div>

<style>
	.resume {
		padding-left: 24px;
		padding-right: 24px;
		padding-top: 40px;
		padding-bottom: 40px;
	}

	@media only screen and (min-width: 768px) {
		.resume {
			padding-left: 60px;
			padding-right: 60px;
			padding-top: 60px;
			padding-bottom: 60px;
		}
	}

	.contact {
		margin-bottom: 16px;
	}

	.profession {
		font-weight: 600;
	}

	.site {
		text-decoration: none;
		color: black;
	}

	.color-section-heading {
		color: #2a3ffb;
		display: flex;
		align-items: center;
		margin-bottom: 24px;
		page-break-inside: avoid;
	}

	.color-section-heading > h2 {
		font-weight: 600;
		font-size: 22px;
		margin: 0;
	}

	.color-section-line {
		margin: 0;
		background-color: #2a3ffb;
		flex-grow: 1;
		height: 2px;
		margin-left: 16px;
		margin-top: 9px;
	}

	.position-item {
		margin-bottom: 36px;
	}

	.position-item-heading {
		margin: 0;
		display: flex;
		margin-bottom: 24px;
		align-items: baseline;
		-webkit-box-align: baseline;
		box-sizing: border-box;
	}

	.position-item-description > ul {
		margin: 0;
		padding: 0;
	}

	.position-item-description > ul > li {
		font-size: 16px;
		margin-bottom: 8px;
		margin-left: 18px;
		padding-left: 0;
	}

	.position-item-job-title {
		width: 300px;
		padding-right: 16px;
		box-sizing: border-box;
	}

	.position-item-company-date {
		margin-top: 0;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-grow: 1;
		box-sizing: border-box;
	}

	.position-item-company-date h3 {
		margin: 0;
		font-size: 16px;
	}

	.position-item-date {
		color: #4f5157;
		font-size: 16px;
		font-weight: 600;
		flex-shrink: 0;
	}

	.education-item {
		margin: 0;
		page-break-inside: avoid;
		margin-bottom: 12px;
	}

	.education-item-row {
		display: flex;
		align-items: baseline;
		margin-bottom: 12px;
	}

	.education-item-degree {
		width: 300px;
		padding-right: 16px;
		flex-shrink: 0;
		flex-grow: 0;
		box-sizing: border-box;
	}

	.education-item-degree > h2 {
		margin: 0;
		font-weight: 600;
		font-size: 16px;
	}

	.education-item-school-year {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-grow: 1;
	}

	.education-item-school > h3 {
		font-size: 16px;
		font-weight: 400;
		margin: 0;
		box-sizing: border-box;
	}

	.education-item-year {
		color: #4f5157;
		font-size: 16px;
		font-weight: 600;
	}

	ul.skills-list {
		box-sizing: border-box;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.skills-list-item {
		font-size: 16px;
		font-weight: 600;
		display: inline-flex;
		padding-right: 16px;
		margin-right: 16px;
		margin-bottom: 8px;
		border-right-color: #000000;
		border-right-width: 1px;
		border-right-style: solid;
		align-content: space-around;
	}

	li.skills-list-item:last-of-type {
		border-right: none;
	}

	section {
		margin-bottom: 40px;
	}

	header {
		margin: 0;
		margin-bottom: 40px;
	}

	h1 {
		font-weight: 600;
		font-size: 36px;
		margin: 0;
		margin-bottom: 8px;
	}

	h2 {
		font-weight: 600;
		font-size: 20px;
		margin: 0;
	}
</style>
