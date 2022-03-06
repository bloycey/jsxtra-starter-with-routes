import "./style.css";
import { jsxtraInit } from "jsxtra";
import App from "./App";
import Home from "./pages/Home"
import Router from "./pages/Router"
import globalStore from "./stores/globalStore";
import FourOhFour from "./pages/404";

jsxtraInit({
	appContainer: document.querySelector('#app'),
	baseComponent: App,
	stores: [globalStore],
	router: {
		routes: [
			{ path: '', action: Home },
			{ path: '/router', action: Router },
			{ path: '(.*)', action: FourOhFour }
		],
		persistState: false // default is false
	}
})
