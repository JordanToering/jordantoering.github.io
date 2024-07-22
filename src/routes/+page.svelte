<script>
	import { resumeContent } from '$lib/resume/content';
</script>

<div class="paper-container">
	<div class="resume">
		<div class="download-pdf">
			<a href="jt_resume.pdf" download>
				<img
					class="download-pdf-svg"
					src="download_pdf.svg"
					title="Download PDF Copy"
					alt="Download PDF Copy"
				/></a
			>
		</div>
		<header>
			<h1>{resumeContent.full_name}</h1>
			<div class="contact">
				<div class="profession">{resumeContent.profession_title}</div>
				<div>{resumeContent.location}</div>
				<div>
					<a class="site" target="_blank" href={resumeContent.github_details.full_url}
						>{resumeContent.github_details.short_link}</a
					>
				</div>
				<div>{resumeContent.email}</div>
			</div>
		</header>

		<section>
			<div class="color-section-heading">
				<h2>Work Experience</h2>
				<div class="color-section-line"></div>
			</div>
			{#each resumeContent.work_experience_items as work_experience_item}
				<div class="position-item">
					<div class="position-item-heading">
						<div class="position-item-job-title">
							<h2>{work_experience_item.job_title}</h2>
						</div>
						<div class="position-item-company-date">
							<div><h3>{work_experience_item.company_name}</h3></div>
							<div class="position-item-date">
								<span
									>{work_experience_item.date_month_start}
									{work_experience_item.date_year_start} - {work_experience_item.date_month_end}
									{work_experience_item.date_year_end}</span
								>
							</div>
						</div>
					</div>
					<div class="position-item-description">
						<ul>
							{#each work_experience_item.description_items as item_description}
								<li>{item_description}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</section>

		<section>
			<div class="color-section-heading">
				<h2>Co-Op Experience</h2>
				<div class="color-section-line"></div>
			</div>
			{#each resumeContent.co_op_experience_items as co_op_experience_item}
				<div class="education-item">
					<div class="education-item-row">
						<div class="education-item-degree">
							<h2>{co_op_experience_item.job_title}</h2>
						</div>
						<div class="education-item-school-year">
							<div class="education-item-school">
								<h3>{co_op_experience_item.company_name}</h3>
							</div>
							<div class="education-item-year">
								<span
									>{co_op_experience_item.date_month_start}
									{co_op_experience_item.date_year_start} - {co_op_experience_item.date_month_end}
									{co_op_experience_item.date_year_end}</span
								>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</section>

		<section>
			<div class="color-section-heading">
				<h2>Education</h2>
				<div class="color-section-line"></div>
			</div>
			{#each resumeContent.education_items as education_item}
				<div class="education-item">
					<div class="education-item-row">
						<div class="education-item-degree">
							<h2>{education_item.degree_title}</h2>
						</div>
						<div class="education-item-school-year">
							<div class="education-item-school">
								<h3>{education_item.school_name}</h3>
							</div>
							<div class="education-item-year">
								<span>{education_item.date_year_start} - {education_item.date_year_end}</span>
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
				{#each resumeContent.skill_items as skill_item}
					<li class="skills-list-item">{skill_item}</li>
				{/each}
			</ul>
		</section>
	</div>
</div>

<style>
	.paper-container {
		margin: 40px auto 40px auto;
		max-width: 1000px;
		width: 100%;
		box-sizing: border-box;
		background-color: #ffffff;
	}

	.resume {
		padding-left: 60px;
		padding-right: 60px;
		padding-top: 60px;
		padding-bottom: 60px;
		max-width: 931px;
		box-sizing: border-box;
		margin: 0 auto;
	}

	.position-item-heading {
		margin: 0;
		display: flex;
		margin-bottom: 24px;
		align-items: baseline;
		box-sizing: border-box;
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

	.education-item-school-year {
		margin: 0;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		flex-grow: 1;
	}

	@media screen and (max-width: 768px) {
		.paper-container {
			width: 100%;
			box-sizing: border-box;
			background-color: #ffffff;
			margin: 0;
		}

		.resume {
			padding-left: 24px;
			padding-right: 24px;
			padding-top: 40px;
			padding-bottom: 40px;
			max-width: 931px;
			box-sizing: border-box;
			margin: 0 auto;
		}

		.position-item-heading {
			margin: 0;
			display: block;
			margin-bottom: 16px;
			align-items: baseline;
			box-sizing: border-box;
		}
		.position-item-job-title {
			width: 100%;
			padding-right: 0;
			box-sizing: border-box;
		}

		.position-item-company-date {
			margin-top: 6px;
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			flex-grow: 1;
			box-sizing: border-box;
		}

		.education-item-row {
			display: block;
			align-items: baseline;
			margin-bottom: 12px;
		}

		.education-item-degree {
			width: 100%;
			box-sizing: border-box;
		}

		.education-item-school-year {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			margin-top: 6px;
			flex-grow: 1;
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

	.education-item-degree > h2 {
		margin: 0;
		font-weight: 600;
		font-size: 16px;
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

	.download-pdf {
		float: right;
	}

	.download-pdf-svg {
		height: 60px;
		width: 60px;
	}

	@media print {
		@page {
			size: letter;
		}

		.paper-container {
			margin: 0 auto;
			max-width: 100vw;
			width: 100vw;
			height: 100vh;
		}

		.resume {
			max-width: 931px;
		}

		.download-pdf {
			display: none;
		}
	}
</style>
