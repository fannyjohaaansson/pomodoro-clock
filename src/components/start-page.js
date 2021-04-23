import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import App from './App.js'
import '../App.css'
import Arrow from '../icons/next.png'

function HomePage() {
	return (
		<Router>
			{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
			<Switch>
				<Route path="/App">
					<App />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	)
}
const Home = () => {
	return (
		<div className="mainContainer">
			<section className="introSection">
				<h1>Hello!</h1>
				<h3> Let us help you stay focused</h3>
			</section>
			<Link to="/App">
				<img className="homeArrow" src={Arrow} alt=""></img>
			</Link>
		</div>
	)
}

export default HomePage
