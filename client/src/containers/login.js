import React, { Component } from "react";
import Form from "../components/form";
import axios from "axios";

const API = "http://localhost:3300/api/login";

class Login extends Component {
	state = {
		username: "",
		password: "",
		loading: false,
		message: "",
	};
	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmit = event => {
		event.preventDefault();
		this.handleLogin({
			username: this.state.username,
			password: this.state.password,
		});
	};

	handleLogin = user => {
		this.setState({ loading: true });
		axios.post(API, user).then(response => {
			localStorage.setItem("token", response.data.token);
			this.setState({
				loading: false,
				message: "Successfully registered",
			});
		});
	};

	render() {
		return (
			<div>
				<Form
					name={"Login"}
					handleChange={this.handleChange}
					handleSubmit={this.onSubmit}
					username={this.username}
					password={this.password}
				/>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default Login;
