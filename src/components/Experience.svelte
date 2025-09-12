<script>
	let currentSlide = 0;

	const experiences = [
		{
			title: "Senior Backend Engineer - Fulltime Consultant",
			company: "Alleyway Capital LLC",
			duration: "Sep 2023 – Present",
			location: "Remote (IST with overlapping PDT)",
			achievements: [
				"Setup several tools and processes to increase the productivity of developers like Bitbucket CI/CD pipelines, KorbitAI, AWS suite of tools and architected a scalable logging microservice",
				"Revamped major part of the code & optimised several slow SQL queries, and fixed bottlenecks in the database using partitioning and proper indexes",
				"Worked with several third-party integrations like Shopify, Klaviyo, Omnisend, Trackdesk and Sentry",
				"Architected and built a garbage collection system to archive old data from the system based on business needs and free up database clutter",
				"Modularized legacy code to functionally separate modules and custom services for clients",
				"Leveraged AI-based tools like OpenAI's gpt-4 model to generate quizzes using short and meaningful inputs and Gemini's gemini-1.5-flash model to extract visual features from existing screenshots to personalize the look and feel of quizzes",
				"Setup AI-based recommendation of products based on the answers received from quizzes which were calculated using embeddings (OpenAI's ADA 002)",
				"Setup AI-based logic jumps which generated exciting new quiz logic based on the quiz's context, user's prompt as well as the user's business details."
			]
		},
		{
			title: "Senior Backend Engineer",
			company: "FarmSetu Technologies Pvt. Ltd.",
			duration: "Dec 2021 – Sep 2023",
			location: "Nashik, MH",
			achievements: [
				"Developed several GraphQL/REST-based microservices with intricate business logic and seamless intercommunication",
				"Optimized database and API performance, resulting in response time reductions of up to 80%",
				"Led, architected, and developed multiple backend services for a variety of agri-launchpads including finance, e-commerce, and content creation-related products",
				"Collaborated closely with product, business, and customer success teams",
				"Leveraged GCP and DigitalOcean CDN for infrastructure, along with terraform for provisioning",
				"Conducted 25+ engineering interviews"
			]
		},
		{
			title: "Software Developer",
			company: "Ufaber Edutech Pvt. Ltd.",
			duration: "Mar 2021 - Nov 2021",
			location: "Remote, India",
			achievements: [
				"Led a team of junior developers to build several mock examination systems, exam evaluation systems, and LMS products.",
				"Mentored colleagues and junior developers in agile methodologies and query optimization.",
				"Collaborated with the product/project team and senior management to develop new features and improve existing ones."
			]
		},
		{
			title: "Junior Software Developer",
			company: "KisanHub Technologies Pvt. Ltd.",
			duration: "Mar 2019 - Feb 2021",
			location: "Pune, India",
			achievements: [
				"Collaborated with team members to build a crop quality module, which helped businesses assess the export quality of crops worth $500k each day.",
				"Built and documented an ETL system to set up sync of agricultural and geo-location data of farmers from external APIs.",
				"Fixed several bugs and improved the performance of the existing system.",
				"Collaborated in squads to ship working features within days of planning and inception."
			]
		},
		{
			title: "Junior Software Engineer",
			company: "Zephony Pvt. Ltd.",
			duration: "Aug 2018 - Feb 2019",
			location: "Remote, India",
			achievements: [
				"Developed multiple RESTful APIs for a variety of clients.",
				"Implemented custom data structures and algorithms to reduce dependency on external libraries."
			]
		},
		{
			title: "Python Developer",
			company: "Technokrats Pvt. Ltd.",
			duration: "May 2018 - Jul 2018",
			location: "Kolkata, India",
			achievements: [
				"Collaborated with a UK-based client to maintain an insurance claims management system."
			]
		}
	];

	function nextSlide() {
		currentSlide = (currentSlide + 1) % experiences.length;
	}

	function prevSlide() {
		currentSlide = currentSlide === 0 ? experiences.length - 1 : currentSlide - 1;
	}

	function goToSlide(index) {
		currentSlide = index;
	}
</script>

