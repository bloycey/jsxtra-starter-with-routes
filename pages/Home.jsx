import About from "../components/About";
import Counter from "../components/Counter";
import PageWrapper from "../layouts/PageWrapper";

const Home = () => {
	return (
		<PageWrapper>
			<About />
			<Counter />
		</PageWrapper>
	);
};

export default Home;
