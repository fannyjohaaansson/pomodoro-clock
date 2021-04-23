import React from 'react'
import ArrowDown from '../icons/arrow-down.png'
import ArrowUp from '../icons/arrow-up.png'

function BreakInterval(props) {
	function decreaseCounter() {
		if (props.BreakInterval === 1) {
			return
		}
		props.deCreaseBreak()
	}

	function increaseCounter() {
		if (props.BreakInterval === 60) {
			return
		}

		props.increaseBreak()
	}
	return (
		<section>
			<h4>Break Lenght</h4>

			<section className="interval-container">
				<img
					className="arrowInterval"
					src={ArrowDown}
					onClick={decreaseCounter}
				></img>
				{/* <button onClick={decreaseCounter}>Down</button> */}
				<p className="interval-length">{props.BreakInterval}</p>
				<img
					className="arrowInterval"
					src={ArrowUp}
					onClick={increaseCounter}
				></img>
			</section>
		</section>
	)
}

export default BreakInterval
