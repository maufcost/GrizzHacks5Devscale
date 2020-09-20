import React from "react";

import { FaAward } from "react-icons/fa";


class Results extends React.Component
{

	constructor(props)
	{
		super(props);

		this.state = {
			label: "No label yet",
			score: "No score yet"
		};

		this.callAPI = this.callAPI.bind(this);
	}

	componentDidMount()
	{
		this.callAPI()
			.then(res => this.setState({ label: res.label, score: res.score }))
			.catch(error => console.log(`Found the following error: ${error}`))
	}

	async callAPI()
	{
		const response = await fetch("http://localhost:5000/api/results");
		const responseJSON = await response.json();
		console.log(responseJSON.data);
		return responseJSON.data;
	}

	render()
	{
		return (
			<section className="right">
				<FaAward className="title-icon"/>
				<h1 className="right-title">Analysis Results</h1>
				<p className="right-title-bottom">Take advantage of the results below and tweak your project to increase your victory chances.</p>

					<div className="results">
						<p>{this.state.label}</p>
						<p>{this.state.score}</p>
					</div>
			</section>
		)
	}
}

export default Results;
