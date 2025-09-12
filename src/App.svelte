<script>
	import About from './components/About.svelte';
	import Experience from './components/Experience.svelte';

	let openSkillCategory = $state('languages'); // Default to first category open

	function toggleSkillCategory(category) {
		openSkillCategory = openSkillCategory === category ? null : category;
	}
</script>

<main class="portfolio">
	<div class="background"></div>
	<div class="particles">
		{#each Array(50) as _, i}
			<div class="particle" style="--delay: {i * 0.1}s; --duration: {3 + (i % 3)}s; --size: {2 + (i % 3)}px;"></div>
		{/each}
	</div>
	<header class="header">
		<h1>Cyber Naskar</h1>
		<p>Backend Engineer</p>
	</header>
	<div class="content">
		<div class="section about">
			<About />
		</div>
		<div class="section experience">
			<Experience />
		</div>
		<div class="section skills-contact-education">
			<div class="unified-content">
				<div class="skills-section">
					<h3>Technical Skills</h3>
					<div class="skill-categories">
						<div class="skill-category">
							<button 
								class="skill-category-header" 
								onclick={() => toggleSkillCategory('languages')}
								aria-expanded={openSkillCategory === 'languages'}
							>
								<h4>Languages</h4>
								<i class="fas fa-chevron-down skill-chevron" class:rotated={openSkillCategory === 'languages'}></i>
							</button>
							<div class="skill-tags-container" class:open={openSkillCategory === 'languages'}>
								<div class="skill-tags">
									<span class="skill-tag">Python</span>
									<span class="skill-tag">TypeScript</span>
									<span class="skill-tag">JavaScript</span>
									<span class="skill-tag">SQL</span>
									<span class="skill-tag">GraphQL</span>
								</div>
							</div>
						</div>
						<div class="skill-category">
							<button 
								class="skill-category-header" 
								onclick={() => toggleSkillCategory('frameworks')}
								aria-expanded={openSkillCategory === 'frameworks'}
							>
								<h4>Frameworks & Libraries</h4>
								<i class="fas fa-chevron-down skill-chevron" class:rotated={openSkillCategory === 'frameworks'}></i>
							</button>
							<div class="skill-tags-container" class:open={openSkillCategory === 'frameworks'}>
								<div class="skill-tags">
									<span class="skill-tag">Django</span>
									<span class="skill-tag">Django REST</span>
									<span class="skill-tag">Flask</span>
									<span class="skill-tag">React</span>
									<span class="skill-tag">Node.js</span>
									<span class="skill-tag">Express</span>
								</div>
							</div>
						</div>
						<div class="skill-category">
							<button 
								class="skill-category-header" 
								onclick={() => toggleSkillCategory('databases')}
								aria-expanded={openSkillCategory === 'databases'}
							>
								<h4>Databases</h4>
								<i class="fas fa-chevron-down skill-chevron" class:rotated={openSkillCategory === 'databases'}></i>
							</button>
							<div class="skill-tags-container" class:open={openSkillCategory === 'databases'}>
								<div class="skill-tags">
									<span class="skill-tag">PostgreSQL</span>
									<span class="skill-tag">MySQL</span>
									<span class="skill-tag">MongoDB</span>
									<span class="skill-tag">Redis</span>
									<span class="skill-tag">Elasticsearch</span>
								</div>
							</div>
						</div>
						<div class="skill-category">
							<button 
								class="skill-category-header" 
								onclick={() => toggleSkillCategory('cloud')}
								aria-expanded={openSkillCategory === 'cloud'}
							>
								<h4>Cloud & DevOps</h4>
								<i class="fas fa-chevron-down skill-chevron" class:rotated={openSkillCategory === 'cloud'}></i>
							</button>
							<div class="skill-tags-container" class:open={openSkillCategory === 'cloud'}>
								<div class="skill-tags">
									<span class="skill-tag">AWS</span>
									<span class="skill-tag">Docker</span>
									<span class="skill-tag">Kubernetes</span>
									<span class="skill-tag">GCP</span>
									<span class="skill-tag">Terraform</span>
									<span class="skill-tag">CI/CD</span>
								</div>
							</div>
						</div>
						<div class="skill-category">
							<button 
								class="skill-category-header" 
								onclick={() => toggleSkillCategory('tools')}
								aria-expanded={openSkillCategory === 'tools'}
							>
								<h4>Tools & Technologies</h4>
								<i class="fas fa-chevron-down skill-chevron" class:rotated={openSkillCategory === 'tools'}></i>
							</button>
							<div class="skill-tags-container" class:open={openSkillCategory === 'tools'}>
								<div class="skill-tags">
									<span class="skill-tag">Git</span>
									<span class="skill-tag">Bitbucket</span>
									<span class="skill-tag">GitHub</span>
									<span class="skill-tag">Jira</span>
									<span class="skill-tag">Slack</span>
									<span class="skill-tag">Postman</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="contact-education-section">
					<div class="education-section">
						<h3>Education</h3>
						<div class="education-content">
							<i class="fas fa-graduation-cap"></i>
							<div class="education-text">
								<h4>Birla Institute of Technology, Mesra</h4>
								<p>Bachelor of Computer Applications</p>
								<p class="meta">Graduated June 2018</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</main>

<style lang="css">
	.portfolio {
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		background: #000000;
		color: #ffffff;
		overflow: hidden;
		position: relative;
	}

	.background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: 
			radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.03) 0%, transparent 50%),
			radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.02) 0%, transparent 50%);
		z-index: -1;
	}

	.particles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: -1;
		pointer-events: none;
	}

	.particle {
		position: absolute;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 50%;
		animation: float var(--duration) ease-in-out infinite;
		animation-delay: var(--delay);
		width: var(--size);
		height: var(--size);
		box-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
	}

	.particle:nth-child(3n) {
		background: rgba(255, 255, 255, 0.15);
		box-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
	}

	.particle:nth-child(5n) {
		background: rgba(255, 255, 255, 0.08);
		box-shadow: 0 0 4px rgba(255, 255, 255, 0.15);
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(100vh) translateX(0) scale(0.5);
			opacity: 0;
		}
		10% {
			opacity: 0.3;
		}
		50% {
			transform: translateY(50vh) translateX(10px) scale(1);
			opacity: 0.8;
		}
		90% {
			opacity: 0.3;
		}
	}

	.header {
		text-align: center;
		padding: 2rem 1rem 1rem;
		background: rgba(255, 255, 255, 0.02);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.header h1 {
		margin: 0;
		font-size: 2.5rem;
		font-weight: 600;
		background: linear-gradient(135deg, #ffffff, #cccccc);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.header p {
		margin: 0.5rem 0 0;
		font-size: 1.2rem;
		color: rgba(255, 255, 255, 0.6);
		font-weight: 300;
	}

	.content {
		flex: 1;
		display: grid;
		grid-template-columns: 1fr 3fr 1fr;
		grid-template-rows: auto;
		grid-template-areas: "about experience skills-contact-education";
		gap: 1rem;
		padding: 1rem;
		overflow-y: auto;
	}

	.section {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(25px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: 24px;
		padding: 2rem;
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.3),
			0 2px 16px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		transition: all 0.4s ease;
		position: relative;
		overflow: hidden;
	}

	.section::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg,
			rgba(255, 255, 255, 0.08) 0%,
			rgba(255, 255, 255, 0.04) 50%,
			rgba(255, 255, 255, 0.02) 100%);
		border-radius: 24px;
		pointer-events: none;
		z-index: -1;
	}

	.section:hover {
		transform: translateY(-8px);
		box-shadow:
			0 16px 48px rgba(0, 0, 0, 0.4),
			0 8px 24px rgba(0, 0, 0, 0.3),
			inset 0 1px 0 rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.18);
		background: rgba(255, 255, 255, 0.12);
	}

	.about {
		grid-area: about;
	}

	.experience {
		grid-area: experience;
	}

	.skills-contact-education {
		grid-area: skills-contact-education;
	}

	.unified-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		gap: 2rem;
	}

	.skills-section h3 {
		color: #ffffff;
		margin: 0 0 1.5rem 0;
		font-size: 1.3rem;
		font-weight: 600;
		text-align: center;
	}

	.skill-categories {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.skill-category h4 {
		color: #ffffff;
		margin: 0 0 0.8rem 0;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.skill-category-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background: none;
		border: none;
		color: #ffffff;
		cursor: pointer;
		padding: 0.5rem 0;
		font-size: inherit;
		font-family: inherit;
		transition: all 0.3s ease;
	}

	.skill-category-header:hover {
		color: rgba(255, 255, 255, 0.9);
	}

	.skill-category-header h4 {
		margin: 0;
		font-size: 1rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.5px;
	}

	.skill-chevron {
		font-size: 0.8rem;
		transition: transform 0.3s ease;
		color: rgba(255, 255, 255, 0.7);
	}

	.skill-chevron.rotated {
		transform: rotate(180deg);
	}

	.skill-tags-container {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.4s ease-in-out, padding 0.4s ease-in-out;
		padding: 0 0.5rem;
	}

	.skill-tags-container.open {
		max-height: 200px;
		padding: 0.5rem 0.5rem 1rem 0.5rem;
	}

	.contact-education-section {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.education-section h3 {
		color: #ffffff;
		margin: 0 0 1rem 0;
		font-size: 1.2rem;
		font-weight: 600;
		text-align: center;
	}

	.skill-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
	}

	.skill-tag {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		color: #ffffff;
		padding: 0.4rem 1rem;
		border-radius: 20px;
		font-size: 0.85rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		font-weight: 500;
		transition: all 0.3s ease;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 1px 4px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
	}

	.skill-tag::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s;
	}

	.skill-tag:hover {
		transform: scale(1.08) translateY(-2px);
		background: rgba(255, 255, 255, 0.15);
		border-color: rgba(255, 255, 255, 0.25);
		box-shadow:
			0 8px 24px rgba(0, 0, 0, 0.25),
			0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.skill-tag:hover::before {
		left: 100%;
	}

	.education-content {
		display: flex;
		align-items: center;
		gap: 1.2rem;
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(15px);
		padding: 1.5rem;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.12);
		transition: all 0.4s ease;
		box-shadow:
			0 6px 20px rgba(0, 0, 0, 0.2),
			0 2px 8px rgba(0, 0, 0, 0.15);
		position: relative;
		overflow: hidden;
		justify-content: center;
	}

	.education-content::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg,
			rgba(255, 255, 255, 0.06) 0%,
			rgba(255, 255, 255, 0.03) 50%,
			rgba(255, 255, 255, 0.01) 100%);
		border-radius: 20px;
		pointer-events: none;
	}

	.education-content:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.18);
		box-shadow:
			0 12px 32px rgba(0, 0, 0, 0.3),
			0 6px 16px rgba(0, 0, 0, 0.2);
	}

	.education-content i {
		font-size: 1.5rem;
		color: #ffffff;
		min-width: 40px;
		text-align: center;
	}

	.education-text h4 {
		color: #ffffff;
		margin: 0 0 0.3rem 0;
		font-size: 1rem;
		font-weight: 600;
	}

	.education-text p {
		color: rgba(255, 255, 255, 0.7);
		margin: 0 0 0.3rem 0;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.education-text .meta {
		color: rgba(255, 255, 255, 0.6) !important;
		font-size: 0.8rem !important;
		margin: 0 !important;
	}

	@media (max-width: 768px) {
		.content {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-template-areas:
				"about"
				"experience"
				"skills-contact-education";
			padding: 0.5rem;
			gap: 0.8rem;
		}
		.section {
			padding: 1.5rem;
			border-radius: 20px;
		}
		.header {
			padding: 1.5rem 1rem 0.5rem;
		}
		.header h1 {
			font-size: 2rem;
		}
		.header p {
			font-size: 1rem;
		}
		.skill-categories {
			gap: 1.2rem;
		}
		.skill-category-header {
			padding: 0.6rem 0;
		}
		.skill-tags-container.open {
			max-height: 280px;
		}
		.contact-education-section {
			gap: 1.8rem;
		}
		.education-section {
			padding: 1rem;
		}
	}
</style>
