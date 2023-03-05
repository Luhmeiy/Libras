function supportsWorkerType() {
	let supports = false;
	const tester = {
		get type() {
			supports = true;
		},
	};

	try {
		new Worker("blob://", tester).terminate();
	} finally {
		return supports;
	}
}

function preparerunChecker({ timerDelay }) {
	let lastEvent = Date.now();

	return {
		shouldRun() {
			const result = Date.now() - lastEvent > timerDelay;

			if (result) lastEvent = Date.now();

			return result;
		},
	};
}

export { supportsWorkerType, preparerunChecker };