<div class="experience">
	<div class="experience-header">
		<h2>Work Experience</h2>
		<div class="slide-counter">
			<span class="current">{currentSlide + 1}</span>
			<span class="separator">/</span>
			<span class="total">{experiences.length}</span>
		</div>
	</div>

	<div class="carousel">
		<div class="slides-container">
			<div class="slide active">
				<div class="slide-content">
					<h3>{experiences[currentSlide].title}</h3>
					<span class="company">{experiences[currentSlide].company}</span>
					<div class="meta">
						<span class="duration">{experiences[currentSlide].duration}</span>
						<span class="location">{experiences[currentSlide].location}</span>
					</div>
					<div class="achievements">
						{#each experiences[currentSlide].achievements as ach}
							<div class="achievement-item">
								<i class="fas fa-check-circle"></i>
								<span>{ach}</span>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="progress-container">
		<div class="progress-bar">
			<div class="progress-fill" style="width: {((currentSlide + 1) / experiences.length) * 100}%"></div>
		</div>
		<div class="progress-dots">
			{#each experiences as _, index}
				<button
					class="dot"
					class:active={index === currentSlide}
					on:click={() => goToSlide(index)}
					aria-label="Go to experience {index + 1}"
				></button>
			{/each}
		</div>
	</div>
</div>

<style>
	.experience {
		height: 100%;
		display: flex;
		flex-direction: column;
		min-height: 400px;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
	}

	h2 {
		color: #ffffff;
		margin: 0;
		font-size: 1.5rem;
		font-weight: 600;
	}

	.slide-counter {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}

	.current {
		color: #ffffff;
		font-weight: 600;
	}

	.carousel {
		display: flex;
		align-items: center;
		flex: 1;
		position: relative;
		min-height: 350px;
	}

	.nav-btn {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
		color: #ffffff;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all 0.3s;
		font-size: 1rem;
		z-index: 2;
	}

	.nav-btn:hover:not(:disabled) {
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
		transform: scale(1.1);
	}

	.nav-btn:disabled {
		opacity: 0.3;
		cursor: not-allowed;
	}

	.slides-container {
		flex: 1;
		position: relative;
		margin: 0 1rem;
		min-height: 200px;
	}

	.slide {
		width: 100%;
		height: 100%;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.slide.active {
		background: rgba(255, 255, 255, 0.08);
	}

	.slide-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: 0.5rem 0;
		min-height: 300px;
	}

	.slide-content h3 {
		color: #ffffff;
		margin: 0 0 0.5rem 0;
		font-size: 1.2rem;
		line-height: 1.3;
		font-weight: 500;
	}

	.company {
		color: #ffffff;
		font-weight: 600;
		font-size: 1rem;
		margin-bottom: 0.5rem;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		margin: 0.5rem 0 1rem 0;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.achievements {
		flex: 1;
		overflow-y: auto;
		padding-right: 0.5rem;
	}

	.achievement-item {
		display: flex;
		align-items: flex-start;
		gap: 0.5rem;
		margin-bottom: 0.8rem;
		line-height: 1.5;
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
	}

	.achievement-item i {
		color: #ffffff;
		font-size: 0.8rem;
		margin-top: 0.1rem;
		flex-shrink: 0;
	}

	.progress-container {
		margin-top: 1rem;
	}

	.progress-bar {
		width: 100%;
		height: 4px;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 2px;
		margin-bottom: 1rem;
		overflow: hidden;
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, #ffffff, #cccccc);
		border-radius: 2px;
		transition: width 0.3s ease;
	}

	.progress-dots {
		display: flex;
		justify-content: center;
		gap: 0.5rem;
	}

	.dot {
		width: 12px;
		height: 12px;
		border-radius: 50%;
		border: 2px solid rgba(255, 255, 255, 0.3);
		background: transparent;
		cursor: pointer;
		transition: all 0.3s;
	}

	.dot:hover {
		border-color: #ffffff;
		transform: scale(1.2);
	}

	.dot.active {
		background: #ffffff;
		border-color: #ffffff;
	}

	/* Scrollbar styling for achievements */
	.achievements::-webkit-scrollbar {
		width: 4px;
	}

	.achievements::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: 2px;
	}

	.achievements::-webkit-scrollbar-thumb {
		background: rgba(255, 255, 255, 0.3);
		border-radius: 2px;
	}

	.achievements::-webkit-scrollbar-thumb:hover {
		background: rgba(255, 255, 255, 0.5);
	}
</style>
