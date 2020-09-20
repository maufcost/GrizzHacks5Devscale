import React from "react";
import { navigate } from "@reach/router";
import { FaTrophy } from "react-icons/fa";

class Analysis extends React.Component
{

	constructor(props) {
		super(props);

		this.state = {
			textAreaContent: ""
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	async handleSubmit(event)
	{
		event.preventDefault();

		// Posting whatever's in the textarea to the server.
		await fetch("http://localhost:5000/api/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ userText: this.state.textAreaContent })
		});

		navigate("/results");
	}

	handleChange(event)
	{
		this.setState({
			textAreaContent: event.target.value
		});
	}

	render()
	{
		return (
			<section className="right">
				<div>
					{this.state.response}
				</div>
				<FaTrophy className="title-icon"/>
				<h1 className="right-title">Let's analyze your project!</h1>
				<p className="right-title-bottom">Input below your project description submission and we'll tell you how close you're to winning.</p>

				<textarea
					value={this.state.textAreaContent}
					onChange={this.handleChange}
					rows="4"
					columns="50">
				</textarea>

				<button onClick={this.handleSubmit} className="submit-btn">Analyze</button>
			</section>
		)
	}
}

export default Analysis;
