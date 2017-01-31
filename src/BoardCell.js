import React from 'react';

const BoardCell = (props) => {
	const { value, row, column } = props;
	var ship;
	if(props.value === 1) {
		ship = { backgroundColor : 'red'}
	}
	return(
		<div onClick={() => {	props.handleBoardClick(value, row, column)}	}
			style={{fontSize: '50px', cursor: 'pointer', border: '1px solid black', ...ship}}>
			{props.value}
		</div>
	)
}
export default BoardCell