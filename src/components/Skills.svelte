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
				<span class="skill-item">{skill}</span>
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
		transition: all 0.3s;
		font-size: 0.9rem;
		font-weight: 500;
	}

	.tab-btn:hover, .tab-btn.active {
		background: rgba(59, 130, 246, 0.2);
		border-color: #3b82f6;
		color: #60a5fa;
		transform: translateY(-2px);
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
		transition: all 0.3s;
		font-weight: 500;
	}

	.skill-item:hover {
		transform: scale(1.05);
		background: rgba(59, 130, 246, 0.2);
		border-color: #60a5fa;
	}
</style>
