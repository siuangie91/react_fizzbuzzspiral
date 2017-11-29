import React from 'react';
import ReactDOM from 'react-dom';

import Box from './Box'

import './index.css';

function App(props) {
	return (
		<div>
			<h1>FizzBuzz Spiral</h1>
			<Box />
		</div>

	);
}


// =============================

ReactDOM.render(
	<App />, 
	document.getElementById('root'));