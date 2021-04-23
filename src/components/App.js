import React from 'react'
import '../App.css'
import BreakInterval from './breakInterval'
import SessionInterval from './sessionLength'
import Timer from './timer'

class App extends React.Component {
	constructor() {
		super()

		this.state = {
			breakLength: 5,
			sessionLength: 25,
			timerMinute: 25,
			isPlay: false,
		}

		this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this)
		this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this)
		this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this)
		this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this)
		this.onToggleInterval = this.onToggleInterval.bind(this)
		this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this)
		this.onResetTimer = this.onResetTimer.bind(this)
		this.onPlayStopTimer = this.onPlayStopTimer.bind(this)
	}

	onIncreaseBreakLength() {
		this.setState((prevState) => {
			return {
				breakLength: prevState.breakLength + 1,
			}
		})
	}

	onDecreaseBreakLength() {
		this.setState((prevState) => {
			return {
				breakLength: prevState.breakLength - 1,
			}
		})
	}

	onIncreaseSessionLength() {
		this.setState((prevState) => {
			return {
				sessionLength: prevState.sessionLength + 1,
				timerMinute: prevState.sessionLength + 1,
			}
		})
	}
	onDecreaseSessionLength() {
		this.setState((prevState) => {
			return {
				sessionLength: prevState.sessionLength - 1,
				timerMinute: prevState.sessionLength - 1,
			}
		})
	}

	onUpdateTimerMinute() {
		this.setState((prevState) => {
			return {
				timerMinute: prevState.timerMinute - 1,
			}
		})
	}

	onToggleInterval(isSession) {
		if (isSession) {
			this.setState({
				timerMinute: this.state.sessionLength,
			})
		} else {
			this.setState({
				timerMinute: this.state.breakLength,
			})
		}
	}

	onResetTimer() {
		this.setState({
			timerMinute: this.state.sessionLength,
		})
	}

	onPlayStopTimer(isplay) {
		this.setState({
			isplay: isplay,
		})
	}

	render() {
		return (
			<main>
				<h2>Pomodoro Clock</h2>
				<section className="interval-length-container">
					<SessionInterval
						isPlay={this.state.isPlay}
						SessionInterval={this.state.sessionLength}
						increaseSession={this.onIncreaseSessionLength}
						deCreaseSession={this.onDecreaseSessionLength}
					/>
					<BreakInterval
						isPlay={this.state.isPlay}
						BreakInterval={this.state.breakLength}
						increaseBreak={this.onIncreaseBreakLength}
						deCreaseBreak={this.onDecreaseBreakLength}
					/>
				</section>

				<Timer
					timerMinute={this.state.timerMinute}
					breakLength={this.state.breakLength}
					updateTimerMinute={this.onUpdateTimerMinute}
					toggleInterval={this.onToggleInterval}
					resetTimer={this.onResetTimer}
					onPlayStopTimer={this.onPlayStopTimer}
				/>
			</main>
		)
	}
}

export default App
