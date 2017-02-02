import React from 'react';
import BoardCell from './BoardCell';
import { WinMessage, ClickMessage } from './Messages';

export default class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hits: 0,
			clicks: 0,
			board: this.props.initialBoard,
			winNumber: ''
		} 
	}
	handleBoardClick(value, row, column) {
		let { winNumber, clicks , hits } = this.state
		var self = this;
		clicks++
		 if(value === 1){
			 ++hits
			 if(hits === 3) {
				 winNumber = clicks
			 }
		}
		this.setState({ hits, winNumber, clicks	})
	}
	renderBoardUI() {
		var newBoard = this.state.board.map((row, i) => 
			<div key={i} style={{display: 'flex', flexDirection: 'row'}}>
				{row.map((value, j) => 
					<BoardCell 
						key={`${i} + ${j}`}
						row={i}
						column={j}
						handleBoardClick={this.handleBoardClick.bind(this)} 
						value={value} 
					/>
				)}		
			</div>
		)
		return newBoard
	}
	render() {
		const { winNumber } = this.state;
		let boardUI=this.renderBoardUI()
		let winMessage = typeof winNumber === 'number' ? <WinMessage/> : '';
		let clickMessage = typeof winNumber === 'number' ?  <ClickMessage winNumber={winNumber}/> : '' ;
		return(
			<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
				<div>{boardUI}</div>
				<div>{winMessage}</div>
				<div>{clickMessage}</div>
			</div>
		)
	}
}