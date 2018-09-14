import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Form from "../components/form";
import axios from "axios";

const API = "localhost:3300/api/register";

class Register extends Component {
	state = {
		username: "",
		password: "",
		loading: false,
		message: "",
		response: "",
	};

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	handleRegister = user => {
		this.setState({ loading: true });
		axios.post(API, user).then(response => {
			this.setState({
				loading: false,
				message: "Succesfully registered",
				response: response,
			});
		});
	};

	render() {
		return (
			<div className="RegisterWrapper">
				<Form
					name={"Register"}
					handleChange={this.handleChange}
					handleSubmit={this.handleRegister}
					username={this.state.username}
					password={this.state.password}
				/>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default Register;
