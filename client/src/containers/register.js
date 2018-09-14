import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import Form from "../components/form";
import axios from "axios";

const API = "http://localhost:3300/api/register";

class Register extends Component {
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
		this.handleRegister({
			username: this.state.username,
			password: this.state.password,
		});
		this.setState({
			username: "",
			password: "",
		});
	};

	handleRegister = user => {
		this.setState({ loading: true });
		axios.post(API, user).then(response => {
			localStorage.setItem("token", response.data.token);
			this.setState({
				loading: false,
				message: "Succesfully registered",
			});
		});
	};

	render() {
		return (
			<div className="RegisterWrapper">
				<Form
					name={"Register"}
					handleChange={this.handleChange}
					handleSubmit={this.onSubmit}
					username={this.state.username}
					password={this.state.password}
				/>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

export default Register;
