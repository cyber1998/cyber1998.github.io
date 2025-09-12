<div class="skills">
	<h2>Skills</h2>
	<div class="tabs">
		{#each Object.keys(skills) as category}
			<button class="tab-btn" class:active={activeTab === category} on:click={() => activeTab = category}>
				{category}
			</button>
		{/each}
	</div>
	<div class="tab-content">
		<div class="skill-items">
			{#each skills[activeTab] as skill}
				<span class="skill-item" data-skill={skill.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}>{skill}</span>
			{/each}
		</div>
	</div>
</div>

<script>
	let activeTab = 'Languages';

	const skills = {
		'Languages': ['Python', 'TypeScript', 'GraphQL'],
		'Frameworks': ['Django', 'Django REST Framework', 'Flask', 'ReactJS'],
		'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
		'Cloud Tools': ['Docker', 'Kubernetes', 'DigitalOcean', 'AWS', 'ElasticSearch', 'GCP'],
		'Version Control': ['Bitbucket', 'Bitbucket CI/CD', 'GitLab', 'GitHub'],
		'Others': ['Shopify', 'Klaviyo', 'Mailchimp', 'Redis + Celery', 'SQS'],
		'AI Tools': ['GitHub Copilot', 'KorbitAI', 'Cursor']
	};
</script>

<style>
	.skills {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	h2 {
		color: #ffffff;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		text-align: center;
		font-weight: 600;
	}

	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
		justify-content: center;
	}

	.tab-btn {
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: #ffffff;
		padding: 0.5rem 1rem;
		border-radius: 10px;
		cursor: pointer;
		transition: all 0.3s ease;
		font-size: 0.9rem;
		font-weight: 500;
		box-shadow:
			0 4px 12px rgba(0, 0, 0, 0.15),
			0 1px 4px rgba(0, 0, 0, 0.1);
	}

	.tab-btn:hover, .tab-btn.active {
		background: rgba(59, 130, 246, 0.2);
		border-color: #3b82f6;
		color: #60a5fa;
		transform: translateY(-2px);
		box-shadow:
			0 8px 20px rgba(0, 0, 0, 0.2),
			0 4px 8px rgba(0, 0, 0, 0.15);
	}

	.skill-items {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		justify-content: center;
		flex: 1;
		align-content: flex-start;
	}

	.skill-item {
		background: rgba(59, 130, 246, 0.1);
		color: #60a5fa;
		padding: 0.5rem 1rem;
		border-radius: 20px;
		font-size: 0.9rem;
		border: 1px solid rgba(59, 130, 246, 0.3);
		transition: all 0.3s ease;
		font-weight: 500;
		box-shadow:
			0 3px 10px rgba(0, 0, 0, 0.15),
			0 1px 4px rgba(0, 0, 0, 0.1);
	}

	.skill-item:hover {
		transform: scale(1.05);
		background: rgba(59, 130, 246, 0.2);
		border-color: #60a5fa;
		box-shadow:
			0 6px 16px rgba(0, 0, 0, 0.2),
			0 3px 8px rgba(0, 0, 0, 0.15);
	}

	/* Brand-specific colors for technologies */

	/* Languages */
	.skill-item[data-skill="python"] {
		background: linear-gradient(135deg, #3776ab 0%, #ffd43b 100%) !important;
		color: white !important;
		border-color: #3776ab !important;
	}

	.skill-item[data-skill="typescript"] {
		background: linear-gradient(135deg, #3178c6 0%, #ffffff 100%) !important;
		color: white !important;
		border-color: #3178c6 !important;
	}

	.skill-item[data-skill="javascript"] {
		background: linear-gradient(135deg, #f7df1e 0%, #000000 100%) !important;
		color: black !important;
		border-color: #f7df1e !important;
	}

	.skill-item[data-skill="sql"] {
		background: linear-gradient(135deg, #336791 0%, #ffffff 100%) !important;
		color: #336791 !important;
		border-color: #336791 !important;
	}

	.skill-item[data-skill="graphql"] {
		background: linear-gradient(135deg, #e10098 0%, #ffffff 100%) !important;
		color: #e10098 !important;
		border-color: #e10098 !important;
	}

	/* Frameworks */
	.skill-item[data-skill="django"] {
		background: linear-gradient(135deg, #092e20 0%, #44b78b 100%) !important;
		color: white !important;
		border-color: #092e20 !important;
	}

	.skill-item[data-skill="django-rest-framework"] {
		background: linear-gradient(135deg, #a30000 0%, #ff6b6b 100%) !important;
		color: white !important;
		border-color: #a30000 !important;
	}

	.skill-item[data-skill="flask"] {
		background: linear-gradient(135deg, #000000 0%, #ffffff 100%) !important;
		color: black !important;
		border-color: #000000 !important;
	}

	.skill-item[data-skill="reactjs"],
	.skill-item[data-skill="react"] {
		background: linear-gradient(135deg, #61dafb 0%, #21232a 100%) !important;
		color: white !important;
		border-color: #61dafb !important;
	}

	.skill-item[data-skill="nodejs"],
	.skill-item[data-skill="node-js"] {
		background: linear-gradient(135deg, #339933 0%, #68a063 100%) !important;
		color: white !important;
		border-color: #339933 !important;
	}

	.skill-item[data-skill="express"] {
		background: linear-gradient(135deg, #000000 0%, #ffffff 100%) !important;
		color: black !important;
		border-color: #000000 !important;
	}

	/* Databases */
	.skill-item[data-skill="mysql"] {
		background: linear-gradient(135deg, #4479a1 0%, #f29111 100%) !important;
		color: white !important;
		border-color: #4479a1 !important;
	}

	.skill-item[data-skill="postgresql"] {
		background: linear-gradient(135deg, #336791 0%, #ffffff 100%) !important;
		color: #336791 !important;
		border-color: #336791 !important;
	}

	.skill-item[data-skill="mongodb"] {
		background: linear-gradient(135deg, #47a248 0%, #ffffff 100%) !important;
		color: #47a248 !important;
		border-color: #47a248 !important;
	}

	.skill-item[data-skill="redis"] {
		background: linear-gradient(135deg, #dc382d 0%, #ffffff 100%) !important;
		color: #dc382d !important;
		border-color: #dc382d !important;
	}

	.skill-item[data-skill="elasticsearch"] {
		background: linear-gradient(135deg, #005571 0%, #00bfb3 100%) !important;
		color: white !important;
		border-color: #005571 !important;
	}

	/* Cloud Tools */
	.skill-item[data-skill="docker"] {
		background: linear-gradient(135deg, #2496ed 0%, #ffffff 100%) !important;
		color: #2496ed !important;
		border-color: #2496ed !important;
	}

	.skill-item[data-skill="kubernetes"] {
		background: linear-gradient(135deg, #326ce5 0%, #ffffff 100%) !important;
		color: #326ce5 !important;
		border-color: #326ce5 !important;
	}

	.skill-item[data-skill="digitalocean"] {
		background: linear-gradient(135deg, #0080ff 0%, #ffffff 100%) !important;
		color: #0080ff !important;
		border-color: #0080ff !important;
	}

	.skill-item[data-skill="aws"] {
		background: linear-gradient(135deg, #ff9900 0%, #232f3e 100%) !important;
		color: white !important;
		border-color: #ff9900 !important;
	}

	.skill-item[data-skill="gcp"] {
		background: linear-gradient(135deg, #4285f4 0%, #34a853 100%) !important;
		color: white !important;
		border-color: #4285f4 !important;
	}

	/* Version Control */
	.skill-item[data-skill="bitbucket"] {
		background: linear-gradient(135deg, #0052cc 0%, #2684ff 100%) !important;
		color: white !important;
		border-color: #0052cc !important;
	}

	.skill-item[data-skill="bitbucket-ci-cd"] {
		background: linear-gradient(135deg, #0052cc 0%, #2684ff 100%) !important;
		color: white !important;
		border-color: #0052cc !important;
	}

	.skill-item[data-skill="gitlab"] {
		background: linear-gradient(135deg, #fc6d26 0%, #ffffff 100%) !important;
		color: #fc6d26 !important;
		border-color: #fc6d26 !important;
	}

	.skill-item[data-skill="github"] {
		background: linear-gradient(135deg, #181717 0%, #f0f6fc 100%) !important;
		color: white !important;
		border-color: #181717 !important;
	}

	/* Others */
	.skill-item[data-skill="shopify"] {
		background: linear-gradient(135deg, #96bf48 0%, #ffffff 100%) !important;
		color: #96bf48 !important;
		border-color: #96bf48 !important;
	}

	.skill-item[data-skill="klaviyo"] {
		background: linear-gradient(135deg, #00a1e0 0%, #ffffff 100%) !important;
		color: #00a1e0 !important;
		border-color: #00a1e0 !important;
	}

	.skill-item[data-skill="mailchimp"] {
		background: linear-gradient(135deg, #ffe01b 0%, #007c89 100%) !important;
		color: #007c89 !important;
		border-color: #ffe01b !important;
	}

	.skill-item[data-skill="redis-celery"] {
		background: linear-gradient(135deg, #dc382d 0%, #ffffff 100%) !important;
		color: #dc382d !important;
		border-color: #dc382d !important;
	}

	.skill-item[data-skill="sqs"] {
		background: linear-gradient(135deg, #ff9900 0%, #232f3e 100%) !important;
		color: white !important;
		border-color: #ff9900 !important;
	}

	/* AI Tools */
	.skill-item[data-skill="github-copilot"] {
		background: linear-gradient(135deg, #238636 0%, #ffffff 100%) !important;
		color: #238636 !important;
		border-color: #238636 !important;
	}

	.skill-item[data-skill="korbita-i"] {
		background: linear-gradient(135deg, #6366f1 0%, #ffffff 100%) !important;
		color: #6366f1 !important;
		border-color: #6366f1 !important;
	}

	.skill-item[data-skill="cursor"] {
		background: linear-gradient(135deg, #00add8 0%, #ffffff 100%) !important;
		color: #00add8 !important;
		border-color: #00add8 !important;
	}
</style>
