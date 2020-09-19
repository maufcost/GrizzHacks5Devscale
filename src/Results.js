import React from "react";

import { FaAward } from "react-icons/fa";


class Results extends React.Component
{
	render()
	{
		return (
			<section className="right">
				<FaAward className="title-icon"/>
				<h1 className="right-title">Analysis Results</h1>
				<p className="right-title-bottom">Take advantage of the results below and tweak your project to increase your victory chances.</p>
			</section>
		)
	}
}

export default Results;
