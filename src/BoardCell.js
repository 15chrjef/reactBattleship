import React from 'react';

class BoardCell extends React.Component {
	constructor(props){
		super(props)
		this.state ={
			clicked: false
		}
	}
	handleClick(value, row, column){
		if(!this.state.clicked){
			this.setState({ clicked: true })
			this.props.handleBoardClick(value, row, column)
		}
	}
	render(){
		let { value, row, column } = this.props;
		var ship, displayedValue;
		if(value === 1 && this.state.clicked) {
			ship = { backgroundColor : 'red'}
			displayedValue = value;
		} else if(this.state.clicked){
			displayedValue = value
		} else {
			displayedValue = 'x'
		}
		return(
			<div onClick={this.handleClick.bind(this, value, row, column)}
				style={{...styles.boardCellStyle, ...ship}}>
				{displayedValue}
			</div>
		)
	}
}

var styles = {
	boardCellStyle:{
		fontSize: '50px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '50px',
		height: '50px',
		cursor: 'pointer',
		border: '1px solid black',
	}
}
export default BoardCell


