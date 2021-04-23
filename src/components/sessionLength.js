import React from 'react'
import ArrowDown from '../icons/arrow-down.png'
import ArrowUp from '../icons/arrow-up.png'

function SessionInterval(props) {
	function decreaseCounter() {
		if (props.SessionInterval === 1) {
			return
		}
		props.deCreaseSession()
	}

	function increaseCounter() {
		if (props.SessionInterval === 60) {
			return
		}

		props.increaseSession()
	}
	return (
		<section className="session-container">
			<h4>Session Lenght</h4>
			<section className="interval-container">
				<img
					className="arrowInterval"
					src={ArrowDown}
					onClick={decreaseCounter}
				></img>
				<p className="interval-length">{props.SessionInterval}</p>
				<img
					className="arrowInterval"
					src={ArrowUp}
					onClick={increaseCounter}
				></img>
			</section>
		</section>
	)
}

export default SessionInterval
