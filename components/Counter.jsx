const Counter = ({ HELPERS }) => {
	const { getState, store } = HELPERS;
	const state = getState({ count: 0 });

	return (
		<div class="counter-wrapper">
			<button
				class="decrement"
				onClick={() => {
					state.count = state.count - 1;
				}}
			>
				-
			</button>
			<span>{state.count || "0"}</span>
			<button
				class="increment"
				onClick={() => {
					state.count = state.count + 1;
				}}
			>
				+
			</button>
			<style>{`
				.counter-wrapper {
					display: flex;
					justify-content: center;
					gap: 32px;
				}

				span {
					font-size: 80px;
				}

				button {
					cursor: pointer;
					padding: 0 32px;
					background-color: #3498db;
					font-size: 32px;
					color: white;
					border: none;
					box-shadow: none;
					border-radius: 16px;
				}

				button:hover {
					background-color: #2980b9;
				}
			`}</style>
		</div>
	);
};

export default Counter;
