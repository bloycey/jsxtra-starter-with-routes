import Nav from "../components/Nav";

const PageWrapper = ({ children }) => {
	return (
		<>
			<Nav />
			{children}
		</>
	);
};

export default PageWrapper;
