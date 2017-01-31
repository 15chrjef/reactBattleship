import React from 'react';
import BoardCell from './BoardCell';

export default class Board extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			hits: 0,
			board: []
		}
	}
	componentWillMount() {
		this.generateBoard()
	}
	handleBoardClick(value, row, column) {
		var self = this;
		if(value === 0) {
			console.log('miss')
		} else if(value === 1){
			console.log('hit')
			var newBoard = this.state.board.slice()
			newBoard[row][column] = 2;
			this.setState({
				hits: ++this.state.hits,
				board: newBoard
			}, setTimeout(() => {
				if(self.state.hits === 3) {
					alert('done we have finished')
				}
			},10))
		} 
	}
	generateBoard() {
		const { rows, columns } = this.props
		var myBoard = []
		var ships = []
		for( var x = 0; x < 3; x++) {
			var randomRow = Math.floor(Math.random() * rows)
			var randomColumn = Math.floor(Math.random() * columns)
			ships.push(`${randomRow}${randomColumn}`)
		}
		for(var i = 0; i < rows; i++) {
			myBoard.push([])
			for( var j = 0; j < columns; j++) {
				var randomNumber = 0;
				if( ships.indexOf(`${i}${j}`) > -1) {
					randomNumber = 1
				}
				myBoard[i].push(randomNumber)
			}
		}
		this.setState({
			board: myBoard
		})
	}
	render() {
		var boardUI = this.state.board.map((row, i) => {
			return (
				<div style={{display: 'flex', flexDirection: 'row'}}>
					{row.map((value, j) => {
						return(
							<BoardCell 
								key={`${i} + ${j}`}
								row={i}
								column={j}
								handleBoardClick={this.handleBoardClick.bind(this)} 
								value={value} 
							/>
						)
					})}
				</div>
			)
		})
		return(
			<div>
				{boardUI}
			</div>
		)
	}
}