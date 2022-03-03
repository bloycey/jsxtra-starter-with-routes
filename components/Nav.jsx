import { store, wrapper } from "jsxtra";

const Nav = () => {
	const route = store.routerInfo.currentPath || "/";
	const isActive = linkPath => (route === linkPath ? "active" : "");
	return (
		<header>
			<nav>
				<li>
					<a href="/" class={isActive("/")}>
						Home
					</a>
				</li>
				<li>
					<a href="/router" class={isActive("/router")}>
						Router Info
					</a>
				</li>
				<li>
					<a
						href="/not-a-real-route"
						class={isActive("/not-a-real-route")}
					>
						404 page
					</a>
				</li>
			</nav>
			<style>{`
				nav {
					display: flex;
					gap: 16px;
					padding: 8px;
					font-size: 18px;
				}
				li {
					list-style: none;
				}
				li a {
					text-decoration: none;
				}
				.active {
					text-decoration: underline;
					font-weight: bold;
				}	
			`}</style>
		</header>
	);
};

export default Nav;
