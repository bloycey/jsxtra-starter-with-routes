const About = ({ HELPERS }) => {
	const { store } = HELPERS;
	return (
		<div class="about-wrapper">
			<h1>JSXtra Starter</h1>
			{/* This text comes from the store. You can update the store directly
			by assigning a value directly to the store item. See docs: [docs link] 
			E.g. store.global.description = "new description" */}
			<p>{store.global.description}</p>
			{/* These styles are scoped to the component using the Shadow DOM
			CSS custom properties penetrate through */}
			<style>{`
			.about-wrapper {
				text-align: center;
				margin-top: 40px;
			}

			h1 {
				font-size: 64px;
				color: var(--dark-grey);
				margin: 0;
			}

			p {
				color: var(--light-grey);
				font-style: italic;
				margin-bottom: 64px;
			}

			img {
				max-width: 100%;
			}
		`}</style>
		</div>
	);
};

export default About;
