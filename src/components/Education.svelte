<div class="education">
	<h2>Education</h2>
	<div class="education-content">
		<i class="fas fa-graduation-cap"></i>
		<div class="education-text">
			<h3>Birla Institute of Technology, Mesra</h3>
			<p>Bachelor of Computer Applications</p>
			<p class="meta">Graduated June 2018</p>
		</div>
	</div>
</div>

<style>
	.education {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	h2 {
		color: #ffffff;
		margin-bottom: 1rem;
		font-size: 1.2rem;
		text-align: center;
		font-weight: 600;
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
		flex: 1;
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

	.education-text h3 {
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

	.meta {
		color: rgba(255, 255, 255, 0.6) !important;
		font-size: 0.8rem !important;
		margin: 0 !important;
	}
</style>
