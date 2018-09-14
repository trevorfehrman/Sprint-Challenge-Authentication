import React, { Component } from "react";
import axios from "axios";
const API = "http://localhost:3300/api/jokes";
class Jokes extends Component {
	state = {
		jokes: [],
		loading: false,
	};

	componentDidMount() {
		this.setState({ loading: true });
		axios({
			method: "GET",
			url: API,
			headers: {
				authorization: localStorage.getItem("token"),
			},
		}).then(response => {
			this.setState({ jokes: response.data, loading: false });
		});
	}

	render() {
		return (
			<div>
				<h1>Jokes</h1>
				{this.state.jokes.map(joke => (
					<div>
						<p>{joke.setup}</p>
						<p>{joke.punchline}</p>
					</div>
				))}
			</div>
		);
	}
}

export default Jokes;
