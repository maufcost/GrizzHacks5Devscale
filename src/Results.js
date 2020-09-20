import React from "react";

import { FaAward } from "react-icons/fa";


class Results extends React.Component
{

	constructor(props)
	{
		super(props);

		this.state = {
			response: "Nothing yet"
		};

		this.callAPI = this.callAPI.bind(this);
	}

	componentDidMount()
	{
		this.callAPI()
			.then(res => this.setState({ response: res }))
			.catch(error => console.log(`Found the following error: ${error}`))
	}

	async callAPI()
	{
		const response = await fetch("http://localhost:5000/api/results");
		const responseJSON = await response.json();
		return responseJSON.userText;
	}

	render()
	{
		return (
			<section className="right">
				<FaAward className="title-icon"/>
				<h1 className="right-title">Analysis Results</h1>
				<p className="right-title-bottom">Take advantage of the results below and tweak your project to increase your victory chances.</p>

					<div className="results">
						{this.state.response}
					</div>
			</section>
		)
	}
}

export default Results;
