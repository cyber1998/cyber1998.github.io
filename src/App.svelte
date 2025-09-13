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
									<span class="skill-tag" data-skill="python">Python</span>
									<span class="skill-tag" data-skill="typescript">TypeScript</span>
									<span class="skill-tag" data-skill="javascript">JavaScript</span>
									<span class="skill-tag" data-skill="sql">SQL</span>
									<span class="skill-tag" data-skill="graphql">GraphQL</span>
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
									<span class="skill-tag" data-skill="django">Django</span>
									<span class="skill-tag" data-skill="django-rest-framework">Django REST</span>
									<span class="skill-tag" data-skill="flask">Flask</span>
									<span class="skill-tag" data-skill="react">React</span>
									<span class="skill-tag" data-skill="nodejs">Node.js</span>
									<span class="skill-tag" data-skill="express">Express</span>
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
									<span class="skill-tag" data-skill="postgresql">PostgreSQL</span>
									<span class="skill-tag" data-skill="mysql">MySQL</span>
									<span class="skill-tag" data-skill="mongodb">MongoDB</span>
									<span class="skill-tag" data-skill="redis">Redis</span>
									<span class="skill-tag" data-skill="elasticsearch">Elasticsearch</span>
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
									<span class="skill-tag" data-skill="aws">AWS</span>
									<span class="skill-tag" data-skill="docker">Docker</span>
									<span class="skill-tag" data-skill="kubernetes">Kubernetes</span>
									<span class="skill-tag" data-skill="gcp">GCP</span>
									<span class="skill-tag" data-skill="terraform">Terraform</span>
									<span class="skill-tag" data-skill="jenkins">CI/CD</span>
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
									<span class="skill-tag" data-skill="git">Git</span>
									<span class="skill-tag" data-skill="bitbucket">Bitbucket</span>
									<span class="skill-tag" data-skill="github">GitHub</span>
									<span class="skill-tag" data-skill="jira">Jira</span>
									<span class="skill-tag" data-skill="slack">Slack</span>
									<span class="skill-tag" data-skill="postman">Postman</span>
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
	/* Global CSS Reset */
	:global(*), :global(*::before), :global(*::after) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	:global(html), :global(body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow-x: hidden;
	}

	:global(html) {
		font-size: clamp(14px, 1.4vw, 16px);
	}

	:global(body) {
		background: #000000;
		color: #ffffff;
		font-family: 'Inter', sans-serif;
	}

	:global(#app) {
		width: 100%;
		min-height: 100vh;
		margin: 0;
		padding: 0;
	}

	.portfolio {
		min-height: 100vh;
		min-height: 100dvh; /* Dynamic viewport height for mobile */
		width: 100vw;
		width: 100dvw; /* Dynamic viewport width for mobile */
		max-width: 100vw;
		display: flex;
		flex-direction: column;
		font-family: 'Inter', sans-serif;
		background: #000000;
		color: #ffffff;
		position: relative;
		margin: 0;
		padding: 0;
		overflow-x: hidden;
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
		padding: clamp(1rem, 2.1vw, 1.05rem) clamp(0.5rem, 1.05vw, 0.7rem) clamp(0.5rem, 1.05vw, 0.7rem);
		background: rgba(255, 255, 255, 0.02);
		backdrop-filter: blur(10px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);
	}

	.header h1 {
		margin: 0;
		font-size: clamp(1.8rem, 2.8vw, 1.54rem);
		font-weight: 600;
		background: linear-gradient(135deg, #ffffff, #cccccc);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.header p {
		margin: 0.5rem 0 0;
		font-size: clamp(0.9rem, 1.4vw, 0.77rem);
		color: rgba(255, 255, 255, 0.6);
		font-weight: 300;
	}

	.content {
		flex: 1;
		display: grid;
		grid-template-columns: minmax(250px, 1fr) minmax(400px, 2fr) minmax(250px, 1fr);
		grid-template-rows: auto;
		grid-template-areas: "about experience skills-contact-education";
		gap: clamp(0.5rem, 1.05vw, 0.56rem);
		padding: clamp(0.5rem, 1.05vw, 0.56rem);
		min-height: 0;
		align-items: start;
		overflow-x: hidden;
	}

	.section {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(25px);
		border: 1px solid rgba(255, 255, 255, 0.12);
		border-radius: clamp(12px, 1.75vw, 14px);
		padding: clamp(1rem, 1.75vw, 1.26rem);
		box-shadow:
			0 8px 32px rgba(0, 0, 0, 0.3),
			0 2px 16px rgba(0, 0, 0, 0.2),
			inset 0 1px 0 rgba(255, 255, 255, 0.1);
		transition: all 0.4s ease;
		position: relative;
		overflow: visible;
		min-height: 200px;
		display: flex;
		flex-direction: column;
		flex: 1;
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
		overflow-x: hidden;
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
		gap: clamp(0.3rem, 0.7vw, 0.28rem);
		justify-content: center;
	}

	.skill-tag {
		background: rgba(255, 255, 255, 0.08);
		backdrop-filter: blur(8px);
		color: #ffffff;
		padding: clamp(0.3rem, 0.7vw, 0.245rem) clamp(0.6rem, 1.4vw, 0.56rem);
		border-radius: clamp(15px, 2.1vw, 12.6px);
		font-size: clamp(0.75rem, 1.05vw, 0.56rem);
		border: 1px solid rgba(255, 255, 255, 0.15);
		font-weight: 500;
		transition: all 0.3s ease;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 1px 4px rgba(0, 0, 0, 0.1);
		position: relative;
		overflow: hidden;
		word-wrap: break-word;
		hyphens: auto;
		text-align: center;
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

	/* Brand-specific colors for skill tags */

	/* Languages */
	.skill-tag[data-skill="python"] {
		background: linear-gradient(135deg, #3776ab 0%, #4a90e2 30%, #ffd43b 70%, #ffed4e 100%) !important;
		color: #1a1a1a !important;
		border-color: #3776ab !important;
	}

	.skill-tag[data-skill="typescript"] {
		background: linear-gradient(135deg, #3178c6 0%, #4c9cf8 50%, #6bb6ff 100%) !important;
		color: white !important;
		border-color: #3178c6 !important;
	}

	.skill-tag[data-skill="javascript"] {
		background: linear-gradient(135deg, #f7df1e 0%, #f4c430 50%, #f39c12 100%) !important;
		color: black !important;
		border-color: #f7df1e !important;
	}

	.skill-tag[data-skill="sql"] {
		background: linear-gradient(135deg, #336791 0%, #4a90e2 50%, #5ba0f2 100%) !important;
		color: white !important;
		border-color: #336791 !important;
	}

	.skill-tag[data-skill="graphql"] {
		background: linear-gradient(135deg, #e10098 0%, #ff4081 50%, #ff6b9d 100%) !important;
		color: white !important;
		border-color: #e10098 !important;
	}

	/* Frameworks */
	.skill-tag[data-skill="django"] {
		background: linear-gradient(135deg, #092e20 0%, #44b78b 50%, #6cc04a 100%) !important;
		color: white !important;
		border-color: #092e20 !important;
	}

	.skill-tag[data-skill="django-rest-framework"] {
		background: linear-gradient(135deg, #a30000 0%, #ff6b6b 50%, #ff9999 100%) !important;
		color: white !important;
		border-color: #a30000 !important;
	}

	.skill-tag[data-skill="flask"] {
		background: linear-gradient(135deg, #000000 0%, #2c2c2c 50%, #404040 100%) !important;
		color: white !important;
		border-color: #000000 !important;
	}

	.skill-tag[data-skill="react"] {
		background: linear-gradient(135deg, #61dafb 0%, #21a3c4 50%, #005f73 100%) !important;
		color: white !important;
		border-color: #61dafb !important;
	}

	.skill-tag[data-skill="nodejs"] {
		background: linear-gradient(135deg, #339933 0%, #68a063 50%, #7cb518 100%) !important;
		color: white !important;
		border-color: #339933 !important;
	}

	.skill-tag[data-skill="express"] {
		background: linear-gradient(135deg, #000000 0%, #2c2c2c 50%, #404040 100%) !important;
		color: white !important;
		border-color: #000000 !important;
	}

	/* Databases */
	.skill-tag[data-skill="postgresql"] {
		background: linear-gradient(135deg, #336791 0%, #4a90e2 50%, #5ba0f2 100%) !important;
		color: white !important;
		border-color: #336791 !important;
	}

	.skill-tag[data-skill="mysql"] {
		background: linear-gradient(135deg, #4479a1 0%, #5a8fb8 30%, #f29111 70%, #ff8c00 100%) !important;
		color: #1a1a1a !important;
		border-color: #4479a1 !important;
	}

	.skill-tag[data-skill="mongodb"] {
		background: linear-gradient(135deg, #47a248 0%, #6cc04a 50%, #7cb518 100%) !important;
		color: white !important;
		border-color: #47a248 !important;
	}

	.skill-tag[data-skill="redis"] {
		background: linear-gradient(135deg, #dc382d 0%, #e74c3c 30%, #ff6b6b 70%, #ff9999 100%) !important;
		color: white !important;
		border-color: #dc382d !important;
	}

	.skill-tag[data-skill="elasticsearch"] {
		background: linear-gradient(135deg, #005571 0%, #00bfb3 50%, #00d4c0 100%) !important;
		color: white !important;
		border-color: #005571 !important;
	}

	/* Cloud & DevOps */
	.skill-tag[data-skill="aws"] {
		background: linear-gradient(135deg, #ff9900 0%, #ff8c00 50%, #e67e00 100%) !important;
		color: #1a1a1a !important;
		border-color: #ff9900 !important;
	}

	.skill-tag[data-skill="docker"] {
		background: linear-gradient(135deg, #2496ed 0%, #1e88e5 50%, #1565c0 100%) !important;
		color: white !important;
		border-color: #2496ed !important;
	}

	.skill-tag[data-skill="kubernetes"] {
		background: linear-gradient(135deg, #326ce5 0%, #1976d2 50%, #0d47a1 100%) !important;
		color: white !important;
		border-color: #326ce5 !important;
	}

	.skill-tag[data-skill="gcp"] {
		background: linear-gradient(135deg, #4285f4 0%, #1976d2 50%, #0d47a1 100%) !important;
		color: white !important;
		border-color: #4285f4 !important;
	}

	.skill-tag[data-skill="terraform"] {
		background: linear-gradient(135deg, #623ce4 0%, #5e35b1 50%, #4527a0 100%) !important;
		color: white !important;
		border-color: #623ce4 !important;
	}

	.skill-tag[data-skill="jenkins"] {
		background: linear-gradient(135deg, #d24939 0%, #e53935 50%, #c62828 100%) !important;
		color: white !important;
		border-color: #d24939 !important;
	}

	/* Tools & Technologies */
	.skill-tag[data-skill="git"] {
		background: linear-gradient(135deg, #f05032 0%, #e53935 50%, #c62828 100%) !important;
		color: white !important;
		border-color: #f05032 !important;
	}

	.skill-tag[data-skill="bitbucket"] {
		background: linear-gradient(135deg, #0052cc 0%, #1976d2 50%, #0d47a1 100%) !important;
		color: white !important;
		border-color: #0052cc !important;
	}

	.skill-tag[data-skill="github"] {
		background: linear-gradient(135deg, #181717 0%, #2d3748 50%, #4a5568 100%) !important;
		color: white !important;
		border-color: #181717 !important;
	}

	.skill-tag[data-skill="jira"] {
		background: linear-gradient(135deg, #0052cc 0%, #1976d2 50%, #0d47a1 100%) !important;
		color: white !important;
		border-color: #0052cc !important;
	}

	.skill-tag[data-skill="slack"] {
		background: linear-gradient(135deg, #4a154b 0%, #7b1fa2 50%, #6a1b9a 100%) !important;
		color: white !important;
		border-color: #4a154b !important;
	}

	.skill-tag[data-skill="postman"] {
		background: linear-gradient(135deg, #ff6c37 0%, #ff5722 50%, #d84315 100%) !important;
		color: white !important;
		border-color: #ff6c37 !important;
	}

	/* Hover states for brand colors */
	.skill-tag[data-skill="python"]:hover {
		background: linear-gradient(135deg, #2e5f8f 0%, #3d7dd4 30%, #d4af37 70%, #e6b800 100%) !important;
		border-color: #2e5f8f !important;
	}

	.skill-tag[data-skill="typescript"]:hover {
		background: linear-gradient(135deg, #265a9f 0%, #e6e6e6 100%) !important;
		border-color: #265a9f !important;
	}

	.skill-tag[data-skill="javascript"]:hover {
		background: linear-gradient(135deg, #e6c914 0%, #d4a52a 50%, #b8860b 100%) !important;
		border-color: #e6c914 !important;
	}

	.skill-tag[data-skill="sql"]:hover {
		background: linear-gradient(135deg, #2a567a 0%, #3d7dd4 50%, #4a90e2 100%) !important;
		border-color: #2a567a !important;
	}

	.skill-tag[data-skill="graphql"]:hover {
		background: linear-gradient(135deg, #b3007a 0%, #e91e63 50%, #d81b60 100%) !important;
		border-color: #b3007a !important;
	}

	.skill-tag[data-skill="django"]:hover {
		background: linear-gradient(135deg, #0a3a2a 0%, #3a8f5c 50%, #4caf50 100%) !important;
		border-color: #0a3a2a !important;
	}

	.skill-tag[data-skill="django-rest-framework"]:hover {
		background: linear-gradient(135deg, #8a0000 0%, #e53935 50%, #c62828 100%) !important;
		border-color: #8a0000 !important;
	}

	.skill-tag[data-skill="flask"]:hover {
		background: linear-gradient(135deg, #1a1a1a 0%, #404040 50%, #616161 100%) !important;
		border-color: #1a1a1a !important;
	}

	.skill-tag[data-skill="react"]:hover {
		background: linear-gradient(135deg, #4fc3e7 0%, #1a8bb4 50%, #00695c 100%) !important;
		border-color: #4fc3e7 !important;
	}

	.skill-tag[data-skill="nodejs"]:hover {
		background: linear-gradient(135deg, #2d7a2d 0%, #4caf50 50%, #388e3c 100%) !important;
		border-color: #2d7a2d !important;
	}

	.skill-tag[data-skill="express"]:hover {
		background: linear-gradient(135deg, #1a1a1a 0%, #404040 50%, #616161 100%) !important;
		border-color: #1a1a1a !important;
	}

	.skill-tag[data-skill="postgresql"]:hover {
		background: linear-gradient(135deg, #2a567a 0%, #3d7dd4 50%, #4a90e2 100%) !important;
		border-color: #2a567a !important;
	}

	.skill-tag[data-skill="mysql"]:hover {
		background: linear-gradient(135deg, #3a6589 0%, #4a7a9f 30%, #d9820e 70%, #bf360c 100%) !important;
		border-color: #3a6589 !important;
	}

	.skill-tag[data-skill="mongodb"]:hover {
		background: linear-gradient(135deg, #3d8a3d 0%, #4caf50 50%, #388e3c 100%) !important;
		border-color: #3d8a3d !important;
	}

	.skill-tag[data-skill="redis"]:hover {
		background: linear-gradient(135deg, #b32d24 0%, #c0392b 30%, #e53935 70%, #c62828 100%) !important;
		border-color: #b32d24 !important;
	}

	.skill-tag[data-skill="elasticsearch"]:hover {
		background: linear-gradient(135deg, #004a5c 0%, #00d4c0 100%) !important;
		border-color: #004a5c !important;
	}

	.skill-tag[data-skill="aws"]:hover {
		background: linear-gradient(135deg, #e68a00 0%, #3d4955 100%) !important;
		border-color: #e68a00 !important;
	}

	.skill-tag[data-skill="docker"]:hover {
		background: linear-gradient(135deg, #1d7ed6 0%, #1565c0 50%, #0d47a1 100%) !important;
		border-color: #1d7ed6 !important;
	}

	.skill-tag[data-skill="kubernetes"]:hover {
		background: linear-gradient(135deg, #2952ce 0%, #1565c0 50%, #0d47a1 100%) !important;
		border-color: #2952ce !important;
	}

	.skill-tag[data-skill="gcp"]:hover {
		background: linear-gradient(135deg, #357ae8 0%, #1565c0 50%, #0d47a1 100%) !important;
		border-color: #357ae8 !important;
	}

	.skill-tag[data-skill="terraform"]:hover {
		background: linear-gradient(135deg, #522fce 0%, #4527a0 50%, #311b92 100%) !important;
		border-color: #522fce !important;
	}

	.skill-tag[data-skill="jenkins"]:hover {
		background: linear-gradient(135deg, #b33d31 0%, #d32f2f 50%, #b71c1c 100%) !important;
		border-color: #b33d31 !important;
	}

	.skill-tag[data-skill="git"]:hover {
		background: linear-gradient(135deg, #d84328 0%, #d32f2f 50%, #b71c1c 100%) !important;
		border-color: #d84328 !important;
	}

	.skill-tag[data-skill="bitbucket"]:hover {
		background: linear-gradient(135deg, #00449f 0%, #1565c0 50%, #0d47a1 100%) !important;
		border-color: #00449f !important;
	}

	.skill-tag[data-skill="github"]:hover {
		background: linear-gradient(135deg, #2d3748 0%, #4a5568 50%, #718096 100%) !important;
		border-color: #2d3748 !important;
	}

	.skill-tag[data-skill="jira"]:hover {
		background: linear-gradient(135deg, #00449f 0%, #1565c0 50%, #0d47a1 100%) !important;
		border-color: #00449f !important;
	}

	.skill-tag[data-skill="slack"]:hover {
		background: linear-gradient(135deg, #6b2d6b 0%, #8e24aa 50%, #7b1fa2 100%) !important;
		border-color: #6b2d6b !important;
	}

	.skill-tag[data-skill="postman"]:hover {
		background: linear-gradient(135deg, #e65c2f 0%, #f4511e 50%, #d84315 100%) !important;
		border-color: #e65c2f !important;
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
			grid-template-rows: auto auto auto;
			grid-template-areas:
				"about"
				"experience"
				"skills-contact-education";
			padding: 0.5rem;
			gap: 0.8rem;
			min-height: auto;
		}

		.section {
			padding: 1.5rem;
			border-radius: 20px;
			min-height: auto;
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

		.skill-tags {
			justify-content: flex-start;
			gap: 0.4rem;
		}

		.skill-tag {
			font-size: 0.8rem;
			padding: 0.35rem 0.8rem;
		}

		/* Additional mobile optimizations */
		.skill-category h4 {
			font-size: 0.9rem;
		}

		.education-content {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
			padding: 1rem;
		}

		.education-text h4 {
			font-size: 0.9rem;
		}

		.education-text p {
			font-size: 0.8rem;
		}
	}

	/* Medium screens */
	@media (max-width: 1200px) {
		.content {
			grid-template-columns: minmax(220px, 1fr) minmax(350px, 2fr) minmax(220px, 1fr);
			padding: clamp(0.5rem, 0.7vw, 0.49rem);
			gap: clamp(0.5rem, 0.7vw, 0.49rem);
		}

		.section {
			padding: clamp(1rem, 1.4vw, 1.12rem);
		}

		.skill-tags {
			gap: clamp(0.3rem, 0.56vw, 0.28rem);
		}

		.skill-tag {
			font-size: clamp(0.75rem, 0.91vw, 0.56rem);
			padding: clamp(0.3rem, 0.56vw, 0.245rem) clamp(0.7rem, 0.98vw, 0.49rem);
		}
	}

	/* Large tablets and small laptops */
	@media (max-width: 1024px) {
		.content {
			grid-template-columns: minmax(200px, 1fr) minmax(300px, 2fr) minmax(200px, 1fr);
			padding: clamp(0.4rem, 0.7vw, 0.42rem);
			gap: clamp(0.4rem, 0.7vw, 0.42rem);
		}

		.section {
			padding: clamp(0.9rem, 1.225vw, 0.98rem);
		}

		.skill-tags {
			gap: clamp(0.25rem, 0.42vw, 0.21rem);
		}

		.skill-tag {
			font-size: clamp(0.7rem, 0.735vw, 0.49rem);
			padding: clamp(0.25rem, 0.42vw, 0.224rem) clamp(0.6rem, 0.84vw, 0.42rem);
		}
	}

	/* Small tablets */
	@media (max-width: 900px) {
		.content {
			grid-template-columns: minmax(180px, 1fr) minmax(280px, 2fr) minmax(180px, 1fr);
			padding: clamp(0.3rem, 0.56vw, 0.35rem);
			gap: clamp(0.3rem, 0.56vw, 0.35rem);
		}

		.section {
			padding: clamp(0.8rem, 1.05vw, 0.84rem);
		}

		.skill-tags {
			gap: clamp(0.2rem, 0.35vw, 0.14rem);
		}

		.skill-tag {
			font-size: clamp(0.65rem, 0.455vw, 0.35rem);
			padding: clamp(0.2rem, 0.35vw, 0.14rem) clamp(0.5rem, 0.7vw, 0.35rem);
		}
	}

	/* Mobile phones - iPhone 12 and newer Android devices */
	@media (max-width: 768px) {
		.portfolio {
			min-height: 100vh;
			min-height: 100dvh;
		}

		.content {
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
			grid-template-areas:
				"about"
				"experience"
				"skills-contact-education";
			padding: 1rem;
			gap: 1rem;
			min-height: auto;
			width: 100%;
			max-width: 100%;
		}

		.section {
			padding: 1.5rem;
			border-radius: 16px;
			min-height: auto;
			width: 100%;
			max-width: 100%;
			box-sizing: border-box;
			overflow-x: hidden;
		}

		.header {
			padding: 2rem 1rem 1rem;
			width: 100%;
			max-width: 100%;
		}

		.header h1 {
			font-size: 2.5rem;
			line-height: 1.2;
		}

		.header p {
			font-size: 1.2rem;
			margin-top: 0.5rem;
		}

		.skills-section h3 {
			font-size: 1.4rem;
			margin-bottom: 1.5rem;
		}

		.skill-categories {
			gap: 1.2rem;
		}

		.skill-category-header {
			padding: 0.8rem 0;
			min-height: 48px; /* Better touch target */
		}

		.skill-category-header h4 {
			font-size: 1rem;
		}

		.skill-tags-container.open {
			max-height: 300px;
			padding: 1rem 0.5rem;
		}

		.contact-education-section {
			gap: 1.5rem;
		}

		.education-section {
			padding: 1rem;
		}

		.education-section h3 {
			font-size: 1.3rem;
			margin-bottom: 1rem;
		}

		.skill-tags {
			justify-content: center;
			gap: 0.5rem;
			flex-wrap: wrap;
		}

		.skill-tag {
			font-size: 0.9rem;
			padding: 0.6rem 1rem;
			border-radius: 16px;
			min-height: 40px; /* Better touch target */
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
		}

		.education-content {
			flex-direction: column;
			text-align: center;
			gap: 1rem;
			padding: 1.5rem;
		}

		.education-content i {
			font-size: 2rem;
		}

		.education-text h4 {
			font-size: 1.1rem;
			margin-bottom: 0.5rem;
		}

		.education-text p {
			font-size: 1rem;
			margin-bottom: 0.3rem;
		}

		.education-text .meta {
			font-size: 0.9rem;
		}

		/* Ensure no horizontal scroll */
		.unified-content {
			width: 100%;
			max-width: 100%;
			overflow-x: hidden;
		}
	}

	/* iPhone 12 Pro Max and larger Android phones */
	@media (max-width: 428px) and (min-width: 391px) {
		.header h1 {
			font-size: 2.8rem;
		}

		.header p {
			font-size: 1.3rem;
		}

		.content {
			padding: 1.2rem;
			gap: 1.2rem;
		}

		.section {
			padding: 1.8rem;
		}

		.skill-tag {
			font-size: 1rem;
			padding: 0.7rem 1.2rem;
		}
	}

	/* iPhone 12 Pro and similar sized devices */
	@media (max-width: 390px) and (min-width: 361px) {
		.header h1 {
			font-size: 2.4rem;
		}

		.header p {
			font-size: 1.1rem;
		}

		.content {
			padding: 1rem;
			gap: 1rem;
		}

		.section {
			padding: 1.5rem;
		}

		.skill-tag {
			font-size: 0.9rem;
			padding: 0.6rem 1rem;
		}
	}

	/* Very small screens */
	@media (max-width: 360px) {
		.header h1 {
			font-size: 2rem;
		}

		.header p {
			font-size: 1rem;
		}

		.content {
			padding: 0.8rem;
			gap: 0.8rem;
		}

		.section {
			padding: 1.2rem;
			border-radius: 12px;
		}

		.skill-tag {
			font-size: 0.8rem;
			padding: 0.5rem 0.8rem;
			min-height: 36px;
		}

		.skill-category h4 {
			font-size: 0.9rem;
		}

		.education-text h4 {
			font-size: 1rem;
		}

		.education-text p {
			font-size: 0.9rem;
		}

		.skill-tags-container.open {
			max-height: 250px;
		}
	}

	/* Landscape orientation for mobile devices */
	@media (max-height: 500px) and (orientation: landscape) and (max-width: 768px) {
		.portfolio {
			min-height: 100vh;
			min-height: 100dvh;
		}

		.header {
			padding: 1rem 1rem 0.5rem;
		}

		.header h1 {
			font-size: 2rem;
		}

		.header p {
			font-size: 1rem;
		}

		.content {
			padding: 0.5rem;
			gap: 0.5rem;
			min-height: auto;
		}

		.section {
			padding: 1rem;
		}

		.skill-tags {
			justify-content: center;
			gap: 0.3rem;
		}

		.skill-tag {
			font-size: 0.8rem;
			padding: 0.4rem 0.8rem;
			min-height: 32px;
		}

		.skill-categories {
			gap: 0.8rem;
		}

		.skill-tags-container.open {
			max-height: 200px;
		}

		.education-content {
			flex-direction: row;
			text-align: left;
			gap: 1rem;
			padding: 1rem;
		}

		.education-content i {
			font-size: 1.5rem;
		}
	}

	/* Improve mobile touch targets and ensure no overlap */
	@media (max-width: 768px) {
		.skill-category-header {
			min-height: 48px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0.8rem 0.5rem;
			border-radius: 8px;
			transition: background-color 0.2s ease;
		}

		.skill-category-header:hover,
		.skill-category-header:focus {
			background-color: rgba(255, 255, 255, 0.05);
		}

		.skill-tag {
			min-height: 40px;
			display: flex;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			user-select: none;
			-webkit-tap-highlight-color: transparent;
		}

		/* Prevent zooming on double tap for iOS */
		.skill-category-header,
		.skill-tag {
			touch-action: manipulation;
		}

		/* Ensure sections don't overlap */
		.section {
			margin-bottom: 0.5rem;
		}

		.section:last-child {
			margin-bottom: 2rem;
		}
	}
</style>
