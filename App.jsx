import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => {
	return (
		<>
			<Nav WATCH={["routerInfo.currentPath"]} />
			<div id="main-content">
				<Home />
			</div>
		</>
	);
};

export default App;
