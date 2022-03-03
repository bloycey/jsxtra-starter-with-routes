import "./style.css";
import { jsxtraInit } from "jsxtra";
import App from "./App";
import Home from "./pages/Home"
import Router from "./pages/Router"
import globalStore from "./stores/globalStore";

jsxtraInit({
	appContainer: document.querySelector('#app'),
	baseComponent: App,
	stores: [globalStore],
	router: {
		routerContainer: () => document.querySelector("#main-content"),
		routes: [
			{ path: '', action: Home },
			{ path: '/router', action: Router },
			{ path: '(.*)', action: () => '<h1>404 page</h1><p>Will display for any undefined routes</p>' }
		],
		persistState: false // default is false
	}
})
