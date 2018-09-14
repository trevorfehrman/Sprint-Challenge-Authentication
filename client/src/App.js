import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import Register from "./containers/register";
import Login from "./containers/login";
import Jokes from "./components/users";

class App extends Component {
	handleLogout = () => {
		localStorage.removeItem("token");
	};
	render() {
		return (
			<div className="App">
				<h1>Hi Earth</h1>
				<Register />
				<Login />
				<button onClick={this.handleLogout}>Logout</button>
				<Route path="/jokes" render={() => <Jokes />} />
				<Link to="/jokes">
					<button>Display jokes</button>
				</Link>
			</div>
		);
	}
}

export default App;
