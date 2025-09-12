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

<style>
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
		background: rgba(255, 255, 255, 0.03);
		backdrop-filter: blur(15px);
		border: 1px solid rgba(255, 255, 255, 0.05);
		border-radius: 16px;
		padding: 1.5rem;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
	}

	.section:hover {
		transform: translateY(-5px);
		box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
		border-color: rgba(255, 255, 255, 0.1);
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
		background: rgba(255, 255, 255, 0.05);
		color: #ffffff;
		padding: 0.3rem 0.8rem;
		border-radius: 15px;
		font-size: 0.8rem;
		border: 1px solid rgba(255, 255, 255, 0.1);
		font-weight: 500;
		transition: all 0.3s;
	}

	.skill-tag:hover {
		transform: scale(1.05);
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.education-content {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.03);
		padding: 1rem;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.05);
		transition: transform 0.3s;
	}

	.education-content:hover {
		transform: translateY(-3px);
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
			padding: 1rem;
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
			gap: 1rem;
		}
		.skill-category-header {
			padding: 0.4rem 0;
		}
		.skill-tags-container.open {
			max-height: 250px;
		}
		.contact-education-section {
			gap: 1.5rem;
		}
		.education-section {
			padding: 0.8rem;
		}
	}
</style>
