import React from 'react';

const boxesArr = [];
for(let i = 1; i < 16; i++) {
	boxesArr.push(i);
}

const sumOf = (n, fn) => {
  Array
 	.from(Array(n).keys())
  	.reduce((a, n) => a + fn(n), 0)
};

const getBoxStyle = (n) => {	
	const baseSize = 100
	const baseAngle = 50 * Math.PI/180
	const ratio = Math.sqrt(Math.tan(baseAngle)**2 + 1)/2

	return {
		position: 'absolute',
		width: baseSize*ratio**n,
		height: baseSize*ratio**n,
		left: '60%',
		top: sumOf(n, i =>
			baseSize*ratio**i*Math.cos(i*baseAngle)
		),
		marginLeft: sumOf(n, i =>
			-baseSize*ratio**i*Math.sin(i*baseAngle)
		),
		fontFamily: 'sans-serif',
		transform: `rotate(${n*baseAngle}rad)`,
		transformOrigin: 'top left',
		backgroundColor: '#61dafb',
		textAlign: 'center',
		lineHeight: baseSize*ratio**n+'px',
		fontSize: '18px'
	};
};


export default class Box extends React.Component {
	render() {
		const theseBoxes = boxesArr.map((val, index) => {
			let displayNum = 'default';

			switch(true) {
				case (val % 3 === 0 && val % 5 !== 0):
					displayNum = 'Fizz';
					break;
				case (val % 5 === 0 && val % 3 !== 0):
					displayNum = 'Buzz';
					break;
				case (val % 3 === 0 && val % 5 === 0):
					displayNum = 'FizzBuzz';
					break;
				default:
					displayNum = val;
			}

			return (
				<div key={index} style={getBoxStyle(index)}>{displayNum}</div>
			);
		});

		return (	
			<div>{theseBoxes}</div>
		);
	}
}