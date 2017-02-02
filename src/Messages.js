import React from 'react';

const WinMessage = () => {
	return <h3>{'You have sunk more than half the enemy ships, you won! Feel free to stop now or keep sinking!'}</h3>;
}


const ClickMessage = (props) => {
	return <h3>{`You won with ${props.winNumber} clicks!`}</h3>
}

module.exports = {
	ClickMessage,
	WinMessage
}