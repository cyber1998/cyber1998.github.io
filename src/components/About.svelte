<div class="about">
	<div class="description">
		I'm a software consultant specializing in Python, TypeScript, and GraphQL. I focus on building scalable microservices, optimizing database performance, and implementing AI-driven solutions. With expertise across multiple industries including AgriTech and E-commerce, I bring a wealth of experience in architecting robust backend systems.
	</div>
	<div class="contact-brief">
		<div class="item">
			<i class="fas fa-map-marker-alt"></i>
			<span>Pune, MH</span>
		</div>
		<div class="item">
			<i class="fas fa-envelope"></i>
			<span>cybr1998@gmail.com</span>
		</div>
		<div class="item">
			<i class="fas fa-phone"></i>
			<span>+91-7278367360</span>
		</div>
	</div>
	<div class="social">
		<a href="https://linkedin.com/in/cyber-naskar" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
			<i class="fab fa-linkedin"></i>
		</a>
		<a href="https://github.com/cyber1998" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
			<i class="fab fa-github"></i>
		</a>
	</div>
</div>

<style lang="css">
	.about {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: center;
		text-align: left;
		min-height: 100%;
	}


	.description {
		margin: 1rem 0;
		color: rgba(255, 255, 255, 0.6);
		line-height: 1.6;
		font-size: 1rem;
	}

	.contact-brief {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		margin: 1rem 0;
	}

	.item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: rgba(255, 255, 255, 0.8);
		font-size: 0.9rem;
	}

	.social {
		display: flex;
		gap: 1rem;
		margin-top: 1rem;
	}

	.social a {
		color: #ffffff;
		font-size: 1.5rem;
		transition: transform 0.3s, color 0.3s;
	}

	.social a:hover {
		transform: scale(1.2);
		color: #cccccc;
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.about {
			padding: 0 1rem;
		}

		.description {
			font-size: 0.95rem;
			line-height: 1.5;
			margin: 0.8rem 0;
		}

		.contact-brief {
			gap: 0.4rem;
			margin: 0.8rem 0;
		}

		.item {
			font-size: 0.85rem;
		}

		.social {
			gap: 0.8rem;
			margin-top: 0.8rem;
		}

		.social a {
			font-size: 1.3rem;
		}
	}

	@media (max-width: 480px) {
		.about {
			padding: 0 0.5rem;
		}


		.description {
			font-size: 0.9rem;
			line-height: 1.5;
			margin: 0.6rem 0;
		}

		.contact-brief {
			gap: 0.3rem;
			margin: 0.6rem 0;
		}

		.item {
			font-size: 0.8rem;
			flex-direction: column;
			align-items: flex-start;
			gap: 0.2rem;
		}

		.social {
			gap: 0.6rem;
			margin-top: 0.6rem;
		}

		.social a {
			font-size: 1.1rem;
		}
	}

	@media (max-width: 360px) {
		.about {
			padding: 0 0.25rem;
		}


		.description {
			font-size: 0.85rem;
			line-height: 1.4;
			margin: 0.5rem 0;
		}

		.contact-brief {
			gap: 0.25rem;
			margin: 0.5rem 0;
		}

		.item {
			font-size: 0.75rem;
		}

		.social {
			gap: 0.5rem;
			margin-top: 0.5rem;
		}

		.social a {
			font-size: 1rem;
		}
	}

	/* Landscape orientation for small screens */
	@media (max-height: 500px) and (orientation: landscape) {
		.about {
			padding: 0 0.5rem;
		}


		.description {
			font-size: 0.9rem;
			margin: 0.5rem 0;
		}

		.contact-brief {
			flex-direction: row;
			justify-content: flex-start;
			gap: 1rem;
			margin: 0.5rem 0;
		}

		.item {
			flex-direction: column;
			align-items: flex-start;
			font-size: 0.8rem;
		}

		.social {
			gap: 0.8rem;
			margin-top: 0.5rem;
		}
	}

	/* Large tablets */
	@media (max-width: 1024px) and (min-width: 769px) {
		.about {
			padding: 0 1.5rem;
		}


		.description {
			font-size: 1.1rem;
		}

		.contact-brief {
			gap: 0.6rem;
		}

		.item {
			font-size: 0.95rem;
		}

		.social a {
			font-size: 1.6rem;
		}
	}
</style>
