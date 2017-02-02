import React, { Component } from 'react';
import Board from './Board'
import Title from './Title'

class App extends Component {
  generateBoard(rows, columns) {
		var myBoard = []
		var ships = []
		for( var x = 0; x < 5; x++) {
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
    return myBoard
	}
  render() {
    let myBoard = this.generateBoard(5, 5)
    return (
      <div style={{ flexDirection: 'column', display: 'flex', justifyContent:'center', alignItems: 'center'}}>
        <Title/>
        <Board initialBoard={myBoard}/>
      </div>
    );
  }
}

export default App;
