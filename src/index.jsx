import React, {render} from 'preact';

import './index.css';
import App from './App';

let root;

function init() {
	// 3rd parameter root to indicate which DOM to replace
	root = render(<App />, document.body, root);
}

// HMR declaration for preact
if (module.hot) {
	// turn this on if you want to enable React DevTools!
	// require('preact/devtools');

	module.hot.accept('./App', () => requestAnimationFrame(init) );
}

init();
