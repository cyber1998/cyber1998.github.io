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

	// Extract years from experiences for timeline
	$: timelineYears = experiences.map((exp, index) => {
		const yearMatch = exp.duration.match(/(\d{4})/);
		return {
			year: yearMatch ? parseInt(yearMatch[1]) : 2023 - index,
			index: index,
			company: exp.company.split(' ')[0] // Short company name
		};
	});

	// Timeline scroll functionality
	let timelineElement;
	let isDragging = false;
	let startX = null;
	let scrollLeft = 0;

	function handleTimelineClick(yearIndex) {
		if (!isDragging) {
			goToSlide(yearIndex);
		}
	}

	function handleMouseDown(e) {
		if (!timelineElement) return;
		isDragging = false;
		startX = e.pageX - timelineElement.offsetLeft;
		scrollLeft = timelineElement.scrollLeft;
		timelineElement.style.cursor = 'grabbing';
	}

	function handleMouseMove(e) {
		if (!timelineElement || startX === null) return;
		const x = e.pageX - timelineElement.offsetLeft;
		const walk = (x - startX) * 2; // Scroll speed multiplier
		timelineElement.scrollLeft = scrollLeft - walk;
		isDragging = true;
	}

	function handleMouseUp() {
		startX = null;
		if (timelineElement) {
			timelineElement.style.cursor = 'grab';
		}
		// Reset dragging flag after a short delay to prevent click events
		setTimeout(() => {
			isDragging = false;
		}, 100);
	}

	function handleMouseLeave() {
		handleMouseUp();
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
				<div class="slide-content" id="experience-slide-{currentSlide}">
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

					<!-- Timeline Navigation -->
					<div class="timeline-container">
						<div
							class="timeline"
							bind:this={timelineElement}
							on:mousedown={handleMouseDown}
							on:mousemove={handleMouseMove}
							on:mouseup={handleMouseUp}
							on:mouseleave={handleMouseLeave}
							role="tablist"
							aria-label="Work experience timeline"
							tabindex="0"
						>
							{#each timelineYears as yearData, index}
								<button
									class="timeline-dot"
									class:active={index === currentSlide}
									on:click={() => handleTimelineClick(index)}
									data-year={yearData.year}
									role="tab"
									aria-selected={index === currentSlide}
									aria-controls="experience-slide-{index}"
									aria-label="View {yearData.company} experience from {yearData.year}"
								>
									<span class="year">{yearData.year}</span>
									<span class="company-short">{yearData.company}</span>
								</button>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="progress-container">
		<div class="progress-bar">
			<div class="progress-fill" style="width: {((currentSlide + 1) / experiences.length) * 100}%"></div>
		</div>
	</div>
</div>

<style lang="css">
	.experience {
		height: 100%;
		display: flex;
		flex-direction: column;
		min-height: 400px;
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 1rem;
	}

	.experience-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 1rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	h2 {
		color: #ffffff;
		margin: 0;
		font-size: clamp(1.2rem, 4vw, 1.5rem);
		font-weight: 600;
	}

	.slide-counter {
		display: flex;
		align-items: center;
		gap: 0.3rem;
		font-size: clamp(0.8rem, 2.5vw, 0.9rem);
		color: rgba(255, 255, 255, 0.6);
		flex-shrink: 0;
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
		min-height: clamp(300px, 50vh, 500px);
		margin: 0 -0.5rem;
	}

	.slides-container {
		flex: 1;
		position: relative;
		margin: 0 0.5rem;
		min-height: 200px;
		max-width: 100%;
	}

	.slide {
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.12);
		backdrop-filter: blur(20px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: clamp(16px, 4vw, 24px);
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.25),
			0 4px 16px rgba(0, 0, 0, 0.15),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		position: relative;
		overflow: hidden;
		min-height: clamp(250px, 40vh, 400px);
	}

	.slide::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg,
			rgba(0, 0, 0, 0.08) 0%,
			rgba(0, 0, 0, 0.04) 50%,
			rgba(0, 0, 0, 0.02) 100%);
		border-radius: clamp(16px, 4vw, 24px);
		pointer-events: none;
	}

	.slide.active {
		background: rgba(0, 0, 0, 0.15);
		border-color: rgba(255, 255, 255, 0.18);
		box-shadow:
			0 12px 40px rgba(0, 0, 0, 0.3),
			0 6px 20px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
	}

	.slide-content {
		height: 100%;
		display: flex;
		flex-direction: column;
		padding: clamp(1rem, 4vw, 2rem);
		min-height: 250px;
		position: relative;
		z-index: 1;
		background: rgba(0, 0, 0, 0.06);
		border-radius: clamp(12px, 3vw, 20px);
		backdrop-filter: blur(8px);
	}

	.slide-content h3 {
		color: #ffffff;
		margin: 0 0 0.8rem 0;
		font-size: clamp(1.1rem, 3.5vw, 1.4rem);
		line-height: 1.3;
		font-weight: 600;
		background: linear-gradient(135deg, #ffffff, #e0e0e0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		word-wrap: break-word;
		hyphens: auto;
	}

	.company {
		color: rgba(255, 255, 255, 0.9);
		font-weight: 700;
		font-size: clamp(0.95rem, 3vw, 1.1rem);
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #ffffff, #cccccc);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		word-wrap: break-word;
		hyphens: auto;
	}

	.meta {
		display: flex;
		justify-content: space-between;
		margin: 1rem 0 1.5rem 0;
		font-size: clamp(0.8rem, 2.5vw, 0.9rem);
		color: rgba(255, 255, 255, 0.7);
		flex-wrap: wrap;
		gap: 0.5rem;
		padding: clamp(0.6rem, 2vw, 0.8rem) clamp(0.8rem, 3vw, 1.2rem);
		background: rgba(255, 255, 255, 0.05);
		border-radius: clamp(12px, 3vw, 16px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		backdrop-filter: blur(10px);
	}

	.achievements {
		flex: 1;
		overflow-y: auto;
		padding: 1rem clamp(0.5rem, 2vw, 1rem);
		max-height: clamp(150px, 30vh, 300px);
		padding-right: clamp(1rem, 3vw, 1.5rem);
	}

	.achievement-item {
		display: flex;
		align-items: flex-start;
		gap: 0.8rem;
		margin-bottom: 1rem;
		line-height: 1.6;
		font-size: clamp(0.85rem, 2.5vw, 0.95rem);
		color: rgba(255, 255, 255, 0.85);
		padding: clamp(0.6rem, 2vw, 0.8rem) clamp(0.8rem, 2.5vw, 1rem);
		background: rgba(255, 255, 255, 0.04);
		border-radius: clamp(8px, 2.5vw, 12px);
		border: 1px solid rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		transition: all 0.3s ease;
		position: relative;
		word-wrap: break-word;
		hyphens: auto;
		box-shadow:
			0 2px 8px rgba(0, 0, 0, 0.1),
			0 1px 4px rgba(0, 0, 0, 0.08);
	}

	.achievement-item:hover {
		background: rgba(255, 255, 255, 0.08);
		border-color: rgba(255, 255, 255, 0.15);
		transform: translateX(4px);
		box-shadow:
			0 6px 16px rgba(0, 0, 0, 0.2),
			0 3px 8px rgba(0, 0, 0, 0.15);
	}

	.achievement-item i {
		color: #ffffff;
		font-size: clamp(0.8rem, 2.5vw, 0.9rem);
		margin-top: 0.1rem;
		flex-shrink: 0;
		background: linear-gradient(135deg, #ffffff, #cccccc);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.progress-container {
		margin-top: 1rem;
		padding: 0 0.5rem;
	}

	.progress-bar {
		width: 100%;
		height: clamp(4px, 1.5vw, 6px);
		background: rgba(255, 255, 255, 0.1);
		border-radius: clamp(8px, 2.5vw, 12px);
		margin-bottom: 1.5rem;
		overflow: hidden;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.08);
	}

	.progress-fill {
		height: 100%;
		background: linear-gradient(90deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
		border-radius: clamp(8px, 2.5vw, 12px);
		transition: width 0.4s ease;
		box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
	}

	/* Scrollbar styling for achievements */
	.achievements::-webkit-scrollbar {
		width: clamp(4px, 1.5vw, 6px);
	}

	.achievements::-webkit-scrollbar-track {
		background: rgba(255, 255, 255, 0.05);
		border-radius: clamp(8px, 2.5vw, 12px);
	}

	.achievements::-webkit-scrollbar-thumb {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2));
		border-radius: clamp(8px, 2.5vw, 12px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.achievements::-webkit-scrollbar-thumb:hover {
		background: linear-gradient(180deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4));
	}

	/* Timeline Navigation Styles */
	.timeline-container {
		margin-top: 1.5rem;
		padding: 0.5rem 0;
		position: relative;
	}

	.timeline {
		display: flex;
		gap: clamp(1rem, 3vw, 1.5rem);
		overflow-x: auto;
		scroll-behavior: smooth;
		cursor: grab;
		padding: 0.5rem;
		margin: 0 -0.5rem;
		scrollbar-width: none;
		-ms-overflow-style: none;
		justify-content: center;
	}

	.timeline::-webkit-scrollbar {
		display: none;
	}

	.timeline:active {
		cursor: grabbing;
	}

	.timeline-dot {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: clamp(70px, 10vw, 90px);
		height: clamp(70px, 10vw, 90px);
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(10px);
		border: 2px solid rgba(255, 255, 255, 0.15);
		border-radius: 16px;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 1px 4px rgba(0, 0, 0, 0.1);
	}

	.timeline-dot:hover {
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.25);
		transform: translateY(-3px) scale(1.05);
		box-shadow:
			0 8px 24px rgba(0, 0, 0, 0.2),
			0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.timeline-dot.active {
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
		border-color: rgba(255, 255, 255, 0.4);
		transform: scale(1.2);
		box-shadow:
			0 8px 24px rgba(0, 0, 0, 0.25),
			0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.year {
		font-size: clamp(0.9rem, 2.5vw, 1.1rem);
		font-weight: 700;
		color: rgba(255, 255, 255, 0.9);
		line-height: 1;
		margin-bottom: 0.2rem;
	}

	.company-short {
		font-size: clamp(0.7rem, 1.8vw, 0.8rem);
		color: rgba(255, 255, 255, 0.6);
		font-weight: 500;
		text-align: center;
		line-height: 1;
		max-width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.timeline-dot.active .year {
		background: linear-gradient(135deg, #ffffff, #e0e0e0);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.timeline-dot.active .company-short {
		color: rgba(255, 255, 255, 0.8);
	}

	/* Mobile-specific adjustments */
	@media (max-width: 768px) {
		.experience {
			padding: 0 0.5rem;
		}

		.experience-header {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}

		.carousel {
			margin: 0 -0.25rem;
		}

		.slides-container {
			margin: 0 0.25rem;
		}

		.slide-content {
			padding: 1.5rem 1rem;
		}

		.meta {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.3rem;
			padding: 0.6rem 0.8rem;
		}

		.achievements {
			padding: 0.8rem clamp(0.4rem, 1.5vw, 0.8rem);
			max-height: 180px;
			padding-right: clamp(0.8rem, 2.5vw, 1.2rem);
		}

		.achievement-item {
			padding: 0.6rem 0.8rem;
			margin-bottom: 0.8rem;
		}

		.achievement-item:hover {
			transform: translateX(2px);
		}

		.progress-container {
			margin-top: 0.8rem;
		}

		.timeline-container {
			margin-top: 1rem;
		}

		.timeline {
			gap: 0.8rem;
			padding: 0.3rem;
			margin: 0 -0.3rem;
		}

		.timeline-dot {
			width: 60px;
			height: 60px;
		}
	}

	@media (max-width: 480px) {
		.experience {
			padding: 0 0.25rem;
		}

		.carousel {
			min-height: 280px;
		}

		.slide {
			min-height: 220px;
		}

		.slide-content {
			padding: 1rem 0.8rem;
		}

		.slide-content h3 {
			margin-bottom: 0.6rem;
		}

		.company {
			margin-bottom: 0.8rem;
		}

		.meta {
			margin: 0.8rem 0 1rem 0;
			padding: 0.5rem 0.6rem;
		}

		.achievements {
			padding: 0.8rem clamp(0.4rem, 1.5vw, 0.8rem);
			max-height: 180px;
			padding-right: clamp(0.8rem, 2.5vw, 1.2rem);
		}

		.achievement-item {
			padding: 0.5rem 0.6rem;
			margin-bottom: 0.6rem;
			font-size: 0.85rem;
		}

		.progress-container {
			margin-top: 0.8rem;
		}

		.timeline-container {
			margin-top: 0.8rem;
		}

		.timeline {
			gap: 0.6rem;
			padding: 0.2rem;
			margin: 0 -0.2rem;
		}

		.timeline-dot {
			width: 55px;
			height: 55px;
		}

		.year {
			font-size: 0.9rem;
		}

		.company-short {
			font-size: 0.7rem;
		}
	}

	@media (max-width: 480px) {
		.experience {
			padding: 0 0.25rem;
		}

		.carousel {
			min-height: 280px;
		}

		.slide {
			min-height: 220px;
		}

		.slide-content {
			padding: 1rem 0.8rem;
		}

		.slide-content h3 {
			margin-bottom: 0.6rem;
		}

		.company {
			margin-bottom: 0.8rem;
		}

		.meta {
			margin: 0.8rem 0 1rem 0;
			padding: 0.5rem 0.6rem;
		}

		.achievements {
			padding: 0.8rem clamp(0.4rem, 1.5vw, 0.8rem);
			max-height: 180px;
			padding-right: clamp(0.8rem, 2.5vw, 1.2rem);
		}

		.achievement-item {
			padding: 0.5rem 0.6rem;
			margin-bottom: 0.6rem;
			font-size: 0.85rem;
		}

		.progress-container {
			margin-top: 0.8rem;
		}

		.timeline-container {
			margin-top: 0.8rem;
		}

		.timeline {
			gap: 0.5rem;
			padding: 0.2rem;
			margin: 0 -0.2rem;
		}

		.timeline-dot {
			width: 50px;
			height: 50px;
		}

		.year {
			font-size: 0.85rem;
		}

		.company-short {
			font-size: 0.65rem;
		}
	}
</style>


