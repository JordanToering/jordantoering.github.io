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
			description_items: ['One', 'Two', 'Three']
		},
		{
			job_title: 'Software Developer',
			company: 'TELUS',
			date_year_start: '2019',
			date_month_start: 'Sept',
			date_year_end: '2021',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: ['One', 'Two', 'Three']
		},
		{
			job_title: 'Software Developer Co-op',
			company: 'TELUS',
			date_year_start: '2016',
			date_month_start: 'Sep',
			date_year_end: '2017',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: ['One', 'Two']
		},
		{
			job_title: 'Software Developer in Test Co-op',
			company: 'Pulse Energy/EnerNOC',
			date_year_start: '2014',
			date_month_start: 'Sep',
			date_year_end: '2015',
			date_month_end: 'Apr',
			currently_working: false,
			description_items: ['One', 'Two']
		}
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
					<div>
						<h2>{positionItem.job_title}</h2>
					</div>
					<div>
						<div><h3>{positionItem.company}</h3></div>
						<div>
							<span
								>{positionItem.date_month_start}
								{positionItem.date_year_start} - {positionItem.date_month_end}
								{positionItem.date_year_end}</span
							>
						</div>
					</div>
				</div>
				<ul>
					{#each positionItem.description_items as item_description}
						<li>{item_description}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</section>

	<section>
		<div class="color-section-heading">
			<h2>Education</h2>
			<div class="color-section-line"></div>
		</div>
	</section>

	<section>
		<div class="color-section-heading">
			<h2>Skills</h2>
			<div class="color-section-line"></div>
		</div>
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
		-webkit-text-decoration: none;
		color: black;
	}

	.color-section-heading {
		color: #2a3ffb;
		display: flex;
		-webkit-box-align: center;
		align-items: center;
		margin-bottom: 24px;
		page-break-inside: avoid;
	}

	.color-section-line {
		margin: 0;
		background-color: #2a3ffb;
		-webkit-box-flex: 1;
		flex-grow: 1;
		height: 2px;
		margin-left: 16px;
		margin-top: 9px;
	}

	.position-item {
		margin: 0;
		margin-bottom: 36px;
	}

	.position-item-heading {
		margin: 0;
		display: flex;
		margin-bottom: 24px;
	}

	.position-item-description {
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
		font-size: 22px;
		margin: 0;
	}
</style>
