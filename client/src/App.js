import React, { Component } from "react";
import { Route } from "react-router-dom";
import Register from "./containers/register";

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Hi Earth</h1>
				<Register />
			</div>
		);
	}
}

export default App;
