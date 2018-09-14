import React from "react";

const Form = ({ username, password, handleSubmit, handleChange, name }) => (
	<div className="FormWrapper">
		<h1>{name}</h1>
		<form onSubmit={handleSubmit}>
			<div className="Form__inputWrapper">
				<input
					className="Form__input"
					type="text"
					placeholder="Username"
					name="username"
					onChange={handleChange}
					value={username}
				/>
			</div>
			<div className="Form__inputWrapper">
				<input
					className="Form__input"
					type="text"
					placeholder="Password"
					name="password"
					onChange={handleChange}
					value={password}
				/>
			</div>
			<button>Submit</button>
		</form>
	</div>
);

export default Form;
