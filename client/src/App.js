import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Register from "./containers/register";
import Jokes from "./components/users";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi Earth</h1>
				<Register />
				<Route exact path="/jokes" render={() => <Jokes />} />
				<Link to="/jokes">
					<button>Display jokes</button>
				</Link>
			</div>
		);
	}
}

export default App;
