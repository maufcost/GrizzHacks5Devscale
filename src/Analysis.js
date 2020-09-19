import React from "react";
import { Link } from "@reach/router";
import { FaTrophy } from "react-icons/fa";

class Analysis extends React.Component
{
	render()
	{
		return (
			<section className="right">
				<FaTrophy className="title-icon"/>
				<h1 className="right-title">Let's analyze your project!</h1>
				<p className="right-title-bottom">Input below your project description submission and we'll tell you how close you're to winning.</p>

				<textarea rows="4" columns="50"></textarea>

				<Link to="/results" className="submit-btn">Analyze</Link>
			</section>
		)
	}
}

export default Analysis;
