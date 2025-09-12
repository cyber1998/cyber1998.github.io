<div class="contact">
	<h2>Contact Me</h2>
	<div class="grid">
		<a href="mailto:cybr1998@gmail.com" class="card">
			<div class="icon">
				<i class="fas fa-envelope"></i>
			</div>
			<div class="detail">
				<h3>Email</h3>
				<p>cybr1998@gmail.com</p>
			</div>
		</a>
		
		<a href="tel:+917278367360" class="card">
			<div class="icon">
				<i class="fas fa-phone"></i>
			</div>
			<div class="detail">
				<h3>Phone</h3>
				<p>+91-7278367360</p>
			</div>
		</a>
		
		<div class="card">
			<div class="icon">
				<i class="fas fa-map-marker-alt"></i>
			</div>
			<div class="detail">
				<h3>Location</h3>
				<p>Pune, Maharashtra, India</p>
			</div>
		</div>
		
		<a href="https://linkedin.com/in/cyber-naskar" target="_blank" rel="noopener noreferrer" class="card" aria-label="LinkedIn">
			<div class="icon">
				<i class="fab fa-linkedin"></i>
			</div>
			<div class="detail">
				<h3>LinkedIn</h3>
				<p>linkedin.com/in/cyber-naskar</p>
			</div>
		</a>
		
		<a href="https://github.com/cyber1998" target="_blank" rel="noopener noreferrer" class="card" aria-label="GitHub">
			<div class="icon">
				<i class="fab fa-github"></i>
			</div>
			<div class="detail">
				<h3>GitHub</h3>
				<p>github.com/cyber1998</p>
			</div>
		</a>
	</div>
</div>

<style>
	.contact {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	h2 {
		color: #ffffff;
		margin-bottom: 2rem;
		font-size: 1.5rem;
		text-align: center;
		font-weight: 600;
	}

	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		flex: 1;
	}

	.card {
		display: flex;
		align-items: center;
		gap: 1rem;
		background: rgba(255, 255, 255, 0.08);
		padding: 1rem;
		border-radius: 15px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s;
		text-decoration: none;
		color: inherit;
	}

	.card:hover {
		transform: translateY(-5px);
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(59, 130, 246, 0.3);
	}

	.icon {
		font-size: 1.5rem;
		color: #60a5fa;
		min-width: 40px;
		text-align: center;
	}

	.detail h3 {
		color: #ffffff;
		margin: 0 0 0.5rem 0;
		font-size: 1rem;
		font-weight: 600;
	}

	.detail p {
		color: rgba(255, 255, 255, 0.8);
		margin: 0;
		font-size: 0.9rem;
	}
</style>
